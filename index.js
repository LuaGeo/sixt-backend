const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const Location = require("./models/Location");
const Vehicle = require("./models/Vehicle");

const app = express();
app.set("trust proxy", true); // derrière le proxy de déploiement -> req.protocol = https
app.use(cors());
app.use(express.json());

// Photos des véhicules (copiées depuis DB/images/models par `npm run build:catalog`).
// Servies sur /car-images/<fichier>.jpg
app.use(express.static(path.join(__dirname, "public")));

// Les documents stockent un chemin relatif ("/car-images/x.jpg") pour rester
// portables entre local et prod ; on le transforme en URL absolue à la volée.
const absolutize = (req, p) =>
  typeof p === "string" && p.startsWith("/")
    ? `${req.protocol}://${req.get("host")}${p}`
    : p;

mongoose.connect(process.env.MONGODB_URI);

const reservationRoutes = require("./routes/reservation");
app.use(reservationRoutes);

// Échappe les caractères spéciaux avant de construire une RegExp à partir de la saisie utilisateur.
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// GET /locations?q=par
// Remplace l'ancien appel à l'API de l'école. Renvoie les agences dont le
// titre ou le sous-titre contient la recherche. Format attendu par react-select
// (LocationSearch.jsx) : [{ id, title, subtitle }]
app.get("/locations", async (req, res) => {
  try {
    const q = (req.query.q || "").trim();
    const filter = q
      ? { $or: [
          { title: new RegExp(escapeRegExp(q), "i") },
          { subtitle: new RegExp(escapeRegExp(q), "i") },
        ] }
      : {};
    const locations = await Location.find(filter)
      .select("-_id id title subtitle")
      .limit(20);
    res.status(200).json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// GET /rentaloffers?pickupStation=&returnStation=&pickupDate=&returnDate=
// Renvoie le catalogue de véhicules disponibles pour l'agence de retrait.
// Format attendu (RentOffersCards.jsx / RentOfferCardItem.jsx) : tableau d'offres
// avec { id, headlines, images, prices, carGroupInfo }.
app.get("/rentaloffers", async (req, res) => {
  try {
    const { pickupStation, pickupDate, returnDate } = req.query;

    if (returnDate && pickupDate && returnDate < pickupDate) {
      return res
        .status(400)
        .json({ error: "Return date cannot be earlier than pickup date" });
    }

    // stations vide = véhicule dispo partout ; sinon il faut que l'agence soit listée.
    const filter = pickupStation
      ? { $or: [{ stations: { $size: 0 } }, { stations: pickupStation }] }
      : {};

    const offers = await Vehicle.find(filter)
      .select("-_id -__v -rentDetails")
      .lean();
    for (const o of offers) {
      o.images.small = absolutize(req, o.images.small);
      o.images.large = absolutize(req, o.images.large);
    }
    res.status(200).json(offers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// POST /rentalconfigurations/create   body: { offerId }
// Renvoie les protections / options / frais d'un véhicule.
// Format attendu (Modal.jsx, OfferConfig.jsx, PriceDetailsModal.jsx) :
// { splashImages, includedCharges, additionalCharges, extraFees }
app.post("/rentalconfigurations/create", async (req, res) => {
  try {
    const { offerId } = req.body;
    if (!offerId) {
      return res.status(400).json({ error: "offerId is required" });
    }

    const vehicle = await Vehicle.findOne({ id: offerId }).lean();
    if (!vehicle) {
      return res.status(404).json({ error: "Offer not found" });
    }

    const rentDetails = vehicle.rentDetails;
    rentDetails.splashImages = (rentDetails.splashImages || []).map((p) =>
      absolutize(req, p)
    );
    res.status(200).json(rentDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

app.all("*", function (req, res) {
  res.status(404).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started ! 🌈");
});

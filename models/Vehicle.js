const mongoose = require("mongoose");

// Un véhicule = une "offre" de location.
//
// Ce document contient TOUT ce que l'ancienne API de l'école renvoyait sur 2 routes :
//   - GET  /rentaloffers                  -> la partie "offre" (headlines, images, prices, carGroupInfo)
//   - POST /rentalconfigurations/create   -> la partie "rentDetails" (protections, options, frais)
//
// Le champ `id` (string) est l'identifiant métier utilisé par le frontend
// (offer.id dans RentOffersCards.jsx, envoyé comme offerId depuis Modal.jsx).

const priceSchema = {
  amount: { type: Number, required: true },
  currency: { type: String, default: "EUR" },
};

const Vehicle = mongoose.model("Vehicle", {
  id: { type: String, required: true, unique: true },

  // Utilisé pour rattacher l'offre à une ou plusieurs agences.
  // Vide = disponible dans toutes les agences.
  stations: { type: [String], default: [] },

  headlines: {
    description: { type: String, required: true }, // ex: "Fiat 500"
    shortSubline: { type: String, required: true }, // ex: "ou similaire | Mini"
    longSubline: { type: String, required: true }, // ex: "Fiat 500 Cabrio ou similaire"
    mileageInfo: { type: String, required: true }, // ex: "Kilométrage illimité"
  },

  images: {
    small: { type: String, required: true },
    large: { type: String, required: true },
  },

  prices: {
    dayPrice: priceSchema,
  },

  carGroupInfo: {
    maxPassengers: { type: Number, required: true },
    doors: { type: Number, required: true },
    automatic: { type: Boolean, required: true },
    baggage: { type: Number, required: true },
    airCondition: { type: Boolean, required: true },
    driverMinAge: { type: Number, required: true },
    bodyStyle: { type: String, required: true }, // Cabriolet | Berline | SUV | Coupé | Pick-up
  },

  // Renvoyé tel quel par POST /rentalconfigurations/create
  rentDetails: {
    splashImages: { type: [String], default: [] },
    includedCharges: [
      {
        _id: false,
        title: { type: String, required: true },
      },
    ],
    additionalCharges: [
      {
        _id: false,
        id: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, default: "" },
        icon: { type: String, default: "" },
        price: priceSchema,
      },
    ],
    extraFees: [
      {
        _id: false,
        title: { type: String, required: true },
        price: priceSchema,
      },
    ],
  },
});

module.exports = Vehicle;

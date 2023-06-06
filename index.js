const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = process.env.API_KEY;

app.get("/locations", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/locations?q=${req.query.q}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

app.get("/rentaloffers", async (req, res) => {
  try {
    const { pickupStation, returnStation, pickupDate, returnDate } = req.query;
    if (returnDate < pickupDate) {
      return res
        .status(400)
        .json({ error: "Return date cannot be earlier than pickup date" });
    }
    const response = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/rentaloffers?pickupStation=${pickupStation}&returnStation=${returnStation}&pickupDate=${pickupDate}&returnDate=${returnDate}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

app.post("/rentalconfigurations/create", async (req, res) => {
  try {
    const { offerId } = req.body;
    const payload = {
      offerId,
    };
    const response = await axios.post(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/rentalconfigurations/create",
      payload,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

app.all("*", function (req, res) {
  res.status(404).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started ! 🌈");
});

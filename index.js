const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors);
app.use(express.json());

const apiKey = process.env.API_KEY;

app.get("/locations", async (req, res) => {
  console.log("HELLOO");
  try {
    const response = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/locations${req.query.q}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log(req.query.q);
    res.status(200).json(response.data);
  } catch (error) {
    console.log("caiu no catch");
    res.status(500).send({ message: error });
  }
});

app.all("*", function (req, res) {
  res.status(404).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started ! 🌈");
});

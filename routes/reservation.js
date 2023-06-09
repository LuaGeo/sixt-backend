const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

const generateReservationReference = require("../utils/generateReservationReference");

router.post("/reservations", async (req, res) => {
  try {
    const reservationData = req.body;

    const currentDate = new Date();
    const date = currentDate.toISOString().split("T")[0];

    const name = reservationData.clientDetails.lastName;

    const reference = generateReservationReference(date, name);

    const reservation = new Reservation({
      reservationDate: currentDate,
      reference: reference,
      startDate: reservationData.pickupDate,
      endDate: reservationData.returnDate,
      durationInDays: reservationData.rentalDurationInDays,
      clientDetails: {
        firstName: reservationData.clientDetails.firstName,
        lastName: reservationData.clientDetails.lastName,
        email: reservationData.clientDetails.email,
      },
      totalCost: reservationData.totalPrice,
      vehicleDetails: {
        vehicleType: reservationData.vehicleDetails.vehicleType,
        vehiclePhoto: reservationData.vehicleDetails.vehiclePhoto,
        priceDetails: {
          fees: reservationData.vehicleDetails.priceDetails.fees,
          options: reservationData.vehicleDetails.priceDetails.options,
        },
      },
    });

    await reservation.save();

    res.status(201).json({
      message: "Reservation added successfully",
      reference: reservation.reference,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/reservations/:id", async (req, res) => {
  try {
    const reservationId = req.params.id;

    const result = await Reservation.findByIdAndRemove(reservationId);

    if (result) {
      res.json({ message: "Reservation deleted successfully" });
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete reservation" });
  }
});

router.get("/reservations", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Failed to list reservations" });
  }
});

module.exports = router;

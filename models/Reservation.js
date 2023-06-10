const mongoose = require("mongoose");

const Reservation = mongoose.model("Reservation", {
  reservationDate: { type: Date, required: true },
  reference: { type: String, required: true, unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: { type: String, required: true },
  durationInDays: { type: Number, required: true },
  clientDetails: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
  },
  totalCost: { type: String, required: true },
  vehicleDetails: {
    vehicleType: { type: String, required: true },
    // vehicleDescription: { type: String, required: true },
    vehiclePhoto: { type: String, required: false },
    priceDetails: {
      dayPrice: { type: Number, required: true },
      fees: Array,
      options: Array,
    },
  },
});

module.exports = Reservation;

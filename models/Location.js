const mongoose = require("mongoose");

// Agence / station de retrait-retour.
// Le frontend (react-select dans LocationSearch.jsx) utilise :
//   - option.id        -> valeur envoyée comme pickupStation / returnStation
//   - option.subtitle  -> label affiché dans la liste
const Location = mongoose.model("Location", {
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});

module.exports = Location;

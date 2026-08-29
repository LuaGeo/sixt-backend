// Script de remplissage de la base de données.
//
//   node seed.js          -> insère les agences + véhicules (efface d'abord ces 2 collections)
//   node seed.js --keep    -> insère sans effacer (upsert par `id`)
//
// N'AFFECTE JAMAIS la collection "reservations".

require("dotenv").config();
const mongoose = require("mongoose");

const Location = require("./models/Location");
const Vehicle = require("./models/Vehicle");

const locations = require("./data/locations");
// Catalogue produit par `npm run build:catalog` à partir de DB/carwiki.db.
const vehicles = require("./data/vehicles.generated");

const keep = process.argv.includes("--keep");

const run = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connecté à MongoDB");

  if (!keep) {
    await Location.deleteMany({});
    await Vehicle.deleteMany({});
    console.log("Collections locations + vehicles vidées");
  }

  for (const loc of locations) {
    await Location.updateOne({ id: loc.id }, { $set: loc }, { upsert: true });
  }
  console.log(`${locations.length} agences insérées`);

  for (const veh of vehicles) {
    const { _source, ...doc } = veh; // _source = méta de build, pas un champ du schéma
    await Vehicle.updateOne({ id: doc.id }, { $set: doc }, { upsert: true });
  }
  console.log(`${vehicles.length} véhicules insérés`);

  await mongoose.disconnect();
  console.log("Terminé ✅");
};

run().catch((error) => {
  console.error("Erreur pendant le seed :", error);
  process.exit(1);
});

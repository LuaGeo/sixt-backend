// ─────────────────────────────────────────────────────────────────────────────
//  SÉLECTION CURÉE — 80 véhicules du catalogue de location
// ─────────────────────────────────────────────────────────────────────────────
//
//  Ce fichier est la SEULE partie écrite à la main. Chaque ligne pointe vers un
//  modèle réel de la base `DB/carwiki.db` (champ `slug`). Le script
//  `scripts/build-catalog.js` va y chercher : nom d'affichage, photo réelle,
//  dimensions, puissance et années — puis DÉDUIT le reste (portes, bagages,
//  boîte, âge mini) et INVENTE le prix via une formule (voir build-catalog.js).
//
//  La base carwiki n'est jamais modifiée. Les données inventées ne vivent que
//  dans `data/vehicles.generated.js` (produit par le build) puis dans MongoDB.
//
//  Champs d'une entrée :
//    slug      (obligatoire) identifiant du modèle dans carwiki.db
//    body      (obligatoire) "Berline" | "SUV" | "Cabriolet" | "Coupé" | "Pick-up"
//              → c'est CE champ qui fait foi (le body_type de carwiki est faux à 91 %)
//    id        (optionnel) forcé quand plusieurs entrées partagent le même slug
//              (ex. une A5 Coupé et une A5 Cabriolet). Défaut : "veh-<slug>".
//    label     (optionnel) nom d'affichage forcé (ex. "BMW Série 4 Cabriolet")
//    seats     (optionnel) écrase le nb de passagers déduit
//    doors     (optionnel) écrase le nb de portes déduit
//    automatic (optionnel) écrase la déduction boîte auto/manuelle
//    electric  (optionnel) true → 100 % électrique (prix +, boîte auto forcée)
//    tier      (optionnel) "luxe" | "sport" → ajuste le prix et l'âge mini
//    priceOverride (optionnel) fixe le prix/jour en dur (EUR)
//
//  Pour ajouter/retirer une voiture : édite ce tableau puis `npm run build:catalog`.

module.exports = [
  // ── BERLINES ───────────────────────────────────────────────── 30 ──────────
  // Mini / citadines
  { slug: "fiat-500", body: "Berline" },
  { slug: "fiat-panda", body: "Berline" },
  { slug: "fiat-grande-panda", body: "Berline", electric: true },
  { slug: "citroen-c1", body: "Berline" },
  { slug: "hyundai-i10", body: "Berline" },
  // Compactes
  { slug: "volkswagen-polo", body: "Berline" },
  { slug: "citroen-c3", body: "Berline" },
  { slug: "hyundai-i20", body: "Berline" },
  { slug: "mazda-2", body: "Berline" },
  { slug: "nissan-micra", body: "Berline" },
  { slug: "volkswagen-golf", body: "Berline" },
  { slug: "cupra-leon", body: "Berline" },
  { slug: "cupra-born", body: "Berline", electric: true },
  { slug: "nissan-leaf", body: "Berline", electric: true, label: "Nissan Leaf" },
  // Compactes premium
  { slug: "audi-a3", body: "Berline" },
  { slug: "bmw-1-series", body: "Berline", label: "BMW Série 1" },
  { slug: "mercedes-benz-a-class", body: "Berline", label: "Mercedes-Benz Classe A" },
  // Familiales
  { slug: "volkswagen-passat", body: "Berline" },
  { slug: "volvo-v60", body: "Berline", label: "Volvo V60" },
  { slug: "alfa-romeo-giulia", body: "Berline" },
  // Premium (segment D)
  { slug: "audi-a4", body: "Berline" },
  { slug: "bmw-3-series", body: "Berline", label: "BMW Série 3" },
  { slug: "mercedes-benz-c-class", body: "Berline", id: "veh-mercedes-benz-c-class", label: "Mercedes-Benz Classe C" },
  // Prestige
  { slug: "audi-a6", body: "Berline" },
  { slug: "bmw-5-series", body: "Berline", label: "BMW Série 5" },
  { slug: "mercedes-benz-e-class", body: "Berline", id: "veh-mercedes-benz-e-class", label: "Mercedes-Benz Classe E" },
  { slug: "bmw-i4", body: "Berline", electric: true },
  // Luxe
  { slug: "audi-a8", body: "Berline", tier: "luxe" },
  { slug: "bmw-7-series", body: "Berline", label: "BMW Série 7", tier: "luxe" },
  { slug: "mercedes-benz-s-class", body: "Berline", label: "Mercedes-Benz Classe S", tier: "luxe" },

  // ── SUV ────────────────────────────────────────────────────── 29 ──────────
  { slug: "citroen-c3-aircross", body: "SUV" },
  { slug: "volkswagen-t-cross", body: "SUV" },
  { slug: "volkswagen-t-roc", body: "SUV", id: "veh-volkswagen-t-roc" },
  { slug: "hyundai-kona", body: "SUV" },
  { slug: "dacia-duster", body: "SUV" },
  { slug: "dacia-bigster", body: "SUV" },
  { slug: "citroen-c5-aircross", body: "SUV" },
  { slug: "volkswagen-tiguan", body: "SUV" },
  { slug: "hyundai-tucson", body: "SUV" },
  { slug: "nissan-qashqai", body: "SUV" },
  { slug: "jeep-compass", body: "SUV" },
  { slug: "jeep-wrangler", body: "SUV", tier: "sport" },
  { slug: "cupra-formentor", body: "SUV" },
  { slug: "alfa-romeo-tonale", body: "SUV" },
  { slug: "mazda-cx-5", body: "SUV" },
  { slug: "honda-cr-v", body: "SUV" },
  { slug: "audi-q3", body: "SUV" },
  { slug: "audi-q5", body: "SUV" },
  { slug: "audi-q7", body: "SUV", seats: 7, tier: "luxe" },
  { slug: "audi-q4-e-tron", body: "SUV", electric: true },
  { slug: "bmw-x3", body: "SUV" },
  { slug: "bmw-x5", body: "SUV" },
  { slug: "bmw-x7", body: "SUV", seats: 7, tier: "luxe" },
  { slug: "mercedes-benz-glc", body: "SUV", label: "Mercedes-Benz GLC" },
  { slug: "mercedes-benz-gle", body: "SUV", label: "Mercedes-Benz GLE", seats: 7 },
  { slug: "mercedes-benz-eqa", body: "SUV", label: "Mercedes-Benz EQA", electric: true },
  { slug: "volvo-xc40", body: "SUV" },
  { slug: "volvo-xc60", body: "SUV" },
  { slug: "volvo-xc90", body: "SUV", seats: 7, tier: "luxe" },

  // ── CABRIOLETS ─────────────────────────────────────────────────  8 ──────────
  // Variantes "découvrables" de modèles dont on a la photo (prix/specs assumés).
  { slug: "fiat-500", body: "Cabriolet", id: "veh-fiat-500-cabrio", label: "Fiat 500C", seats: 4, doors: 2 },
  { slug: "audi-a3", body: "Cabriolet", id: "veh-audi-a3-cabrio", label: "Audi A3 Cabriolet", seats: 4, doors: 2 },
  { slug: "audi-a5", body: "Cabriolet", id: "veh-audi-a5-cabrio", label: "Audi A5 Cabriolet", seats: 4, doors: 2 },
  { slug: "bmw-4-series", body: "Cabriolet", id: "veh-bmw-4-series-cabrio", label: "BMW Série 4 Cabriolet", seats: 4, doors: 2 },
  { slug: "bmw-2-series", body: "Cabriolet", id: "veh-bmw-2-series-cabrio", label: "BMW Série 2 Cabriolet", seats: 4, doors: 2 },
  { slug: "mercedes-benz-c-class", body: "Cabriolet", id: "veh-mercedes-benz-c-class-cabrio", label: "Mercedes-Benz Classe C Cabriolet", seats: 4, doors: 2 },
  { slug: "mercedes-benz-e-class", body: "Cabriolet", id: "veh-mercedes-benz-e-class-cabrio", label: "Mercedes-Benz Classe E Cabriolet", seats: 4, doors: 2 },
  { slug: "bmw-z4", body: "Cabriolet", id: "veh-bmw-z4-roadster", label: "BMW Z4 Roadster", seats: 2, doors: 2, tier: "sport" },

  // ── COUPÉS ─────────────────────────────────────────────────────  8 ──────────
  { slug: "audi-tt", body: "Coupé", id: "veh-audi-tt-coupe", label: "Audi TT Coupé", seats: 2, doors: 2 },
  { slug: "audi-a5", body: "Coupé", id: "veh-audi-a5-coupe", label: "Audi A5 Coupé", seats: 4, doors: 2 },
  { slug: "audi-a7", body: "Coupé", id: "veh-audi-a7-sportback", label: "Audi A7 Sportback", seats: 5, doors: 5 },
  { slug: "audi-e-tron-gt", body: "Coupé", id: "veh-audi-e-tron-gt", label: "Audi e-tron GT", seats: 4, doors: 5, electric: true, tier: "sport" },
  { slug: "bmw-4-series", body: "Coupé", id: "veh-bmw-4-series-coupe", label: "BMW Série 4 Coupé", seats: 4, doors: 2 },
  { slug: "bmw-2-series", body: "Coupé", id: "veh-bmw-2-series-coupe", label: "BMW Série 2 Coupé", seats: 4, doors: 2 },
  { slug: "nissan-gt-r", body: "Coupé", id: "veh-nissan-gt-r", label: "Nissan GT-R", seats: 4, doors: 2, tier: "sport" },
  { slug: "mercedes-benz-amg-gt", body: "Coupé", id: "veh-mercedes-amg-gt", label: "Mercedes-AMG GT Coupé", seats: 2, doors: 2, tier: "sport" },

  // ── PICK-UP ────────────────────────────────────────────────────  5 ──────────
  { slug: "volkswagen-amarok", body: "Pick-up", seats: 5, doors: 4 },
  { slug: "nissan-navara", body: "Pick-up", seats: 5, doors: 4 },
  { slug: "nissan-frontier", body: "Pick-up", seats: 5, doors: 4 },
  { slug: "fiat-fullback", body: "Pick-up", seats: 5, doors: 4 },
  { slug: "jeep-gladiator", body: "Pick-up", seats: 5, doors: 4 },
];

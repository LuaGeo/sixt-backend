// ─────────────────────────────────────────────────────────────────────────────
//  build-catalog.js — génère data/vehicles.generated.js à partir de :
//     • data/catalog.source.js   (les 80 modèles choisis, écrit à la main)
//     • ../DB/carwiki.db          (base de RÉFÉRENCE, lue seulement, jamais modifiée)
//
//  Ce que le script prend dans carwiki (réel) :
//     nom d'affichage · photo · dimensions · puissance · années de production
//
//  Ce qu'il DÉDUIT par règles (crédible, pas dans la base) :
//     nb de passagers · nb de portes · nb de bagages · boîte auto · âge mini
//
//  Ce qu'il INVENTE (assumé — voir formule `dayPrice` plus bas) :
//     prix / jour · catégorie commerciale · répartition dans les agences
//
//  Aucune dépendance : lecture du JSON `DB/scraper/data/models.json` (qui suffit
//  à reconstruire carwiki.db) plutôt que du binaire SQLite.
//
//  Images :  IMAGE_SOURCE=remote (défaut) → liens directs carwiki.io
//            IMAGE_SOURCE=local            → /car-images/… servis par le backend
//                                            (copie les fichiers dans public/)
//
//  Usage :  npm run build:catalog        (depuis sixt-backend/)
//           CARWIKI_DIR=/chemin/DB IMAGE_SOURCE=local node scripts/build-catalog.js
// ─────────────────────────────────────────────────────────────────────────────

const fs = require("fs");
const path = require("path");

const CARWIKI_DIR =
  process.env.CARWIKI_DIR || path.resolve(__dirname, "../../DB");
const MODELS_JSON = path.join(CARWIKI_DIR, "scraper/data/models.json");
const BRANDS_JSON = path.join(CARWIKI_DIR, "scraper/data/brands.json");
const PHOTO_DIR = path.join(CARWIKI_DIR, "images/models");

const OUT_FILE = path.resolve(__dirname, "../data/vehicles.generated.js");
const PUBLIC_IMG_DIR = path.resolve(__dirname, "../public/car-images");

// D'où viennent les URLs d'images écrites dans le catalogue :
//   "remote" (défaut) → liens directs carwiki.io (marche sans rien héberger)
//   "local"           → /car-images/<fichier>.jpg servis par le backend
//                       (les fichiers sont alors copiés dans public/car-images/)
// Les photos téléchargées restent dans DB/images/models/ dans tous les cas (secours).
const IMAGE_SOURCE = (process.env.IMAGE_SOURCE || "remote").toLowerCase();
if (!["remote", "local"].includes(IMAGE_SOURCE)) {
  console.error(`\n✗ IMAGE_SOURCE doit valoir "remote" ou "local" (reçu : ${IMAGE_SOURCE})\n`);
  process.exit(1);
}

const source = require("../data/catalog.source");
const locations = require("../data/locations");

// ── chargement de la base de référence ───────────────────────────────────────
if (!fs.existsSync(MODELS_JSON)) {
  console.error(
    `\n✗ Base carwiki introuvable : ${MODELS_JSON}\n` +
      `  Définis CARWIKI_DIR sur le dossier "DB" du projet.\n`
  );
  process.exit(1);
}
const models = JSON.parse(fs.readFileSync(MODELS_JSON, "utf8"));
const brands = JSON.parse(fs.readFileSync(BRANDS_JSON, "utf8"));
const modelBySlug = new Map(models.map((m) => [m.slug, m]));
const brandName = new Map(brands.map((b) => [b.slug, b.name]));
// carwiki écrit certains noms sans diacritiques
const BRAND_DISPLAY = { citroen: "Citroën" };
const displayBrand = (slug) => BRAND_DISPLAY[slug] || brandName.get(slug) || slug;

// ── protections / options / frais — communs à toutes les offres ──────────────
//   (repris à l'identique de l'ancien data/vehicles.js : le front n'y touche pas)
const includedCharges = [
  { title: "Kilométrage illimité" },
  { title: "Assurance responsabilité civile" },
  { title: "Protection vol (avec franchise)" },
  { title: "Protection collision (CDW, avec franchise)" },
  { title: "Taxes locales et redevances aéroport" },
];
const additionalCharges = [
  { id: "opt-tp-full", title: "Protection totale (rachat de franchise)", description: "Réduit la franchise vol et collision à 0 €.", icon: "ico-bullet-sm", price: { amount: 24.99, currency: "EUR" } },
  { id: "opt-tyres-glass", title: "Protection pneus, jantes & bris de glace", description: "Couvre les dommages aux pneus, jantes, pare-brise et phares.", icon: "ico-bullet-sm", price: { amount: 9.99, currency: "EUR" } },
  { id: "opt-additional-driver", title: "Conducteur additionnel", description: "Ajoutez un second conducteur autorisé au contrat.", icon: "ico-bullet-sm", price: { amount: 7.5, currency: "EUR" } },
  { id: "opt-gps", title: "GPS de navigation", description: "Système de navigation embarqué avec cartographie Europe.", icon: "ico-bullet-sm", price: { amount: 6.0, currency: "EUR" } },
  { id: "opt-child-seat", title: "Siège enfant", description: "Siège homologué pour enfant de 9 à 18 kg.", icon: "ico-bullet-sm", price: { amount: 5.0, currency: "EUR" } },
  { id: "opt-booster", title: "Réhausseur", description: "Rehausseur homologué pour enfant de 15 à 36 kg.", icon: "ico-bullet-sm", price: { amount: 4.0, currency: "EUR" } },
  { id: "opt-wifi", title: "Borne Wi-Fi mobile", description: "Point d'accès 4G illimité pour vos trajets.", icon: "ico-bullet-sm", price: { amount: 8.0, currency: "EUR" } },
  { id: "opt-fuel", title: "Plein de carburant prépayé", description: "Restituez le véhicule sans repasser à la station.", icon: "ico-bullet-sm", price: { amount: 3.5, currency: "EUR" } },
];
const extraFees = [
  { title: "Frais de service aéroport / gare", price: { amount: 22.0, currency: "EUR" } },
  { title: "Frais de dossier", price: { amount: 12.0, currency: "EUR" } },
];

// ── helpers ──────────────────────────────────────────────────────────────────
const PREMIUM = new Set(["audi", "bmw", "mercedes-benz", "volvo", "alfa-romeo", "ds", "cupra", "jaguar", "land-rover", "lexus", "mini"]);
const EXOTIC = new Set(["porsche", "ferrari", "lamborghini", "aston-martin", "bentley", "maserati", "mclaren"]);

// hash déterministe (FNV-1a) → sert au "bruit" reproductible sur le prix
function hashInt(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// dernière génération connue qui a des dimensions
function pickGeneration(model) {
  const gens = (model._generations || []).filter((g) => g.length_mm);
  if (!gens.length) return {};
  return gens
    .slice()
    .sort(
      (a, b) =>
        (a.year_end || a.year_start || 0) - (b.year_end || b.year_start || 0)
    )
    .pop();
}

function powerValue(model, gen) {
  const lo = gen.power_min_hp ?? model.power_min_hp;
  const hi = gen.power_max_hp ?? model.power_max_hp;
  if (lo && hi) return 0.62 * lo + 0.38 * hi; // trim "typique location", pas le haut de gamme
  if (hi) return 0.75 * hi;
  if (lo) return lo;
  return 95;
}

// 100 % électrique : déclaré explicitement dans catalog.source.js
// (le champ displacement de carwiki est parfois vide pour des thermiques → pas fiable)
const isElectric = (entry) => entry.electric === true;

// ── règles de déduction ──────────────────────────────────────────────────────
const SEATS_DEFAULT = { Berline: 5, SUV: 5, "Coupé": 4, Cabriolet: 4, "Pick-up": 5 };

function deriveDoors(body, entry) {
  if (entry.doors) return entry.doors;
  if (body === "Coupé" || body === "Cabriolet") return 2;
  if (body === "Pick-up") return 4;
  return 5; // Berline (hayon compté) + SUV
}

function deriveBaggage(body, length, doors) {
  const L = length || 4300;
  let b = L < 3600 ? 1 : L < 4000 ? 2 : L < 4500 ? 3 : L < 4900 ? 4 : 5;
  if (body === "SUV") b = Math.min(5, b + 1);
  if (body === "Pick-up") b = 4;
  if (body === "Coupé") b = Math.min(doors >= 4 ? 3 : 2, b); // coupé 4 portes = coffre correct
  if (body === "Cabriolet") b = Math.min(2, Math.max(1, b - 1));
  return b;
}

const BASE_PRICE = { Berline: 30, SUV: 42, "Coupé": 60, Cabriolet: 54, "Pick-up": 58 };

// PRIX / JOUR — entièrement synthétique.
//   base(carrosserie) + 0,11·puissance + 0,010·(longueur−4300)
//   + prime marque (premium +22 / exotique +65) ou palier (luxe +60 / sport +40)
//   + 12 si électrique
//   + bruit déterministe ±4 (hash de l'id → stable d'un build à l'autre)
//   arrondi puis −0,10 (prix "psychologique" : 46,90)
function dayPrice(entry, id, brand, body, power, length, electric) {
  if (entry.priceOverride) return entry.priceOverride;
  let raw = BASE_PRICE[body];
  raw += Math.max(60, Math.min(480, power)) * 0.11;
  raw += ((length || 4300) - 4300) * 0.01;
  if (entry.tier === "luxe") raw += 60;
  else if (entry.tier === "sport") raw += 40;
  else if (EXOTIC.has(brand)) raw += 65;
  else if (PREMIUM.has(brand)) raw += 22;
  if (electric) raw += 12;
  raw += (hashInt(id) % 9) - 4;
  return Math.max(19, Math.round(raw)) - 0.1;
}

function deriveAutomatic(entry, brand, body, electric, price) {
  if (typeof entry.automatic === "boolean") return entry.automatic;
  if (electric) return true;
  if (entry.tier === "luxe" || entry.tier === "sport") return true;
  if (body === "Coupé" || body === "Pick-up") return true;
  if (PREMIUM.has(brand)) return true;
  return price >= 68;
}

function driverMinAge(price, body) {
  let a = price < 55 ? 21 : price < 90 ? 23 : price < 140 ? 25 : 27;
  if ((body === "Coupé" || body === "Cabriolet") && a < 23) a = 23;
  if (price >= 190) a = 30;
  return a;
}

function category(brand, body, price, length) {
  const prem = PREMIUM.has(brand) || EXOTIC.has(brand);
  if (body === "Cabriolet") return "Cabriolet";
  if (body === "Pick-up") return "Pick-up";
  if (body === "Coupé") return price >= 110 ? "Sport" : "Coupé";
  if (body === "SUV") return prem || price >= 95 ? "SUV Premium" : "SUV";
  // Berline : la catégorie suit la LONGUEUR (le prix ne fait que raffiner le premium)
  const L = length || 4200;
  let base;
  if (L < 3750) base = "Mini";
  else if (L < 4300) base = "Compacte";
  else if (L < 4750) base = prem ? "Premium" : "Familiale";
  else base = prem ? "Berline de prestige" : "Familiale";
  if (prem && base === "Compacte" && price >= 55) base = "Premium";
  if (prem && price >= 108) base = "Berline de prestige";
  return base;
}

// agences : éco/standard partout ([]), premium limité aux grandes agences
const PREMIUM_STATIONS = ["PAR01", "PAR02", "PAR03", "LYS01", "MRS01", "NCE01", "BOD01", "TLS01", "GVA01", "BRU01"].filter(
  (id) => locations.some((l) => l.id === id)
);
const stationsFor = (price) => (price >= 125 ? PREMIUM_STATIONS.slice() : []);

// ── construction ─────────────────────────────────────────────────────────────
const problems = [];
const seenIds = new Set();
const vehicles = [];

for (const entry of source) {
  const model = modelBySlug.get(entry.slug);
  if (!model) {
    problems.push(`modèle absent de carwiki : ${entry.slug}`);
    continue;
  }
  const id = entry.id || `veh-${entry.slug}`;
  if (seenIds.has(id)) {
    problems.push(`id dupliqué : ${id} (ajoute un champ "id" à l'entrée ${entry.slug})`);
    continue;
  }
  seenIds.add(id);

  const photoFile = `${model.brand_slug}__${entry.slug}.jpg`;
  if (!fs.existsSync(path.join(PHOTO_DIR, photoFile))) {
    problems.push(`photo manquante : ${photoFile}`);
    continue;
  }

  const gen = pickGeneration(model);
  const body = entry.body;
  const brand = model.brand_slug;
  const bName = displayBrand(brand);
  const length = gen.length_mm || null;
  const electric = isElectric(entry);
  const power = powerValue(model, gen);
  const year =
    model.production_end || gen.year_end || model.production_start || gen.year_start || null;

  const price = dayPrice(entry, id, brand, body, power, length, electric);
  const automatic = deriveAutomatic(entry, brand, body, electric, price);
  const seats = entry.seats || SEATS_DEFAULT[body];
  const doors = deriveDoors(body, entry);
  const baggage = deriveBaggage(body, length, doors);
  const minAge = driverMinAge(price, body);
  const cat = category(brand, body, price, length);

  const description = entry.label || `${bName} ${model.name}`;

  // URL de la photo selon le mode choisi
  const gensWithImg = (model._generations || []).filter((g) => g.image_url);
  const remoteUrl =
    model.image_url ||
    (gensWithImg.length ? gensWithImg[gensWithImg.length - 1].image_url : null);
  const img =
    IMAGE_SOURCE === "local" || !remoteUrl
      ? `/car-images/${photoFile}`
      : remoteUrl;

  vehicles.push({
    id,
    stations: stationsFor(price),
    headlines: {
      description,
      shortSubline: `ou similaire | ${cat}`,
      longSubline: `${description} ou similaire`,
      mileageInfo: "Kilométrage illimité",
    },
    images: { small: img, large: img },
    prices: { dayPrice: { amount: Number(price.toFixed(2)), currency: "EUR" } },
    carGroupInfo: {
      maxPassengers: seats,
      doors,
      automatic,
      baggage,
      airCondition: true,
      driverMinAge: minAge,
      bodyStyle: body,
    },
    rentDetails: {
      splashImages: [img, img, img], // carwiki n'a qu'une photo par modèle → répétée
      includedCharges,
      additionalCharges,
      extraFees,
    },
    // méta non renvoyées par l'API (schéma strict) mais utiles pour relire le fichier
    _source: { slug: entry.slug, year, powerHp: Math.round(power), electric },
  });

  // en mode "local" : copie de la photo de secours dans public/car-images/
  if (IMAGE_SOURCE === "local") {
    fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
    fs.copyFileSync(
      path.join(PHOTO_DIR, photoFile),
      path.join(PUBLIC_IMG_DIR, photoFile)
    );
  }
}

if (problems.length) {
  console.error("\n✗ Problèmes rencontrés :\n" + problems.map((p) => "   - " + p).join("\n") + "\n");
  process.exit(1);
}

// ── écriture du fichier généré ───────────────────────────────────────────────
const header = `// ⚠️  FICHIER GÉNÉRÉ PAR scripts/build-catalog.js — NE PAS ÉDITER À LA MAIN.
//
//     Source des choix   : data/catalog.source.js
//     Source des données : ../DB/carwiki.db  (référence, jamais modifiée)
//     Régénérer          : npm run build:catalog
//
//     ${vehicles.length} véhicules. Nom / photo / dimensions / puissance = réels (carwiki).
//     Portes / bagages / passagers / boîte / âge = déduits par règles.
//     Prix / catégorie / agences = inventés (formule dans build-catalog.js).
//     Le champ "_source" n'est pas renvoyé par l'API (schéma Mongoose strict).

module.exports = `;

fs.writeFileSync(OUT_FILE, header + JSON.stringify(vehicles, null, 2) + ";\n");

// ── récap ────────────────────────────────────────────────────────────────────
const byBody = {};
let min = Infinity;
let max = -Infinity;
for (const v of vehicles) {
  byBody[v.carGroupInfo.bodyStyle] = (byBody[v.carGroupInfo.bodyStyle] || 0) + 1;
  min = Math.min(min, v.prices.dayPrice.amount);
  max = Math.max(max, v.prices.dayPrice.amount);
}
console.log(`\n✓ ${vehicles.length} véhicules écrits dans data/vehicles.generated.js`);
console.log(`  carrosseries : ${Object.entries(byBody).map(([k, n]) => `${k} ${n}`).join(" · ")}`);
console.log(`  prix/jour    : ${min.toFixed(2)} € → ${max.toFixed(2)} €`);
console.log(
  IMAGE_SOURCE === "local"
    ? `  images       : /car-images/… (${vehicles.length} fichiers copiés dans public/car-images/)`
    : `  images       : liens directs carwiki.io (rien à héberger)`
);
console.log(`\n  Étape suivante : npm run seed  (remplit MongoDB, efface d'abord vehicles)\n`);

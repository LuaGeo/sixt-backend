# Sixt Backend

API Express/MongoDB pour le clone Sixt (location de véhicules). Sert les agences,
le catalogue de véhicules et les réservations consommés par [`sixt-frontend`](../sixt-frontend).

## Démo

**[luana-deoliveira-sixt.netlify.app](https://luana-deoliveira-sixt.netlify.app/)**

![Démo du site Sixt](./demo.png)

## Stack

- **Express** + **Mongoose** (MongoDB Atlas)
- **cors**, **dotenv**
- Catalogue de véhicules généré hors-ligne depuis une base scrapée (carwiki.io) —
  voir [`README-BASE-DE-DONNEES.md`](./README-BASE-DE-DONNEES.md)

## Démarrage

```bash
npm install
npm run seed      # remplit locations + vehicles dans MongoDB (voir plus bas)
npm start         # démarre l'API sur le PORT du .env
```

### Variables d'environnement (`.env`, non versionné)

| Variable | Rôle |
|---|---|
| `MONGODB_URI` | connexion au cluster MongoDB Atlas (base `sixt`) |
| `PORT` | port d'écoute de l'API (`3000` en local) |
| `API_KEY` | résidu de l'ancienne API de l'école, **plus utilisé** dans le code |

## Routes

| Méthode | Route | Rôle |
|---|---|---|
| `GET` | `/locations?q=` | recherche d'agences par titre/sous-titre |
| `GET` | `/rentaloffers?pickupStation=&returnStation=&pickupDate=&returnDate=` | catalogue de véhicules disponibles |
| `POST` | `/rentalconfigurations/create` `{ offerId }` | protections/options/frais + photos d'un véhicule |
| `POST` | `/reservations` | crée une réservation |
| `GET` | `/reservations` | liste les réservations (back-office) |
| `DELETE` | `/reservations/:id` | supprime une réservation (back-office) |

Toutes les routes sauf `/reservations` remplacent l'ancienne API de l'école
(`lereacteur-bootcamp-api`, clé expirée) et lisent MongoDB.

## Structure

```
sixt-backend/
├── index.js                  # routes + config Express (statique, CORS, absolutize images)
├── models/                   # schémas Mongoose : Location, Vehicle, Reservation
├── routes/reservation.js     # routes /reservations
├── utils/                    # ex. génération de référence de réservation
├── data/
│   ├── locations.js          # 16 agences (à la main)
│   ├── catalog.source.js     # 80 véhicules choisis (à la main) — voir README-BASE-DE-DONNEES.md
│   └── vehicles.generated.js # catalogue complet (généré, ne pas éditer)
├── scripts/build-catalog.js  # génère vehicles.generated.js depuis DB/carwiki.db
├── public/car-images/        # photos de secours (mode IMAGE_SOURCE=local)
├── seed.js                   # remplit MongoDB depuis data/
└── README-BASE-DE-DONNEES.md # détail du pipeline catalogue (lecture recommandée)
```

## Catalogue de véhicules

Le catalogue (80 véhicules) est **généré**, pas écrit à la main :
`DB/carwiki.db` (référence, jamais modifiée) → `npm run build:catalog` →
`data/vehicles.generated.js` → `npm run seed` → MongoDB.

Détails complets (règles de déduction, formule de prix, gestion des images
carwiki.io vs locales) : **[README-BASE-DE-DONNEES.md](./README-BASE-DE-DONNEES.md)**.

## Déploiement

Déployé sur **Northflank**. Le service est en buildpack Heroku
(`heroku/builder-classic:22`) — actuellement marqué déprécié par Northflank ;
si un push ne se reflète pas en prod, vérifier d'abord l'onglet **Build** du
service (stack à mettre à jour, ou basculer sur un `Dockerfile`).

CI/CD activé sur la branche `main` du repo GitHub `LuaGeo/sixt-backend`.

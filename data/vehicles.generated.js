// ⚠️  FICHIER GÉNÉRÉ PAR scripts/build-catalog.js — NE PAS ÉDITER À LA MAIN.
//
//     Source des choix   : data/catalog.source.js
//     Source des données : ../DB/carwiki.db  (référence, jamais modifiée)
//     Régénérer          : npm run build:catalog
//
//     80 véhicules. Nom / photo / dimensions / puissance = réels (carwiki).
//     Portes / bagages / passagers / boîte / âge = déduits par règles.
//     Prix / catégorie / agences = inventés (formule dans build-catalog.js).
//     Le champ "_source" n'est pas renvoyé par l'API (schéma Mongoose strict).

module.exports = [
  {
    "id": "veh-fiat-500",
    "stations": [],
    "headlines": {
      "description": "Fiat 500",
      "shortSubline": "ou similaire | Mini",
      "longSubline": "Fiat 500 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/fiat-500-312-1.2-8v-69hp.jpg",
      "large": "https://carwiki.io/images/cars/fiat-500-312-1.2-8v-69hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 33.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/fiat-500-312-1.2-8v-69hp.jpg",
        "https://carwiki.io/images/cars/fiat-500-312-1.2-8v-69hp.jpg",
        "https://carwiki.io/images/cars/fiat-500-312-1.2-8v-69hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "fiat-500",
      "year": 2025,
      "powerHp": 85,
      "electric": false
    }
  },
  {
    "id": "veh-fiat-panda",
    "stations": [],
    "headlines": {
      "description": "Fiat Panda",
      "shortSubline": "ou similaire | Mini",
      "longSubline": "Fiat Panda ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/fiat-panda-zaf-141-facelift-1986-1000-cl-s-45hp.jpg",
      "large": "https://carwiki.io/images/cars/fiat-panda-zaf-141-facelift-1986-1000-cl-s-45hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 27.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/fiat-panda-zaf-141-facelift-1986-1000-cl-s-45hp.jpg",
        "https://carwiki.io/images/cars/fiat-panda-zaf-141-facelift-1986-1000-cl-s-45hp.jpg",
        "https://carwiki.io/images/cars/fiat-panda-zaf-141-facelift-1986-1000-cl-s-45hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "fiat-panda",
      "year": 2024,
      "powerHp": 57,
      "electric": false
    }
  },
  {
    "id": "veh-fiat-grande-panda",
    "stations": [],
    "headlines": {
      "description": "Fiat Grande Panda",
      "shortSubline": "ou similaire | Compacte",
      "longSubline": "Fiat Grande Panda ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/fiat-grande-panda-1.2-101hp-mild-hybrid-edct.jpg",
      "large": "https://carwiki.io/images/cars/fiat-grande-panda-1.2-101hp-mild-hybrid-edct.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 47.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/fiat-grande-panda-1.2-101hp-mild-hybrid-edct.jpg",
        "https://carwiki.io/images/cars/fiat-grande-panda-1.2-101hp-mild-hybrid-edct.jpg",
        "https://carwiki.io/images/cars/fiat-grande-panda-1.2-101hp-mild-hybrid-edct.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "fiat-grande-panda",
      "year": 2025,
      "powerHp": 106,
      "electric": true
    }
  },
  {
    "id": "veh-citroen-c1",
    "stations": [],
    "headlines": {
      "description": "Citroën C1",
      "shortSubline": "ou similaire | Mini",
      "longSubline": "Citroën C1 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/citroen-c1-i-phase-i-2005-5-door-1.0i-68hp-sensodrive.jpg",
      "large": "https://carwiki.io/images/cars/citroen-c1-i-phase-i-2005-5-door-1.0i-68hp-sensodrive.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 24.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 1,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/citroen-c1-i-phase-i-2005-5-door-1.0i-68hp-sensodrive.jpg",
        "https://carwiki.io/images/cars/citroen-c1-i-phase-i-2005-5-door-1.0i-68hp-sensodrive.jpg",
        "https://carwiki.io/images/cars/citroen-c1-i-phase-i-2005-5-door-1.0i-68hp-sensodrive.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "citroen-c1",
      "year": 2022,
      "powerHp": 70,
      "electric": false
    }
  },
  {
    "id": "veh-hyundai-i10",
    "stations": [],
    "headlines": {
      "description": "Hyundai i10",
      "shortSubline": "ou similaire | Mini",
      "longSubline": "Hyundai i10 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/hyundai-grand-i10-ii-1.2-83hp.jpg",
      "large": "https://carwiki.io/images/cars/hyundai-grand-i10-ii-1.2-83hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 35.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/hyundai-grand-i10-ii-1.2-83hp.jpg",
        "https://carwiki.io/images/cars/hyundai-grand-i10-ii-1.2-83hp.jpg",
        "https://carwiki.io/images/cars/hyundai-grand-i10-ii-1.2-83hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "hyundai-i10",
      "year": 2024,
      "powerHp": 77,
      "electric": false
    }
  },
  {
    "id": "veh-volkswagen-polo",
    "stations": [],
    "headlines": {
      "description": "Volkswagen Polo",
      "shortSubline": "ou similaire | Compacte",
      "longSubline": "Volkswagen Polo ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volkswagen-polo-iv-9n-1.2-i-12v-64hp.jpg",
      "large": "https://carwiki.io/images/cars/volkswagen-polo-iv-9n-1.2-i-12v-64hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 45.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volkswagen-polo-iv-9n-1.2-i-12v-64hp.jpg",
        "https://carwiki.io/images/cars/volkswagen-polo-iv-9n-1.2-i-12v-64hp.jpg",
        "https://carwiki.io/images/cars/volkswagen-polo-iv-9n-1.2-i-12v-64hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volkswagen-polo",
      "year": 2024,
      "powerHp": 128,
      "electric": false
    }
  },
  {
    "id": "veh-citroen-c3",
    "stations": [],
    "headlines": {
      "description": "Citroën C3",
      "shortSubline": "ou similaire | Compacte",
      "longSubline": "Citroën C3 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/citroen-c3-i-phase-ii-2005-1.4-hdi-68hp.jpg",
      "large": "https://carwiki.io/images/cars/citroen-c3-i-phase-ii-2005-1.4-hdi-68hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 41.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/citroen-c3-i-phase-ii-2005-1.4-hdi-68hp.jpg",
        "https://carwiki.io/images/cars/citroen-c3-i-phase-ii-2005-1.4-hdi-68hp.jpg",
        "https://carwiki.io/images/cars/citroen-c3-i-phase-ii-2005-1.4-hdi-68hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "citroen-c3",
      "year": 2025,
      "powerHp": 106,
      "electric": false
    }
  },
  {
    "id": "veh-hyundai-i20",
    "stations": [],
    "headlines": {
      "description": "Hyundai i20",
      "shortSubline": "ou similaire | Compacte",
      "longSubline": "Hyundai i20 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/hyundai-i20-i-pb-facelift-2012-1.2-16v-86hp.jpg",
      "large": "https://carwiki.io/images/cars/hyundai-i20-i-pb-facelift-2012-1.2-16v-86hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 36.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/hyundai-i20-i-pb-facelift-2012-1.2-16v-86hp.jpg",
        "https://carwiki.io/images/cars/hyundai-i20-i-pb-facelift-2012-1.2-16v-86hp.jpg",
        "https://carwiki.io/images/cars/hyundai-i20-i-pb-facelift-2012-1.2-16v-86hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "hyundai-i20",
      "year": 2025,
      "powerHp": 98,
      "electric": false
    }
  },
  {
    "id": "veh-mazda-2",
    "stations": [],
    "headlines": {
      "description": "Mazda 2",
      "shortSubline": "ou similaire | Compacte",
      "longSubline": "Mazda 2 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mazda-2-ii-de-1.3i-75hp.jpg",
      "large": "https://carwiki.io/images/cars/mazda-2-ii-de-1.3i-75hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 39.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mazda-2-ii-de-1.3i-75hp.jpg",
        "https://carwiki.io/images/cars/mazda-2-ii-de-1.3i-75hp.jpg",
        "https://carwiki.io/images/cars/mazda-2-ii-de-1.3i-75hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mazda-2",
      "year": 2022,
      "powerHp": 86,
      "electric": false
    }
  },
  {
    "id": "veh-nissan-micra",
    "stations": [],
    "headlines": {
      "description": "Nissan Micra",
      "shortSubline": "ou similaire | Compacte",
      "longSubline": "Nissan Micra ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/nissan-micra-c-c-k12-1.6-16v-110hp.jpg",
      "large": "https://carwiki.io/images/cars/nissan-micra-c-c-k12-1.6-16v-110hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 33.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/nissan-micra-c-c-k12-1.6-16v-110hp.jpg",
        "https://carwiki.io/images/cars/nissan-micra-c-c-k12-1.6-16v-110hp.jpg",
        "https://carwiki.io/images/cars/nissan-micra-c-c-k12-1.6-16v-110hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "nissan-micra",
      "year": 2025,
      "powerHp": 90,
      "electric": false
    }
  },
  {
    "id": "veh-volkswagen-golf",
    "stations": [],
    "headlines": {
      "description": "Volkswagen Golf",
      "shortSubline": "ou similaire | Compacte",
      "longSubline": "Volkswagen Golf ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volkswagen-golf-ii-country-1.8-98hp-syncro.jpg",
      "large": "https://carwiki.io/images/cars/volkswagen-golf-ii-country-1.8-98hp-syncro.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 49.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volkswagen-golf-ii-country-1.8-98hp-syncro.jpg",
        "https://carwiki.io/images/cars/volkswagen-golf-ii-country-1.8-98hp-syncro.jpg",
        "https://carwiki.io/images/cars/volkswagen-golf-ii-country-1.8-98hp-syncro.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volkswagen-golf",
      "year": 2025,
      "powerHp": 198,
      "electric": false
    }
  },
  {
    "id": "veh-cupra-leon",
    "stations": [],
    "headlines": {
      "description": "Cupra Leon",
      "shortSubline": "ou similaire | Premium",
      "longSubline": "Cupra Leon ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/cupra-leon-facelift-2024-1.5-tsi-150hp.jpg",
      "large": "https://carwiki.io/images/cars/cupra-leon-facelift-2024-1.5-tsi-150hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 78.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/cupra-leon-facelift-2024-1.5-tsi-150hp.jpg",
        "https://carwiki.io/images/cars/cupra-leon-facelift-2024-1.5-tsi-150hp.jpg",
        "https://carwiki.io/images/cars/cupra-leon-facelift-2024-1.5-tsi-150hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "cupra-leon",
      "year": 2026,
      "powerHp": 217,
      "electric": false
    }
  },
  {
    "id": "veh-cupra-born",
    "stations": [],
    "headlines": {
      "description": "Cupra Born",
      "shortSubline": "ou similaire | Premium",
      "longSubline": "Cupra Born ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/cupra-born-62-kwh-204hp-electric.jpg",
      "large": "https://carwiki.io/images/cars/cupra-born-62-kwh-204hp-electric.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 89.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/cupra-born-62-kwh-204hp-electric.jpg",
        "https://carwiki.io/images/cars/cupra-born-62-kwh-204hp-electric.jpg",
        "https://carwiki.io/images/cars/cupra-born-62-kwh-204hp-electric.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "cupra-born",
      "year": 2026,
      "powerHp": 217,
      "electric": true
    }
  },
  {
    "id": "veh-nissan-leaf",
    "stations": [],
    "headlines": {
      "description": "Nissan Leaf",
      "shortSubline": "ou similaire | Familiale",
      "longSubline": "Nissan Leaf ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/nissan-leaf-ii-ze1-e-62-kwh-217hp.jpg",
      "large": "https://carwiki.io/images/cars/nissan-leaf-ii-ze1-e-62-kwh-217hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 67.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/nissan-leaf-ii-ze1-e-62-kwh-217hp.jpg",
        "https://carwiki.io/images/cars/nissan-leaf-ii-ze1-e-62-kwh-217hp.jpg",
        "https://carwiki.io/images/cars/nissan-leaf-ii-ze1-e-62-kwh-217hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "nissan-leaf",
      "year": 2025,
      "powerHp": 217,
      "electric": true
    }
  },
  {
    "id": "veh-audi-a3",
    "stations": [],
    "headlines": {
      "description": "Audi A3",
      "shortSubline": "ou similaire | Premium",
      "longSubline": "Audi A3 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-a3-sedan-8v-1.4-tfsi-125hp-s-tronic.jpg",
      "large": "https://carwiki.io/images/cars/audi-a3-sedan-8v-1.4-tfsi-125hp-s-tronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 71.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-a3-sedan-8v-1.4-tfsi-125hp-s-tronic.jpg",
        "https://carwiki.io/images/cars/audi-a3-sedan-8v-1.4-tfsi-125hp-s-tronic.jpg",
        "https://carwiki.io/images/cars/audi-a3-sedan-8v-1.4-tfsi-125hp-s-tronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-a3",
      "year": 2025,
      "powerHp": 149,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-1-series",
    "stations": [],
    "headlines": {
      "description": "BMW Série 1",
      "shortSubline": "ou similaire | Premium",
      "longSubline": "BMW Série 1 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-1-series-coupe-e82-lci-facelift-2011-118d-143hp-steptronic.jpg",
      "large": "https://carwiki.io/images/cars/bmw-1-series-coupe-e82-lci-facelift-2011-118d-143hp-steptronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 75.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-1-series-coupe-e82-lci-facelift-2011-118d-143hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-1-series-coupe-e82-lci-facelift-2011-118d-143hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-1-series-coupe-e82-lci-facelift-2011-118d-143hp-steptronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-1-series",
      "year": 2024,
      "powerHp": 172,
      "electric": false
    }
  },
  {
    "id": "veh-mercedes-benz-a-class",
    "stations": [],
    "headlines": {
      "description": "Mercedes-Benz Classe A",
      "shortSubline": "ou similaire | Premium",
      "longSubline": "Mercedes-Benz Classe A ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mercedes-benz-a-class-long-v168-a-160-102hp.jpg",
      "large": "https://carwiki.io/images/cars/mercedes-benz-a-class-long-v168-a-160-102hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 76.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mercedes-benz-a-class-long-v168-a-160-102hp.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-a-class-long-v168-a-160-102hp.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-a-class-long-v168-a-160-102hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mercedes-benz-a-class",
      "year": 2022,
      "powerHp": 228,
      "electric": false
    }
  },
  {
    "id": "veh-volkswagen-passat",
    "stations": [],
    "headlines": {
      "description": "Volkswagen Passat",
      "shortSubline": "ou similaire | Familiale",
      "longSubline": "Volkswagen Passat ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volkswagen-passat-b8-1.4-tsi-125hp-dsg.jpg",
      "large": "https://carwiki.io/images/cars/volkswagen-passat-b8-1.4-tsi-125hp-dsg.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 57.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volkswagen-passat-b8-1.4-tsi-125hp-dsg.jpg",
        "https://carwiki.io/images/cars/volkswagen-passat-b8-1.4-tsi-125hp-dsg.jpg",
        "https://carwiki.io/images/cars/volkswagen-passat-b8-1.4-tsi-125hp-dsg.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volkswagen-passat",
      "year": 2024,
      "powerHp": 179,
      "electric": false
    }
  },
  {
    "id": "veh-volvo-v60",
    "stations": [],
    "headlines": {
      "description": "Volvo V60",
      "shortSubline": "ou similaire | Berline de prestige",
      "longSubline": "Volvo V60 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volvo-v60-i-2013-facelift-1.5-t3-152hp-automatic.jpg",
      "large": "https://carwiki.io/images/cars/volvo-v60-i-2013-facelift-1.5-t3-152hp-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 89.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volvo-v60-i-2013-facelift-1.5-t3-152hp-automatic.jpg",
        "https://carwiki.io/images/cars/volvo-v60-i-2013-facelift-1.5-t3-152hp-automatic.jpg",
        "https://carwiki.io/images/cars/volvo-v60-i-2013-facelift-1.5-t3-152hp-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volvo-v60",
      "year": 2022,
      "powerHp": 266,
      "electric": false
    }
  },
  {
    "id": "veh-alfa-romeo-giulia",
    "stations": [],
    "headlines": {
      "description": "Alfa Romeo Giulia",
      "shortSubline": "ou similaire | Premium",
      "longSubline": "Alfa Romeo Giulia ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/alfa-romeo-giulia-1300-super-87hp.jpg",
      "large": "https://carwiki.io/images/cars/alfa-romeo-giulia-1300-super-87hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 98.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/alfa-romeo-giulia-1300-super-87hp.jpg",
        "https://carwiki.io/images/cars/alfa-romeo-giulia-1300-super-87hp.jpg",
        "https://carwiki.io/images/cars/alfa-romeo-giulia-1300-super-87hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "alfa-romeo-giulia",
      "year": 2023,
      "powerHp": 371,
      "electric": false
    }
  },
  {
    "id": "veh-audi-a4",
    "stations": [],
    "headlines": {
      "description": "Audi A4",
      "shortSubline": "ou similaire | Berline de prestige",
      "longSubline": "Audi A4 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-a4-avant-b8-8k-facelift-2011-1.8-tfsi-120hp-multitronic.jpg",
      "large": "https://carwiki.io/images/cars/audi-a4-avant-b8-8k-facelift-2011-1.8-tfsi-120hp-multitronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 81.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-a4-avant-b8-8k-facelift-2011-1.8-tfsi-120hp-multitronic.jpg",
        "https://carwiki.io/images/cars/audi-a4-avant-b8-8k-facelift-2011-1.8-tfsi-120hp-multitronic.jpg",
        "https://carwiki.io/images/cars/audi-a4-avant-b8-8k-facelift-2011-1.8-tfsi-120hp-multitronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-a4",
      "year": 2025,
      "powerHp": 226,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-3-series",
    "stations": [],
    "headlines": {
      "description": "BMW Série 3",
      "shortSubline": "ou similaire | Premium",
      "longSubline": "BMW Série 3 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-3-series-convertible-e36-318i-115hp-automatic.jpg",
      "large": "https://carwiki.io/images/cars/bmw-3-series-convertible-e36-318i-115hp-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 81.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-3-series-convertible-e36-318i-115hp-automatic.jpg",
        "https://carwiki.io/images/cars/bmw-3-series-convertible-e36-318i-115hp-automatic.jpg",
        "https://carwiki.io/images/cars/bmw-3-series-convertible-e36-318i-115hp-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-3-series",
      "year": 2025,
      "powerHp": 242,
      "electric": false
    }
  },
  {
    "id": "veh-mercedes-benz-c-class",
    "stations": [],
    "headlines": {
      "description": "Mercedes-Benz Classe C",
      "shortSubline": "ou similaire | Berline de prestige",
      "longSubline": "Mercedes-Benz Classe C ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mercedes-benz-c-class-t-modell-s203-amg-c-30-cdi-231hp-automatic.jpg",
      "large": "https://carwiki.io/images/cars/mercedes-benz-c-class-t-modell-s203-amg-c-30-cdi-231hp-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 95.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mercedes-benz-c-class-t-modell-s203-amg-c-30-cdi-231hp-automatic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-c-class-t-modell-s203-amg-c-30-cdi-231hp-automatic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-c-class-t-modell-s203-amg-c-30-cdi-231hp-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mercedes-benz-c-class",
      "year": 2024,
      "powerHp": 359,
      "electric": false
    }
  },
  {
    "id": "veh-audi-a6",
    "stations": [],
    "headlines": {
      "description": "Audi A6",
      "shortSubline": "ou similaire | Berline de prestige",
      "longSubline": "Audi A6 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-a6-allroad-quattro-4g-c7-facelift-2016-3.0-tdi-v6-218hp-quattro-s-tronic.jpg",
      "large": "https://carwiki.io/images/cars/audi-a6-allroad-quattro-4g-c7-facelift-2016-3.0-tdi-v6-218hp-quattro-s-tronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 81.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-a6-allroad-quattro-4g-c7-facelift-2016-3.0-tdi-v6-218hp-quattro-s-tronic.jpg",
        "https://carwiki.io/images/cars/audi-a6-allroad-quattro-4g-c7-facelift-2016-3.0-tdi-v6-218hp-quattro-s-tronic.jpg",
        "https://carwiki.io/images/cars/audi-a6-allroad-quattro-4g-c7-facelift-2016-3.0-tdi-v6-218hp-quattro-s-tronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-a6",
      "year": 2025,
      "powerHp": 230,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-5-series",
    "stations": [],
    "headlines": {
      "description": "BMW Série 5",
      "shortSubline": "ou similaire | Berline de prestige",
      "longSubline": "BMW Série 5 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-5-series-gran-turismo-f07-lci-facelift-2013-530d-258hp-steptronic.jpg",
      "large": "https://carwiki.io/images/cars/bmw-5-series-gran-turismo-f07-lci-facelift-2013-530d-258hp-steptronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 91.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-5-series-gran-turismo-f07-lci-facelift-2013-530d-258hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-5-series-gran-turismo-f07-lci-facelift-2013-530d-258hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-5-series-gran-turismo-f07-lci-facelift-2013-530d-258hp-steptronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-5-series",
      "year": 2024,
      "powerHp": 308,
      "electric": false
    }
  },
  {
    "id": "veh-mercedes-benz-e-class",
    "stations": [],
    "headlines": {
      "description": "Mercedes-Benz Classe E",
      "shortSubline": "ou similaire | Berline de prestige",
      "longSubline": "Mercedes-Benz Classe E ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mercedes-benz-e-class-w213-amg-e-43-401hp-4matic-9g-tronic.jpg",
      "large": "https://carwiki.io/images/cars/mercedes-benz-e-class-w213-amg-e-43-401hp-4matic-9g-tronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 81.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mercedes-benz-e-class-w213-amg-e-43-401hp-4matic-9g-tronic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-e-class-w213-amg-e-43-401hp-4matic-9g-tronic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-e-class-w213-amg-e-43-401hp-4matic-9g-tronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mercedes-benz-e-class",
      "year": 2024,
      "powerHp": 225,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-i4",
    "stations": [],
    "headlines": {
      "description": "BMW i4",
      "shortSubline": "ou similaire | Berline de prestige",
      "longSubline": "BMW i4 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-i4-g26-lci-facelift-2024-83.9-kwh-340hp-edrive40.jpg",
      "large": "https://carwiki.io/images/cars/bmw-i4-g26-lci-facelift-2024-83.9-kwh-340hp-edrive40.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 112.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-i4-g26-lci-facelift-2024-83.9-kwh-340hp-edrive40.jpg",
        "https://carwiki.io/images/cars/bmw-i4-g26-lci-facelift-2024-83.9-kwh-340hp-edrive40.jpg",
        "https://carwiki.io/images/cars/bmw-i4-g26-lci-facelift-2024-83.9-kwh-340hp-edrive40.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-i4",
      "year": 2025,
      "powerHp": 406,
      "electric": true
    }
  },
  {
    "id": "veh-audi-a8",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "Audi A8",
      "shortSubline": "ou similaire | Berline de prestige",
      "longSubline": "Audi A8 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-a8l-d3-4e-facelift-2007-3.2-fsi-v6-260hp-multitronic.jpg",
      "large": "https://carwiki.io/images/cars/audi-a8l-d3-4e-facelift-2007-3.2-fsi-v6-260hp-multitronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 129.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-a8l-d3-4e-facelift-2007-3.2-fsi-v6-260hp-multitronic.jpg",
        "https://carwiki.io/images/cars/audi-a8l-d3-4e-facelift-2007-3.2-fsi-v6-260hp-multitronic.jpg",
        "https://carwiki.io/images/cars/audi-a8l-d3-4e-facelift-2007-3.2-fsi-v6-260hp-multitronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-a8",
      "year": 2024,
      "powerHp": 283,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-7-series",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "BMW Série 7",
      "shortSubline": "ou similaire | Berline de prestige",
      "longSubline": "BMW Série 7 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-7-series-activehybrid-long-f04-activehybrid-4.4-v8-465hp-steptronic.jpg",
      "large": "https://carwiki.io/images/cars/bmw-7-series-activehybrid-long-f04-activehybrid-4.4-v8-465hp-steptronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 147.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 27,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-7-series-activehybrid-long-f04-activehybrid-4.4-v8-465hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-7-series-activehybrid-long-f04-activehybrid-4.4-v8-465hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-7-series-activehybrid-long-f04-activehybrid-4.4-v8-465hp-steptronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-7-series",
      "year": 2023,
      "powerHp": 394,
      "electric": false
    }
  },
  {
    "id": "veh-mercedes-benz-s-class",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "Mercedes-Benz Classe S",
      "shortSubline": "ou similaire | Berline de prestige",
      "longSubline": "Mercedes-Benz Classe S ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mercedes-benz-s-class-w221-amg-s-63-v8-525hp-7g-tronic.jpg",
      "large": "https://carwiki.io/images/cars/mercedes-benz-s-class-w221-amg-s-63-v8-525hp-7g-tronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 139.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Berline"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mercedes-benz-s-class-w221-amg-s-63-v8-525hp-7g-tronic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-s-class-w221-amg-s-63-v8-525hp-7g-tronic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-s-class-w221-amg-s-63-v8-525hp-7g-tronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mercedes-benz-s-class",
      "year": 2023,
      "powerHp": 371,
      "electric": false
    }
  },
  {
    "id": "veh-citroen-c3-aircross",
    "stations": [],
    "headlines": {
      "description": "Citroën C3 Aircross",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Citroën C3 Aircross ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/citroen-c3-aircross-i-phase-ii-2021-1.2-puretech-131hp-automatic.jpg",
      "large": "https://carwiki.io/images/cars/citroen-c3-aircross-i-phase-ii-2021-1.2-puretech-131hp-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 59.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/citroen-c3-aircross-i-phase-ii-2021-1.2-puretech-131hp-automatic.jpg",
        "https://carwiki.io/images/cars/citroen-c3-aircross-i-phase-ii-2021-1.2-puretech-131hp-automatic.jpg",
        "https://carwiki.io/images/cars/citroen-c3-aircross-i-phase-ii-2021-1.2-puretech-131hp-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "citroen-c3-aircross",
      "year": 2026,
      "powerHp": 123,
      "electric": false
    }
  },
  {
    "id": "veh-volkswagen-t-cross",
    "stations": [],
    "headlines": {
      "description": "Volkswagen T-Cross",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Volkswagen T-Cross ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volkswagen-t-cross-facelift-2023-1.0-tsi-115hp.jpg",
      "large": "https://carwiki.io/images/cars/volkswagen-t-cross-facelift-2023-1.0-tsi-115hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 50.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volkswagen-t-cross-facelift-2023-1.0-tsi-115hp.jpg",
        "https://carwiki.io/images/cars/volkswagen-t-cross-facelift-2023-1.0-tsi-115hp.jpg",
        "https://carwiki.io/images/cars/volkswagen-t-cross-facelift-2023-1.0-tsi-115hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volkswagen-t-cross",
      "year": 2023,
      "powerHp": 116,
      "electric": false
    }
  },
  {
    "id": "veh-volkswagen-t-roc",
    "stations": [],
    "headlines": {
      "description": "Volkswagen T-Roc",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Volkswagen T-Roc ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volkswagen-t-roc-i-cabriolet-1.5-tsi-150hp-act-opf.jpg",
      "large": "https://carwiki.io/images/cars/volkswagen-t-roc-i-cabriolet-1.5-tsi-150hp-act-opf.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 59.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volkswagen-t-roc-i-cabriolet-1.5-tsi-150hp-act-opf.jpg",
        "https://carwiki.io/images/cars/volkswagen-t-roc-i-cabriolet-1.5-tsi-150hp-act-opf.jpg",
        "https://carwiki.io/images/cars/volkswagen-t-roc-i-cabriolet-1.5-tsi-150hp-act-opf.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volkswagen-t-roc",
      "year": 2025,
      "powerHp": 182,
      "electric": false
    }
  },
  {
    "id": "veh-hyundai-kona",
    "stations": [],
    "headlines": {
      "description": "Hyundai Kona",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Hyundai Kona ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/hyundai-kona-i-facelift-2020-1.6-crdi-136hp-mild-hybrid.jpg",
      "large": "https://carwiki.io/images/cars/hyundai-kona-i-facelift-2020-1.6-crdi-136hp-mild-hybrid.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 60.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/hyundai-kona-i-facelift-2020-1.6-crdi-136hp-mild-hybrid.jpg",
        "https://carwiki.io/images/cars/hyundai-kona-i-facelift-2020-1.6-crdi-136hp-mild-hybrid.jpg",
        "https://carwiki.io/images/cars/hyundai-kona-i-facelift-2020-1.6-crdi-136hp-mild-hybrid.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "hyundai-kona",
      "year": 2025,
      "powerHp": 145,
      "electric": false
    }
  },
  {
    "id": "veh-dacia-duster",
    "stations": [],
    "headlines": {
      "description": "Dacia Duster",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Dacia Duster ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/dacia-duster-facelift-2013-1.2-tce-125hp-4wd.jpg",
      "large": "https://carwiki.io/images/cars/dacia-duster-facelift-2013-1.2-tce-125hp-4wd.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 50.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 21,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/dacia-duster-facelift-2013-1.2-tce-125hp-4wd.jpg",
        "https://carwiki.io/images/cars/dacia-duster-facelift-2013-1.2-tce-125hp-4wd.jpg",
        "https://carwiki.io/images/cars/dacia-duster-facelift-2013-1.2-tce-125hp-4wd.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "dacia-duster",
      "year": 2025,
      "powerHp": 110,
      "electric": false
    }
  },
  {
    "id": "veh-dacia-bigster",
    "stations": [],
    "headlines": {
      "description": "Dacia Bigster",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Dacia Bigster ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/dacia-bigster-1.2-tce-140hp-mild-hybrid.jpg",
      "large": "https://carwiki.io/images/cars/dacia-bigster-1.2-tce-140hp-mild-hybrid.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 60.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/dacia-bigster-1.2-tce-140hp-mild-hybrid.jpg",
        "https://carwiki.io/images/cars/dacia-bigster-1.2-tce-140hp-mild-hybrid.jpg",
        "https://carwiki.io/images/cars/dacia-bigster-1.2-tce-140hp-mild-hybrid.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "dacia-bigster",
      "year": 2025,
      "powerHp": 140,
      "electric": false
    }
  },
  {
    "id": "veh-citroen-c5-aircross",
    "stations": [],
    "headlines": {
      "description": "Citroën C5 Aircross",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Citroën C5 Aircross ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/citroen-c5-aircross-i-phase-ii-2022-1.2-145hp-mild-hybrid-e-dcs.jpg",
      "large": "https://carwiki.io/images/cars/citroen-c5-aircross-i-phase-ii-2022-1.2-145hp-mild-hybrid-e-dcs.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 63.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/citroen-c5-aircross-i-phase-ii-2022-1.2-145hp-mild-hybrid-e-dcs.jpg",
        "https://carwiki.io/images/cars/citroen-c5-aircross-i-phase-ii-2022-1.2-145hp-mild-hybrid-e-dcs.jpg",
        "https://carwiki.io/images/cars/citroen-c5-aircross-i-phase-ii-2022-1.2-145hp-mild-hybrid-e-dcs.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "citroen-c5-aircross",
      "year": 2025,
      "powerHp": 171,
      "electric": false
    }
  },
  {
    "id": "veh-volkswagen-tiguan",
    "stations": [],
    "headlines": {
      "description": "Volkswagen Tiguan",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Volkswagen Tiguan ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volkswagen-tiguan-i-facelift-2011-1.4-tsi-160hp-4motion.jpg",
      "large": "https://carwiki.io/images/cars/volkswagen-tiguan-i-facelift-2011-1.4-tsi-160hp-4motion.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 66.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volkswagen-tiguan-i-facelift-2011-1.4-tsi-160hp-4motion.jpg",
        "https://carwiki.io/images/cars/volkswagen-tiguan-i-facelift-2011-1.4-tsi-160hp-4motion.jpg",
        "https://carwiki.io/images/cars/volkswagen-tiguan-i-facelift-2011-1.4-tsi-160hp-4motion.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volkswagen-tiguan",
      "year": 2025,
      "powerHp": 195,
      "electric": false
    }
  },
  {
    "id": "veh-hyundai-tucson",
    "stations": [],
    "headlines": {
      "description": "Hyundai Tucson",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Hyundai Tucson ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/hyundai-tucson-ii-2.4-176hp-awd-shiftronic.jpg",
      "large": "https://carwiki.io/images/cars/hyundai-tucson-ii-2.4-176hp-awd-shiftronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 67.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/hyundai-tucson-ii-2.4-176hp-awd-shiftronic.jpg",
        "https://carwiki.io/images/cars/hyundai-tucson-ii-2.4-176hp-awd-shiftronic.jpg",
        "https://carwiki.io/images/cars/hyundai-tucson-ii-2.4-176hp-awd-shiftronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "hyundai-tucson",
      "year": 2025,
      "powerHp": 194,
      "electric": false
    }
  },
  {
    "id": "veh-nissan-qashqai",
    "stations": [],
    "headlines": {
      "description": "Nissan Qashqai",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Nissan Qashqai ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/nissan-qashqai-2-i-nj10-1.6i-114hp.jpg",
      "large": "https://carwiki.io/images/cars/nissan-qashqai-2-i-nj10-1.6i-114hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 56.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/nissan-qashqai-2-i-nj10-1.6i-114hp.jpg",
        "https://carwiki.io/images/cars/nissan-qashqai-2-i-nj10-1.6i-114hp.jpg",
        "https://carwiki.io/images/cars/nissan-qashqai-2-i-nj10-1.6i-114hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "nissan-qashqai",
      "year": 2024,
      "powerHp": 159,
      "electric": false
    }
  },
  {
    "id": "veh-jeep-compass",
    "stations": [],
    "headlines": {
      "description": "Jeep Compass",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Jeep Compass ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/jeep-compass-i-mk-facelift-2011-2.0-156hp.jpg",
      "large": "https://carwiki.io/images/cars/jeep-compass-i-mk-facelift-2011-2.0-156hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 67.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/jeep-compass-i-mk-facelift-2011-2.0-156hp.jpg",
        "https://carwiki.io/images/cars/jeep-compass-i-mk-facelift-2011-2.0-156hp.jpg",
        "https://carwiki.io/images/cars/jeep-compass-i-mk-facelift-2011-2.0-156hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "jeep-compass",
      "year": 2025,
      "powerHp": 175,
      "electric": false
    }
  },
  {
    "id": "veh-jeep-wrangler",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "Jeep Wrangler",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Jeep Wrangler ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/jeep-wrangler-ii-tj-2.4-i-16v-147hp.jpg",
      "large": "https://carwiki.io/images/cars/jeep-wrangler-ii-tj-2.4-i-16v-147hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 125.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/jeep-wrangler-ii-tj-2.4-i-16v-147hp.jpg",
        "https://carwiki.io/images/cars/jeep-wrangler-ii-tj-2.4-i-16v-147hp.jpg",
        "https://carwiki.io/images/cars/jeep-wrangler-ii-tj-2.4-i-16v-147hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "jeep-wrangler",
      "year": 2023,
      "powerHp": 351,
      "electric": false
    }
  },
  {
    "id": "veh-cupra-formentor",
    "stations": [],
    "headlines": {
      "description": "Cupra Formentor",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Cupra Formentor ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/cupra-formentor-1.4-tsi-245hp-e-hybrid-dsg.jpg",
      "large": "https://carwiki.io/images/cars/cupra-formentor-1.4-tsi-245hp-e-hybrid-dsg.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 92.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/cupra-formentor-1.4-tsi-245hp-e-hybrid-dsg.jpg",
        "https://carwiki.io/images/cars/cupra-formentor-1.4-tsi-245hp-e-hybrid-dsg.jpg",
        "https://carwiki.io/images/cars/cupra-formentor-1.4-tsi-245hp-e-hybrid-dsg.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "cupra-formentor",
      "year": 2025,
      "powerHp": 241,
      "electric": false
    }
  },
  {
    "id": "veh-alfa-romeo-tonale",
    "stations": [],
    "headlines": {
      "description": "Alfa Romeo Tonale",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Alfa Romeo Tonale ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/alfa-romeo-tonale-1.3-t-multiair-280hp-plug-in-hybrid-eq4-automatic.jpg",
      "large": "https://carwiki.io/images/cars/alfa-romeo-tonale-1.3-t-multiair-280hp-plug-in-hybrid-eq4-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 85.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/alfa-romeo-tonale-1.3-t-multiair-280hp-plug-in-hybrid-eq4-automatic.jpg",
        "https://carwiki.io/images/cars/alfa-romeo-tonale-1.3-t-multiair-280hp-plug-in-hybrid-eq4-automatic.jpg",
        "https://carwiki.io/images/cars/alfa-romeo-tonale-1.3-t-multiair-280hp-plug-in-hybrid-eq4-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "alfa-romeo-tonale",
      "year": 2025,
      "powerHp": 183,
      "electric": false
    }
  },
  {
    "id": "veh-mazda-cx-5",
    "stations": [],
    "headlines": {
      "description": "Mazda CX-5",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Mazda CX-5 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mazda-cx-5-facelift-2015-2.0i-160hp-4x4.jpg",
      "large": "https://carwiki.io/images/cars/mazda-cx-5-facelift-2015-2.0i-160hp-4x4.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 68.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mazda-cx-5-facelift-2015-2.0i-160hp-4x4.jpg",
        "https://carwiki.io/images/cars/mazda-cx-5-facelift-2015-2.0i-160hp-4x4.jpg",
        "https://carwiki.io/images/cars/mazda-cx-5-facelift-2015-2.0i-160hp-4x4.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mazda-cx-5",
      "year": 2025,
      "powerHp": 182,
      "electric": false
    }
  },
  {
    "id": "veh-honda-cr-v",
    "stations": [],
    "headlines": {
      "description": "Honda CR-V",
      "shortSubline": "ou similaire | SUV",
      "longSubline": "Honda CR-V ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/honda-cr-v-ii-2.0-16v-150hp-automatic.jpg",
      "large": "https://carwiki.io/images/cars/honda-cr-v-ii-2.0-16v-150hp-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 59.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": false,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/honda-cr-v-ii-2.0-16v-150hp-automatic.jpg",
        "https://carwiki.io/images/cars/honda-cr-v-ii-2.0-16v-150hp-automatic.jpg",
        "https://carwiki.io/images/cars/honda-cr-v-ii-2.0-16v-150hp-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "honda-cr-v",
      "year": 2023,
      "powerHp": 156,
      "electric": false
    }
  },
  {
    "id": "veh-audi-q3",
    "stations": [],
    "headlines": {
      "description": "Audi Q3",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Audi Q3 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-q3-i-8u-facelift-2014-1.4-tfsi-150hp-s-tronic.jpg",
      "large": "https://carwiki.io/images/cars/audi-q3-i-8u-facelift-2014-1.4-tfsi-150hp-s-tronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 91.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-q3-i-8u-facelift-2014-1.4-tfsi-150hp-s-tronic.jpg",
        "https://carwiki.io/images/cars/audi-q3-i-8u-facelift-2014-1.4-tfsi-150hp-s-tronic.jpg",
        "https://carwiki.io/images/cars/audi-q3-i-8u-facelift-2014-1.4-tfsi-150hp-s-tronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-q3",
      "year": 2025,
      "powerHp": 196,
      "electric": false
    }
  },
  {
    "id": "veh-audi-q5",
    "stations": [],
    "headlines": {
      "description": "Audi Q5",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Audi Q5 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-q5-i-8r-facelift-2012-2.0-tdi-150hp.jpg",
      "large": "https://carwiki.io/images/cars/audi-q5-i-8r-facelift-2012-2.0-tdi-150hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 97.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-q5-i-8r-facelift-2012-2.0-tdi-150hp.jpg",
        "https://carwiki.io/images/cars/audi-q5-i-8r-facelift-2012-2.0-tdi-150hp.jpg",
        "https://carwiki.io/images/cars/audi-q5-i-8r-facelift-2012-2.0-tdi-150hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-q5",
      "year": 2025,
      "powerHp": 266,
      "electric": false
    }
  },
  {
    "id": "veh-audi-q7",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "Audi Q7",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Audi Q7 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-q7-typ-4l-facelift-2009-3.0-tdi-v6-225hp-quattro-6-tiptronic-7-seat.jpg",
      "large": "https://carwiki.io/images/cars/audi-q7-typ-4l-facelift-2009-3.0-tdi-v6-225hp-quattro-6-tiptronic-7-seat.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 144.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 7,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 27,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-q7-typ-4l-facelift-2009-3.0-tdi-v6-225hp-quattro-6-tiptronic-7-seat.jpg",
        "https://carwiki.io/images/cars/audi-q7-typ-4l-facelift-2009-3.0-tdi-v6-225hp-quattro-6-tiptronic-7-seat.jpg",
        "https://carwiki.io/images/cars/audi-q7-typ-4l-facelift-2009-3.0-tdi-v6-225hp-quattro-6-tiptronic-7-seat.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-q7",
      "year": 2024,
      "powerHp": 329,
      "electric": false
    }
  },
  {
    "id": "veh-audi-q4-e-tron",
    "stations": [],
    "headlines": {
      "description": "Audi Q4 e-tron",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Audi Q4 e-tron ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-q4-e-tron-35-55-kwh-170hp.jpg",
      "large": "https://carwiki.io/images/cars/audi-q4-e-tron-35-55-kwh-170hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 100.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-q4-e-tron-35-55-kwh-170hp.jpg",
        "https://carwiki.io/images/cars/audi-q4-e-tron-35-55-kwh-170hp.jpg",
        "https://carwiki.io/images/cars/audi-q4-e-tron-35-55-kwh-170hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-q4-e-tron",
      "year": 2025,
      "powerHp": 235,
      "electric": true
    }
  },
  {
    "id": "veh-bmw-x3",
    "stations": [],
    "headlines": {
      "description": "BMW X3",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "BMW X3 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-x3-e83-facelift-2006-2.0d-150hp.jpg",
      "large": "https://carwiki.io/images/cars/bmw-x3-e83-facelift-2006-2.0d-150hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 92.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-x3-e83-facelift-2006-2.0d-150hp.jpg",
        "https://carwiki.io/images/cars/bmw-x3-e83-facelift-2006-2.0d-150hp.jpg",
        "https://carwiki.io/images/cars/bmw-x3-e83-facelift-2006-2.0d-150hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-x3",
      "year": 2025,
      "powerHp": 240,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-x5",
    "stations": [],
    "headlines": {
      "description": "BMW X5",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "BMW X5 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-x5-e53-lci-facelift-2003-3.0d-218hp-steptronic.jpg",
      "large": "https://carwiki.io/images/cars/bmw-x5-e53-lci-facelift-2003-3.0d-218hp-steptronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 112.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-x5-e53-lci-facelift-2003-3.0d-218hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-x5-e53-lci-facelift-2003-3.0d-218hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-x5-e53-lci-facelift-2003-3.0d-218hp-steptronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-x5",
      "year": 2023,
      "powerHp": 386,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-x7",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "BMW X7",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "BMW X7 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-x7-g07-40d-340hp-mild-hybrid-xdrive-steptronic.jpg",
      "large": "https://carwiki.io/images/cars/bmw-x7-g07-40d-340hp-mild-hybrid-xdrive-steptronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 158.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 7,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 27,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-x7-g07-40d-340hp-mild-hybrid-xdrive-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-x7-g07-40d-340hp-mild-hybrid-xdrive-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-x7-g07-40d-340hp-mild-hybrid-xdrive-steptronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-x7",
      "year": 2022,
      "powerHp": 420,
      "electric": false
    }
  },
  {
    "id": "veh-mercedes-benz-glc",
    "stations": [],
    "headlines": {
      "description": "Mercedes-Benz GLC",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Mercedes-Benz GLC ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mercedes-benz-glc-coupe-c253-amg-glc-43-367hp-4matic-g-tronic.jpg",
      "large": "https://carwiki.io/images/cars/mercedes-benz-glc-coupe-c253-amg-glc-43-367hp-4matic-g-tronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 108.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mercedes-benz-glc-coupe-c253-amg-glc-43-367hp-4matic-g-tronic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-glc-coupe-c253-amg-glc-43-367hp-4matic-g-tronic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-glc-coupe-c253-amg-glc-43-367hp-4matic-g-tronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mercedes-benz-glc",
      "year": 2026,
      "powerHp": 359,
      "electric": false
    }
  },
  {
    "id": "veh-mercedes-benz-gle",
    "stations": [],
    "headlines": {
      "description": "Mercedes-Benz GLE",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Mercedes-Benz GLE ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mercedes-benz-gle-coupe-c167-amg-gle-53-435hp-eq-boost-4matic-amg-speedshift-tct-9g.jpg",
      "large": "https://carwiki.io/images/cars/mercedes-benz-gle-coupe-c167-amg-gle-53-435hp-eq-boost-4matic-amg-speedshift-tct-9g.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 111.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 7,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mercedes-benz-gle-coupe-c167-amg-gle-53-435hp-eq-boost-4matic-amg-speedshift-tct-9g.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-gle-coupe-c167-amg-gle-53-435hp-eq-boost-4matic-amg-speedshift-tct-9g.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-gle-coupe-c167-amg-gle-53-435hp-eq-boost-4matic-amg-speedshift-tct-9g.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mercedes-benz-gle",
      "year": 2024,
      "powerHp": 399,
      "electric": false
    }
  },
  {
    "id": "veh-mercedes-benz-eqa",
    "stations": [],
    "headlines": {
      "description": "Mercedes-Benz EQA",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Mercedes-Benz EQA ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mercedes-benz-eqa-h243-eqa-250-69.7-kwh-190hp.jpg",
      "large": "https://carwiki.io/images/cars/mercedes-benz-eqa-h243-eqa-250-69.7-kwh-190hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 102.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mercedes-benz-eqa-h243-eqa-250-69.7-kwh-190hp.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-eqa-h243-eqa-250-69.7-kwh-190hp.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-eqa-h243-eqa-250-69.7-kwh-190hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mercedes-benz-eqa",
      "year": 2023,
      "powerHp": 229,
      "electric": true
    }
  },
  {
    "id": "veh-volvo-xc40",
    "stations": [],
    "headlines": {
      "description": "Volvo XC40",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Volvo XC40 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volvo-xc40-facelift-2022-1.5-t2-129hp-automatic.jpg",
      "large": "https://carwiki.io/images/cars/volvo-xc40-facelift-2022-1.5-t2-129hp-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 91.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volvo-xc40-facelift-2022-1.5-t2-129hp-automatic.jpg",
        "https://carwiki.io/images/cars/volvo-xc40-facelift-2022-1.5-t2-129hp-automatic.jpg",
        "https://carwiki.io/images/cars/volvo-xc40-facelift-2022-1.5-t2-129hp-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volvo-xc40",
      "year": 2022,
      "powerHp": 235,
      "electric": false
    }
  },
  {
    "id": "veh-volvo-xc60",
    "stations": [],
    "headlines": {
      "description": "Volvo XC60",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Volvo XC60 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volvo-xc60-i-2013-facelift-2.0-d3-136hp-start-stop.jpg",
      "large": "https://carwiki.io/images/cars/volvo-xc60-i-2013-facelift-2.0-d3-136hp-start-stop.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 106.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volvo-xc60-i-2013-facelift-2.0-d3-136hp-start-stop.jpg",
        "https://carwiki.io/images/cars/volvo-xc60-i-2013-facelift-2.0-d3-136hp-start-stop.jpg",
        "https://carwiki.io/images/cars/volvo-xc60-i-2013-facelift-2.0-d3-136hp-start-stop.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volvo-xc60",
      "year": 2025,
      "powerHp": 328,
      "electric": false
    }
  },
  {
    "id": "veh-volvo-xc90",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "Volvo XC90",
      "shortSubline": "ou similaire | SUV Premium",
      "longSubline": "Volvo XC90 ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volvo-xc90-facelift-2007-2.4-d3-163hp-automatic-7-seat.jpg",
      "large": "https://carwiki.io/images/cars/volvo-xc90-facelift-2007-2.4-d3-163hp-automatic-7-seat.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 147.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 7,
      "doors": 5,
      "automatic": true,
      "baggage": 5,
      "airCondition": true,
      "driverMinAge": 27,
      "bodyStyle": "SUV"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volvo-xc90-facelift-2007-2.4-d3-163hp-automatic-7-seat.jpg",
        "https://carwiki.io/images/cars/volvo-xc90-facelift-2007-2.4-d3-163hp-automatic-7-seat.jpg",
        "https://carwiki.io/images/cars/volvo-xc90-facelift-2007-2.4-d3-163hp-automatic-7-seat.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volvo-xc90",
      "year": 2024,
      "powerHp": 328,
      "electric": false
    }
  },
  {
    "id": "veh-fiat-500-cabrio",
    "stations": [],
    "headlines": {
      "description": "Fiat 500C",
      "shortSubline": "ou similaire | Cabriolet",
      "longSubline": "Fiat 500C ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/fiat-500-312-1.2-8v-69hp.jpg",
      "large": "https://carwiki.io/images/cars/fiat-500-312-1.2-8v-69hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 57.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": false,
      "baggage": 1,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Cabriolet"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/fiat-500-312-1.2-8v-69hp.jpg",
        "https://carwiki.io/images/cars/fiat-500-312-1.2-8v-69hp.jpg",
        "https://carwiki.io/images/cars/fiat-500-312-1.2-8v-69hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "fiat-500",
      "year": 2025,
      "powerHp": 85,
      "electric": false
    }
  },
  {
    "id": "veh-audi-a3-cabrio",
    "stations": [],
    "headlines": {
      "description": "Audi A3 Cabriolet",
      "shortSubline": "ou similaire | Cabriolet",
      "longSubline": "Audi A3 Cabriolet ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-a3-sedan-8v-1.4-tfsi-125hp-s-tronic.jpg",
      "large": "https://carwiki.io/images/cars/audi-a3-sedan-8v-1.4-tfsi-125hp-s-tronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 97.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Cabriolet"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-a3-sedan-8v-1.4-tfsi-125hp-s-tronic.jpg",
        "https://carwiki.io/images/cars/audi-a3-sedan-8v-1.4-tfsi-125hp-s-tronic.jpg",
        "https://carwiki.io/images/cars/audi-a3-sedan-8v-1.4-tfsi-125hp-s-tronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-a3",
      "year": 2025,
      "powerHp": 149,
      "electric": false
    }
  },
  {
    "id": "veh-audi-a5-cabrio",
    "stations": [],
    "headlines": {
      "description": "Audi A5 Cabriolet",
      "shortSubline": "ou similaire | Cabriolet",
      "longSubline": "Audi A5 Cabriolet ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-a5-sportback-8ta-facelift-2011-1.8-tfsi-144hp-multitronic.jpg",
      "large": "https://carwiki.io/images/cars/audi-a5-sportback-8ta-facelift-2011-1.8-tfsi-144hp-multitronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 100.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Cabriolet"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-a5-sportback-8ta-facelift-2011-1.8-tfsi-144hp-multitronic.jpg",
        "https://carwiki.io/images/cars/audi-a5-sportback-8ta-facelift-2011-1.8-tfsi-144hp-multitronic.jpg",
        "https://carwiki.io/images/cars/audi-a5-sportback-8ta-facelift-2011-1.8-tfsi-144hp-multitronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-a5",
      "year": 2025,
      "powerHp": 207,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-4-series-cabrio",
    "stations": [],
    "headlines": {
      "description": "BMW Série 4 Cabriolet",
      "shortSubline": "ou similaire | Cabriolet",
      "longSubline": "BMW Série 4 Cabriolet ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-4-series-gran-coupe-f36-418d-143hp-steptronic.jpg",
      "large": "https://carwiki.io/images/cars/bmw-4-series-gran-coupe-f36-418d-143hp-steptronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 106.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Cabriolet"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-4-series-gran-coupe-f36-418d-143hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-4-series-gran-coupe-f36-418d-143hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-4-series-gran-coupe-f36-418d-143hp-steptronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-4-series",
      "year": 2025,
      "powerHp": 263,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-2-series-cabrio",
    "stations": [],
    "headlines": {
      "description": "BMW Série 2 Cabriolet",
      "shortSubline": "ou similaire | Cabriolet",
      "longSubline": "BMW Série 2 Cabriolet ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-2-series-convertible-f23-218i-136hp-steptronic.jpg",
      "large": "https://carwiki.io/images/cars/bmw-2-series-convertible-f23-218i-136hp-steptronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 101.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Cabriolet"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-2-series-convertible-f23-218i-136hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-2-series-convertible-f23-218i-136hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-2-series-convertible-f23-218i-136hp-steptronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-2-series",
      "year": 2025,
      "powerHp": 246,
      "electric": false
    }
  },
  {
    "id": "veh-mercedes-benz-c-class-cabrio",
    "stations": [],
    "headlines": {
      "description": "Mercedes-Benz Classe C Cabriolet",
      "shortSubline": "ou similaire | Cabriolet",
      "longSubline": "Mercedes-Benz Classe C Cabriolet ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mercedes-benz-c-class-t-modell-s203-amg-c-30-cdi-231hp-automatic.jpg",
      "large": "https://carwiki.io/images/cars/mercedes-benz-c-class-t-modell-s203-amg-c-30-cdi-231hp-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 124.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Cabriolet"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mercedes-benz-c-class-t-modell-s203-amg-c-30-cdi-231hp-automatic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-c-class-t-modell-s203-amg-c-30-cdi-231hp-automatic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-c-class-t-modell-s203-amg-c-30-cdi-231hp-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mercedes-benz-c-class",
      "year": 2024,
      "powerHp": 359,
      "electric": false
    }
  },
  {
    "id": "veh-mercedes-benz-e-class-cabrio",
    "stations": [],
    "headlines": {
      "description": "Mercedes-Benz Classe E Cabriolet",
      "shortSubline": "ou similaire | Cabriolet",
      "longSubline": "Mercedes-Benz Classe E Cabriolet ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mercedes-benz-e-class-w213-amg-e-43-401hp-4matic-9g-tronic.jpg",
      "large": "https://carwiki.io/images/cars/mercedes-benz-e-class-w213-amg-e-43-401hp-4matic-9g-tronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 112.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Cabriolet"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mercedes-benz-e-class-w213-amg-e-43-401hp-4matic-9g-tronic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-e-class-w213-amg-e-43-401hp-4matic-9g-tronic.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-e-class-w213-amg-e-43-401hp-4matic-9g-tronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mercedes-benz-e-class",
      "year": 2024,
      "powerHp": 225,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-z4-roadster",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "BMW Z4 Roadster",
      "shortSubline": "ou similaire | Cabriolet",
      "longSubline": "BMW Z4 Roadster ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-z4-coupe-e86-m-3.2-343hp.jpg",
      "large": "https://carwiki.io/images/cars/bmw-z4-coupe-e86-m-3.2-343hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 126.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 2,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Cabriolet"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-z4-coupe-e86-m-3.2-343hp.jpg",
        "https://carwiki.io/images/cars/bmw-z4-coupe-e86-m-3.2-343hp.jpg",
        "https://carwiki.io/images/cars/bmw-z4-coupe-e86-m-3.2-343hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-z4",
      "year": 2026,
      "powerHp": 267,
      "electric": false
    }
  },
  {
    "id": "veh-audi-tt-coupe",
    "stations": [],
    "headlines": {
      "description": "Audi TT Coupé",
      "shortSubline": "ou similaire | Coupé",
      "longSubline": "Audi TT Coupé ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-tt-roadster-8s-facelift-2018-45-tfsi-245hp.jpg",
      "large": "https://carwiki.io/images/cars/audi-tt-roadster-8s-facelift-2018-45-tfsi-245hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 109.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 2,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Coupé"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-tt-roadster-8s-facelift-2018-45-tfsi-245hp.jpg",
        "https://carwiki.io/images/cars/audi-tt-roadster-8s-facelift-2018-45-tfsi-245hp.jpg",
        "https://carwiki.io/images/cars/audi-tt-roadster-8s-facelift-2018-45-tfsi-245hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-tt",
      "year": 2023,
      "powerHp": 245,
      "electric": false
    }
  },
  {
    "id": "veh-audi-a5-coupe",
    "stations": [],
    "headlines": {
      "description": "Audi A5 Coupé",
      "shortSubline": "ou similaire | Sport",
      "longSubline": "Audi A5 Coupé ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-a5-sportback-8ta-facelift-2011-1.8-tfsi-144hp-multitronic.jpg",
      "large": "https://carwiki.io/images/cars/audi-a5-sportback-8ta-facelift-2011-1.8-tfsi-144hp-multitronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 113.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Coupé"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-a5-sportback-8ta-facelift-2011-1.8-tfsi-144hp-multitronic.jpg",
        "https://carwiki.io/images/cars/audi-a5-sportback-8ta-facelift-2011-1.8-tfsi-144hp-multitronic.jpg",
        "https://carwiki.io/images/cars/audi-a5-sportback-8ta-facelift-2011-1.8-tfsi-144hp-multitronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-a5",
      "year": 2025,
      "powerHp": 207,
      "electric": false
    }
  },
  {
    "id": "veh-audi-a7-sportback",
    "stations": [],
    "headlines": {
      "description": "Audi A7 Sportback",
      "shortSubline": "ou similaire | Sport",
      "longSubline": "Audi A7 Sportback ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-a7-sportback-c7-facelift-2014-3.0-bitdi-v6-clean-diesel-320hp-quattro-tiptronic.jpg",
      "large": "https://carwiki.io/images/cars/audi-a7-sportback-c7-facelift-2014-3.0-bitdi-v6-clean-diesel-320hp-quattro-tiptronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 114.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 5,
      "automatic": true,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Coupé"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-a7-sportback-c7-facelift-2014-3.0-bitdi-v6-clean-diesel-320hp-quattro-tiptronic.jpg",
        "https://carwiki.io/images/cars/audi-a7-sportback-c7-facelift-2014-3.0-bitdi-v6-clean-diesel-320hp-quattro-tiptronic.jpg",
        "https://carwiki.io/images/cars/audi-a7-sportback-c7-facelift-2014-3.0-bitdi-v6-clean-diesel-320hp-quattro-tiptronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-a7",
      "year": 2025,
      "powerHp": 256,
      "electric": false
    }
  },
  {
    "id": "veh-audi-e-tron-gt",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "Audi e-tron GT",
      "shortSubline": "ou similaire | Sport",
      "longSubline": "Audi e-tron GT ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/audi-e-tron-gt-93.4-kwh-530hp-quattro.jpg",
      "large": "https://carwiki.io/images/cars/audi-e-tron-gt-93.4-kwh-530hp-quattro.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 170.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 5,
      "automatic": true,
      "baggage": 3,
      "airCondition": true,
      "driverMinAge": 27,
      "bodyStyle": "Coupé"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/audi-e-tron-gt-93.4-kwh-530hp-quattro.jpg",
        "https://carwiki.io/images/cars/audi-e-tron-gt-93.4-kwh-530hp-quattro.jpg",
        "https://carwiki.io/images/cars/audi-e-tron-gt-93.4-kwh-530hp-quattro.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "audi-e-tron-gt",
      "year": 2025,
      "powerHp": 551,
      "electric": true
    }
  },
  {
    "id": "veh-bmw-4-series-coupe",
    "stations": [],
    "headlines": {
      "description": "BMW Série 4 Coupé",
      "shortSubline": "ou similaire | Sport",
      "longSubline": "BMW Série 4 Coupé ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-4-series-gran-coupe-f36-418d-143hp-steptronic.jpg",
      "large": "https://carwiki.io/images/cars/bmw-4-series-gran-coupe-f36-418d-143hp-steptronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 112.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Coupé"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-4-series-gran-coupe-f36-418d-143hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-4-series-gran-coupe-f36-418d-143hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-4-series-gran-coupe-f36-418d-143hp-steptronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-4-series",
      "year": 2025,
      "powerHp": 263,
      "electric": false
    }
  },
  {
    "id": "veh-bmw-2-series-coupe",
    "stations": [],
    "headlines": {
      "description": "BMW Série 2 Coupé",
      "shortSubline": "ou similaire | Coupé",
      "longSubline": "BMW Série 2 Coupé ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/bmw-2-series-convertible-f23-218i-136hp-steptronic.jpg",
      "large": "https://carwiki.io/images/cars/bmw-2-series-convertible-f23-218i-136hp-steptronic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 109.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Coupé"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/bmw-2-series-convertible-f23-218i-136hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-2-series-convertible-f23-218i-136hp-steptronic.jpg",
        "https://carwiki.io/images/cars/bmw-2-series-convertible-f23-218i-136hp-steptronic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "bmw-2-series",
      "year": 2025,
      "powerHp": 246,
      "electric": false
    }
  },
  {
    "id": "veh-nissan-gt-r",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "Nissan GT-R",
      "shortSubline": "ou similaire | Sport",
      "longSubline": "Nissan GT-R ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/nissan-gt-r-r35-facelift-2010-3.8-v6-550hp-awd-dct.jpg",
      "large": "https://carwiki.io/images/cars/nissan-gt-r-r35-facelift-2010-3.8-v6-550hp-awd-dct.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 156.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 4,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 27,
      "bodyStyle": "Coupé"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/nissan-gt-r-r35-facelift-2010-3.8-v6-550hp-awd-dct.jpg",
        "https://carwiki.io/images/cars/nissan-gt-r-r35-facelift-2010-3.8-v6-550hp-awd-dct.jpg",
        "https://carwiki.io/images/cars/nissan-gt-r-r35-facelift-2010-3.8-v6-550hp-awd-dct.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "nissan-gt-r",
      "year": 2023,
      "powerHp": 602,
      "electric": false
    }
  },
  {
    "id": "veh-mercedes-amg-gt",
    "stations": [
      "PAR01",
      "PAR02",
      "PAR03",
      "LYS01",
      "MRS01",
      "NCE01",
      "BOD01",
      "TLS01",
      "GVA01",
      "BRU01"
    ],
    "headlines": {
      "description": "Mercedes-AMG GT Coupé",
      "shortSubline": "ou similaire | Sport",
      "longSubline": "Mercedes-AMG GT Coupé ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/mercedes-benz-amg-gt-c190-facelift-2017-black-series-4.0-v8-730hp.jpg",
      "large": "https://carwiki.io/images/cars/mercedes-benz-amg-gt-c190-facelift-2017-black-series-4.0-v8-730hp.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 160.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 2,
      "doors": 2,
      "automatic": true,
      "baggage": 2,
      "airCondition": true,
      "driverMinAge": 27,
      "bodyStyle": "Coupé"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/mercedes-benz-amg-gt-c190-facelift-2017-black-series-4.0-v8-730hp.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-amg-gt-c190-facelift-2017-black-series-4.0-v8-730hp.jpg",
        "https://carwiki.io/images/cars/mercedes-benz-amg-gt-c190-facelift-2017-black-series-4.0-v8-730hp.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "mercedes-benz-amg-gt",
      "year": 2024,
      "powerHp": 494,
      "electric": false
    }
  },
  {
    "id": "veh-volkswagen-amarok",
    "stations": [],
    "headlines": {
      "description": "Volkswagen Amarok",
      "shortSubline": "ou similaire | Pick-up",
      "longSubline": "Volkswagen Amarok ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/volkswagen-amarok-i-double-cab-2.0-tdi-140hp-4motion.jpg",
      "large": "https://carwiki.io/images/cars/volkswagen-amarok-i-double-cab-2.0-tdi-140hp-4motion.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 90.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 4,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 25,
      "bodyStyle": "Pick-up"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/volkswagen-amarok-i-double-cab-2.0-tdi-140hp-4motion.jpg",
        "https://carwiki.io/images/cars/volkswagen-amarok-i-double-cab-2.0-tdi-140hp-4motion.jpg",
        "https://carwiki.io/images/cars/volkswagen-amarok-i-double-cab-2.0-tdi-140hp-4motion.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "volkswagen-amarok",
      "year": 2022,
      "powerHp": 208,
      "electric": false
    }
  },
  {
    "id": "veh-nissan-navara",
    "stations": [],
    "headlines": {
      "description": "Nissan Navara",
      "shortSubline": "ou similaire | Pick-up",
      "longSubline": "Nissan Navara ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/nissan-navara-iii-d40-2.5-dci-double-cab-174hp-4wd-automatic.jpg",
      "large": "https://carwiki.io/images/cars/nissan-navara-iii-d40-2.5-dci-double-cab-174hp-4wd-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 84.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 4,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Pick-up"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/nissan-navara-iii-d40-2.5-dci-double-cab-174hp-4wd-automatic.jpg",
        "https://carwiki.io/images/cars/nissan-navara-iii-d40-2.5-dci-double-cab-174hp-4wd-automatic.jpg",
        "https://carwiki.io/images/cars/nissan-navara-iii-d40-2.5-dci-double-cab-174hp-4wd-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "nissan-navara",
      "year": 2019,
      "powerHp": 187,
      "electric": false
    }
  },
  {
    "id": "veh-nissan-frontier",
    "stations": [],
    "headlines": {
      "description": "Nissan Frontier",
      "shortSubline": "ou similaire | Pick-up",
      "longSubline": "Nissan Frontier ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/nissan-frontier-ii-crew-cab-d40-4.0-v6-265hp-4x4-automatic.jpg",
      "large": "https://carwiki.io/images/cars/nissan-frontier-ii-crew-cab-d40-4.0-v6-265hp-4x4-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 87.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 4,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Pick-up"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/nissan-frontier-ii-crew-cab-d40-4.0-v6-265hp-4x4-automatic.jpg",
        "https://carwiki.io/images/cars/nissan-frontier-ii-crew-cab-d40-4.0-v6-265hp-4x4-automatic.jpg",
        "https://carwiki.io/images/cars/nissan-frontier-ii-crew-cab-d40-4.0-v6-265hp-4x4-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "nissan-frontier",
      "year": 2024,
      "powerHp": 206,
      "electric": false
    }
  },
  {
    "id": "veh-fiat-fullback",
    "stations": [],
    "headlines": {
      "description": "Fiat Fullback",
      "shortSubline": "ou similaire | Pick-up",
      "longSubline": "Fiat Fullback ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/fiat-fullback-cross-2.4-181hp-4x4-automatic.jpg",
      "large": "https://carwiki.io/images/cars/fiat-fullback-cross-2.4-181hp-4x4-automatic.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 84.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 4,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Pick-up"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/fiat-fullback-cross-2.4-181hp-4x4-automatic.jpg",
        "https://carwiki.io/images/cars/fiat-fullback-cross-2.4-181hp-4x4-automatic.jpg",
        "https://carwiki.io/images/cars/fiat-fullback-cross-2.4-181hp-4x4-automatic.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "fiat-fullback",
      "year": 2017,
      "powerHp": 164,
      "electric": false
    }
  },
  {
    "id": "veh-jeep-gladiator",
    "stations": [],
    "headlines": {
      "description": "Jeep Gladiator",
      "shortSubline": "ou similaire | Pick-up",
      "longSubline": "Jeep Gladiator ou similaire",
      "mileageInfo": "Kilométrage illimité"
    },
    "images": {
      "small": "https://carwiki.io/images/cars/jeep-gladiator-jt-facelift-2024-mojave-3.6-pentastar-v6-285hp-4x4.jpg",
      "large": "https://carwiki.io/images/cars/jeep-gladiator-jt-facelift-2024-mojave-3.6-pentastar-v6-285hp-4x4.jpg"
    },
    "prices": {
      "dayPrice": {
        "amount": 79.9,
        "currency": "EUR"
      }
    },
    "carGroupInfo": {
      "maxPassengers": 5,
      "doors": 4,
      "automatic": true,
      "baggage": 4,
      "airCondition": true,
      "driverMinAge": 23,
      "bodyStyle": "Pick-up"
    },
    "rentDetails": {
      "splashImages": [
        "https://carwiki.io/images/cars/jeep-gladiator-jt-facelift-2024-mojave-3.6-pentastar-v6-285hp-4x4.jpg",
        "https://carwiki.io/images/cars/jeep-gladiator-jt-facelift-2024-mojave-3.6-pentastar-v6-285hp-4x4.jpg",
        "https://carwiki.io/images/cars/jeep-gladiator-jt-facelift-2024-mojave-3.6-pentastar-v6-285hp-4x4.jpg"
      ],
      "includedCharges": [
        {
          "title": "Kilométrage illimité"
        },
        {
          "title": "Assurance responsabilité civile"
        },
        {
          "title": "Protection vol (avec franchise)"
        },
        {
          "title": "Protection collision (CDW, avec franchise)"
        },
        {
          "title": "Taxes locales et redevances aéroport"
        }
      ],
      "additionalCharges": [
        {
          "id": "opt-tp-full",
          "title": "Protection totale (rachat de franchise)",
          "description": "Réduit la franchise vol et collision à 0 €.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 24.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-tyres-glass",
          "title": "Protection pneus, jantes & bris de glace",
          "description": "Couvre les dommages aux pneus, jantes, pare-brise et phares.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 9.99,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-additional-driver",
          "title": "Conducteur additionnel",
          "description": "Ajoutez un second conducteur autorisé au contrat.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 7.5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-gps",
          "title": "GPS de navigation",
          "description": "Système de navigation embarqué avec cartographie Europe.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 6,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-child-seat",
          "title": "Siège enfant",
          "description": "Siège homologué pour enfant de 9 à 18 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 5,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-booster",
          "title": "Réhausseur",
          "description": "Rehausseur homologué pour enfant de 15 à 36 kg.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 4,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-wifi",
          "title": "Borne Wi-Fi mobile",
          "description": "Point d'accès 4G illimité pour vos trajets.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 8,
            "currency": "EUR"
          }
        },
        {
          "id": "opt-fuel",
          "title": "Plein de carburant prépayé",
          "description": "Restituez le véhicule sans repasser à la station.",
          "icon": "ico-bullet-sm",
          "price": {
            "amount": 3.5,
            "currency": "EUR"
          }
        }
      ],
      "extraFees": [
        {
          "title": "Frais de service aéroport / gare",
          "price": {
            "amount": 22,
            "currency": "EUR"
          }
        },
        {
          "title": "Frais de dossier",
          "price": {
            "amount": 12,
            "currency": "EUR"
          }
        }
      ]
    },
    "_source": {
      "slug": "jeep-gladiator",
      "year": 2024,
      "powerHp": 95,
      "electric": false
    }
  }
];

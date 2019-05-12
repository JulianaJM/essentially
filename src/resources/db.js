export default {
  oils: [
    {
      id: '1',
      name: 'Huile essentielle d’aneth',
      picture:
        'http://www.conseils-aromatherapie.com/wp-content/uploads/2014/04/huile-essentielle-aneth.jpg',
      description:
        "L'huile essentielle d'aneth est appréciée pour stimuler l'appareil digestif ou dégager les voies respiratoires.",
      goodFor: ['digestif'],
      effects: [
        'vermifuge',
        'antiseptique',
        'diurétique',
        'anti-inflammatoire'
      ],
      recipes: [
        {
          symptoms: ['Bronchite'],
          indications:
            "diluer dans une huile végétale pour masser le dos et la voûte plantaire. Par voie interne après consultation d'un spécialiste. En inhalation."
        },
        {
          symptoms: ['Otite'],
          indications: '1 goutte derrière chaque oreille'
        },
        {
          symptoms: ['Toux grasse'],
          indications:
            "diluer dans une huile végétale pour masser le dos. Par voie interne après consultation d'un spécialiste ou en inhalation."
        },
        {
          symptoms: ['Digestion', 'flatulences'],
          indications:
            "diluer dans une huile végétale pour masser l'abdomen. Par voie interne après consultation d'un spécialiste."
        },
        {
          symptoms: ['Nausée'],
          indications: 'déposer une trace sur le palais'
        },
        {
          symptoms: ['Concentration', 'déprime', 'fatigue'],
          indications: 'en diffusion, inhalation ou en olfaction'
        }
      ]
    },
    {
      id: '2',
      name: 'Huile essentielle de carotte',
      picture:
        'https://static.passeportsante.net/200x200/i49650-huile-essentielle-de-carotte.jpg',
      description:
        'Si l\'adage dit que la carotte "rend aimable" ou permet d’améliorer sa vue, sous forme d’huile essentielle elle possède bien d’autres vertus, puisqu’elle agirait, entre autres, sur divers problèmes de peau et serait active pour la régénération de l’organisme.',
      goodFor: [
        'acné',
        'affection hépatique',
        'brûlure superficielle',
        'callosité',
        'couperose',
        'dartre',
        'dépigmentation',
        'eczéma',
        'furoncle',
        'peau sèche',
        'rides',
        'tache brune'
      ],
      effects: [
        'Déstressante',
        'Relaxante nerveuse',
        'Stimulante cognitive',
        'Tonifiante',
        'Anti-rides',
        'Désclérosante',
        'Régénérante cutanée'
      ],
      recipes: [
        {
          symptoms: ['eczéma', 'brûlure'],
          indications:
            'diluer dans une huile végétale ou une crème et appliquer sur la zone concernée.'
        },
        {
          symptoms: ['Callosité'],
          indications:
            'appliquer localement quelques gouttes sur la zone du pied ou de la main touchée.'
        },
        {
          symptoms: ['Hypotension'],
          indications:
            'utiliser en inhalation ou diluer dans une huile végétale et masser le dos et le thorax.'
        },
        {
          symptoms: ['Trouble du transit'],
          indications:
            'diluer dans une huile végétale et masser le ventre dans le sens du transit.'
        },
        {
          symptoms: ['Sécheresse de la peau'],
          indications:
            'diluer dans de l’huile végétale environ 10 gouttes associées à 20 gouttes d’huile de géranium, puis masser.'
        },
        {
          symptoms: ['Rides', 'tâches pigmentaires'],
          indications:
            "appliquer l'huile essentielle de carotte localement ou diluée dans une huile végétale"
        }
      ]
    },
    {
      id: '3',
      name: 'Huile essentielle de lavande vraie',
      picture:
        'https://resize.prod.docfr.doc-media.fr/img/var/doctissimo/storage/images/media/images/fr/www/lavande-vraie/818493-1-fre-FR/lavande-vraie.jpg',
      description:
        "L'huile essentielle de lavande vraie, ou lavande fine, a des vertus cicatrisantes et régénérantes cutanées. Elle permet de traiter de nombreuses infections cutanées, tout en ayant des vertus relaxantes et apaisantes.",
      goodFor: [
        'Agitation',
        'angoisse',
        'anxiété',
        'acné',
        'bronchite',
        'brûlure',
        'céphalée',
        'contracture',
        'coup de soleil',
        'couperose',
        'crampe',
        'démangeaison',
        'dermatose',
        'douleur musculaire',
        'eczéma',
        'émotivité',
        'escarre',
        'feu du rasoir',
        'hypertension artérielle',
        'laryngite',
        'migraine',
        'mycose cutanée',
        'nervosité',
        'otite',
        'palpitations',
        "piqûre d'insecte",
        'prurit',
        'psoriasis',
        'règles douloureuses',
        'répulsif antipoux',
        'rhinite',
        'rhinopharyngite',
        'sinusite',
        'spasmes abdominaux',
        'spasmes nerveux',
        'toux spasmodique'
      ],
      effects: [
        'Soulage les brûlures',
        'Répulsif antipoux ',
        'Apaisant coup de soleil'
      ],
      recipes: [
        {
          symptoms: ['Asthme', 'spasmophilie', 'oppression'],
          indications: 'en olfaction, en diffusion ou en inhalation'
        },
        {
          symptoms: [
            'Bronchite',
            'laryngite',
            'rhinite',
            'rhinopharyngite',
            'sinusite'
          ],
          indications:
            'en olfaction, en diffusion ou en inhalation. Ou diluer à 20 % dans une huile végétale pour masser le thorax, le long de la colonne vertébrale et la plante des pieds.'
        },
        {
          symptoms: ['Otite'],
          indications:
            "2 gouttes d'huile essentielle derrière chaque oreille, mais jamais directement dans l'oreille."
        },
        {
          symptoms: [
            'Acné',
            'couperose',
            'démangeaisons',
            'feu du rasoir',
            "piqûre d'insecte"
          ],
          indications:
            "en olfaction ou diluer à 5 % sur le visage dans une huile végétale (soit 0,5 % ml d'huile essentielle avec 9,5 ml d'huile végétale) pour appliquer sur la zone à traiter."
        }
      ]
    }
  ],
  symptoms: [
    {
      id: 1,
      name: 'digestif',
      category: 'transit'
    },
    {
      id: 2,
      name: 'acné',
      category: 'skin'
    },
    {
      id: 3,
      name: 'affection hépatique',
      category: 'transit'
    },
    {
      id: 4,
      name: 'brûlure superficielle',
      category: 'skin'
    },
    {
      id: 5,
      name: 'callosité',
      category: 'skin'
    },
    {
      id: 6,
      name: 'couperose',
      category: 'skin'
    },
    {
      id: 7,
      name: 'dartre',
      category: 'skin'
    },
    {
      id: 8,
      name: 'dépigmentation',
      category: 'skin'
    },
    {
      id: 9,
      name: 'eczéma',
      category: 'skin'
    },
    {
      id: 10,
      name: 'furoncle',
      category: 'skin'
    },
    {
      id: 11,
      name: 'peau sèche',
      category: 'skin'
    },
    {
      id: 12,
      name: 'rides',
      category: 'skin'
    },
    {
      id: 13,
      name: 'tache brune',
      category: 'skin'
    },
    {
      id: 14,
      name: 'démangeaisons',
      category: 'skin'
    },
    {
      id: 15,
      name: 'feu du rasoir',
      category: 'skin'
    },
    {
      id: 16,
      name: "piqûre d'insecte",
      category: 'skin'
    },
    {
      id: 17,
      name: "piqûre d'insecte",
      category: 'skin'
    },
    {
      id: 18,
      name: 'Rides',
      category: 'skin'
    },
    {
      id: 19,
      name: 'tâches pigmentaires',
      category: 'skin'
    },
    {
      id: 20,
      name: 'Bronchite',
      category: 'cold'
    },
    {
      id: 21,
      name: 'laryngite',
      category: 'cold'
    },
    {
      id: 22,
      name: 'rhinite',
      category: 'cold'
    },
    {
      id: 24,
      name: 'rhinopharyngite',
      category: 'cold'
    },
    {
      id: 25,
      name: 'sinusite',
      category: 'cold'
    },
    {
      id: 26,
      name: 'Trouble du transit',
      category: 'transit'
    }
  ]
};

export const stepOne = {
  id: 1,
  name: "SkinConcern",
  question: "O que mais te preocupa sobre sua pele?",
  description: "Escolha até dois:",
  isLastStep: false,
  choices: [
    { id: 11, text: "Pele Seca", description: null},
    { id: 12, text: "Poros", description: null},
    { id: 13, text: "Pele opaca e cansada", description: null},
    { id: 14, text: "Textura irregular", description: null},
    { id: 15, text: "Linhas e rugas", description: null},
    { id: 16, text: "Perda de firmeza", description: null},
    { id: 17, text: "Irritação e Vermelhidão", description: null},
    { id: 18, text: "Tom de pele irregular", description: null}
  ]
};

export const stepTwo = {
  id: 2,
  name: "EyeRegion",
  question: "O que você mais quer para sua região dos olhos?",
  description: "Escolha até dois:",
  isLastStep: false,
  choices: [
    { id: 21, text: "Pele Seca", description: null},
    { id: 22, text: "Poros", description: null},
    { id: 23, text: "Pele opaca e cansada", description: null},
    { id: 24, text: "Textura irregular", description: null},
  ],
};

export const stepThree = {
  id: 3,
  name: "SkinDescription",
  question: "Como você descreveria sua pele?",
  description: null,
  isLastStep: false,
  choices: [
    {
      id: 31,
      text: "Seca",
      description: [
        'Sem oleosidade na zona-T (testa e nariz)',
        'Bochechas são secas e tensas',
      ],
    },
    {
      id: 32,
      text: "Normal/Mista",
      description: [
        'Zona-T é normal ou oleosa',
        'Bochechas são normais ou levemente secas',
      ],
    },
    {
      id: 33,
      text: "Oleosa",
      description: [
        'Sem oleosidade na zona-T (testa e nariz)',
        'Bochechas são secas e tensas',
      ],
    },
  ],
};

export const stepFour = {
  id: 4,
  name: "Results",
  question: "Your Skincare Quiz Results",
  description: null,
  isLastStep: true,
  answer: [
    {
      id: 41,
      selectedIds: [11,21,31], // previous selected answers
      products: [
        {
          thumb: "oi",
          title: "oi",
          url: "oi"
        },
      ],
    },
    {
      id: 42,
      selectedIds: [11,21,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 43,
      selectedIds: [11,21,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 44,
      selectedIds: [11,22,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 45,
      selectedIds: [11,22,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 46,
      selectedIds: [11,22,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 47,
      selectedIds: [11,23,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 48,
      selectedIds: [11,23,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 49,
      selectedIds: [11,23,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 410,
      selectedIds: [11,24,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 411,
      selectedIds: [11,24,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 412,
      selectedIds: [11,24,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 413,
      selectedIds: [12,21,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 414,
      selectedIds: [12,21,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 415,
      selectedIds: [12,21,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 416,
      selectedIds: [12,22,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 417,
      selectedIds: [12,22,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 418,
      selectedIds: [12,22,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 419,
      selectedIds: [12,23,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 420,
      selectedIds: [12,23,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 421,
      selectedIds: [12,23,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 422,
      selectedIds: [12,24,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 423,
      selectedIds: [12,24,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 424,
      selectedIds: [12,24,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 425,
      selectedIds: [13,21,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 426,
      selectedIds: [13,21,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 427,
      selectedIds: [13,21,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 428,
      selectedIds: [13,22,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 429,
      selectedIds: [13,22,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 430,
      selectedIds: [13,22,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 431,
      selectedIds: [13,23,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 432,
      selectedIds: [13,23,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 433,
      selectedIds: [13,23,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 434,
      selectedIds: [13,24,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 435,
      selectedIds: [13,24,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 436,
      selectedIds: [13,24,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 437,
      selectedIds: [14,21,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 438,
      selectedIds: [14,21,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 439,
      selectedIds: [14,21,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 440,
      selectedIds: [14,22,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 441,
      selectedIds: [14,22,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 442,
      selectedIds: [14,22,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 443,
      selectedIds: [14,23,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 444,
      selectedIds: [14,23,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 445,
      selectedIds: [14,23,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 446,
      selectedIds: [14,24,31], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 447,
      selectedIds: [14,24,32], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    {
      id: 448,
      selectedIds: [14,24,33], // previous selected answers
      products: [
        {
          thumb: "",
          title: "",
          url: ""
        },
      ],
    },
    // {
    //   id: 449,
    //   selectedIds: [11,12,21,22,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 450,
    //   selectedIds: [11,12,21,22,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 43,
    //   selectedIds: [11,12,21,22,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 44,
    //   selectedIds: [11,12,21,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 45,
    //   selectedIds: [11,12,21,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 46,
    //   selectedIds: [11,12,21,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 47,
    //   selectedIds: [11,12,21,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 48,
    //   selectedIds: [11,12,21,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 49,
    //   selectedIds: [11,12,21,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 410,
    //   selectedIds: [11,12,22,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 411,
    //   selectedIds: [11,12,22,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 412,
    //   selectedIds: [11,12,22,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 413,
    //   selectedIds: [11,12,22,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 414,
    //   selectedIds: [11,12,22,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 415,
    //   selectedIds: [11,12,22,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 416,
    //   selectedIds: [11,12,23,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 417,
    //   selectedIds: [11,12,23,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 418,
    //   selectedIds: [11,12,23,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 419,
    //   selectedIds: [11,13,21,22,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 420,
    //   selectedIds: [11,13,21,22,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 421,
    //   selectedIds: [11,13,21,22,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 422,
    //   selectedIds: [11,13,21,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 423,
    //   selectedIds: [11,13,21,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 424,
    //   selectedIds: [11,13,21,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 425,
    //   selectedIds: [11,13,21,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 426,
    //   selectedIds: [11,13,21,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 427,
    //   selectedIds: [11,13,21,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 428,
    //   selectedIds: [11,13,22,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 429,
    //   selectedIds: [11,13,22,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 430,
    //   selectedIds: [11,13,22,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 431,
    //   selectedIds: [11,13,22,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 432,
    //   selectedIds: [11,13,22,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 433,
    //   selectedIds: [11,13,22,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 434,
    //   selectedIds: [11,13,23,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 435,
    //   selectedIds: [11,13,23,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 436,
    //   selectedIds: [11,13,23,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 437,
    //   selectedIds: [11,14,21,22,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 438,
    //   selectedIds: [11,14,21,22,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 439,
    //   selectedIds: [11,14,21,22,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 440,
    //   selectedIds: [11,14,21,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 441,
    //   selectedIds: [11,14,21,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 442,
    //   selectedIds: [11,14,21,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 443,
    //   selectedIds: [11,14,21,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 444,
    //   selectedIds: [11,14,21,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 445,
    //   selectedIds: [11,14,21,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 446,
    //   selectedIds: [11,14,22,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 447,
    //   selectedIds: [11,14,22,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 448,
    //   selectedIds: [11,14,22,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 449,
    //   selectedIds: [11,14,22,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 450,
    //   selectedIds: [11,14,22,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 451,
    //   selectedIds: [11,14,22,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 452,
    //   selectedIds: [11,14,23,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 453,
    //   selectedIds: [11,14,23,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 454,
    //   selectedIds: [11,14,23,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 455,
    //   selectedIds: [11,15,21,22,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 456,
    //   selectedIds: [11,15,21,22,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 457,
    //   selectedIds: [11,15,21,22,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 458,
    //   selectedIds: [11,15,21,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 459,
    //   selectedIds: [11,15,21,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 460,
    //   selectedIds: [11,15,21,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 461,
    //   selectedIds: [11,15,21,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 462,
    //   selectedIds: [11,15,21,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 463,
    //   selectedIds: [11,15,21,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 464,
    //   selectedIds: [11,15,22,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 465,
    //   selectedIds: [11,15,22,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 466,
    //   selectedIds: [11,15,22,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 467,
    //   selectedIds: [11,15,22,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 468,
    //   selectedIds: [11,15,22,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 469,
    //   selectedIds: [11,15,22,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 470,
    //   selectedIds: [11,15,23,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 471,
    //   selectedIds: [11,15,23,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 472,
    //   selectedIds: [11,15,23,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 473,
    //   selectedIds: [11,16,21,22,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 474,
    //   selectedIds: [11,16,21,22,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 475,
    //   selectedIds: [11,16,21,22,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 476,
    //   selectedIds: [11,16,21,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 477,
    //   selectedIds: [11,16,21,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 478,
    //   selectedIds: [11,16,21,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 479,
    //   selectedIds: [11,16,21,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 480,
    //   selectedIds: [11,16,21,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 481,
    //   selectedIds: [11,16,21,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 482,
    //   selectedIds: [11,16,22,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 483,
    //   selectedIds: [11,16,22,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 484,
    //   selectedIds: [11,16,22,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 485,
    //   selectedIds: [11,16,22,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 486,
    //   selectedIds: [11,16,22,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 487,
    //   selectedIds: [11,16,22,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 488,
    //   selectedIds: [11,16,23,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 489,
    //   selectedIds: [11,16,23,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 490,
    //   selectedIds: [11,16,23,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 491,
    //   selectedIds: [11,17,21,22,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 492,
    //   selectedIds: [11,17,21,22,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 493,
    //   selectedIds: [11,17,21,22,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 494,
    //   selectedIds: [11,17,21,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 495,
    //   selectedIds: [11,17,21,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 496,
    //   selectedIds: [11,17,21,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 497,
    //   selectedIds: [11,17,21,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 498,
    //   selectedIds: [11,17,21,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 499,
    //   selectedIds: [11,17,21,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4100,
    //   selectedIds: [11,17,22,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4101,
    //   selectedIds: [11,17,22,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4102,
    //   selectedIds: [11,17,22,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4103,
    //   selectedIds: [11,17,22,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4104,
    //   selectedIds: [11,17,22,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4105,
    //   selectedIds: [11,17,22,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4106,
    //   selectedIds: [11,17,23,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4107,
    //   selectedIds: [11,17,23,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4108,
    //   selectedIds: [11,17,23,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4109,
    //   selectedIds: [11,18,21,22,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4110,
    //   selectedIds: [11,18,21,22,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4111,
    //   selectedIds: [11,18,21,22,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4112,
    //   selectedIds: [11,18,21,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4113,
    //   selectedIds: [11,18,21,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4114,
    //   selectedIds: [11,18,21,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4115,
    //   selectedIds: [11,18,21,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4116,
    //   selectedIds: [11,18,21,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4117,
    //   selectedIds: [11,18,21,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4118,
    //   selectedIds: [11,18,22,23,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4119,
    //   selectedIds: [11,18,22,23,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4120,
    //   selectedIds: [11,18,22,23,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4121,
    //   selectedIds: [11,18,22,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4122,
    //   selectedIds: [11,18,22,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4123,
    //   selectedIds: [11,18,22,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4124,
    //   selectedIds: [11,18,23,24,31], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4125,
    //   selectedIds: [11,18,23,24,32], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
    // {
    //   id: 4126,
    //   selectedIds: [11,18,23,24,33], // previous selected answers
    //   products: [
    //     {
    //       thumb: "",
    //       title: "",
    //       url: ""
    //     },
    //   ],
    // },
  ],
}

export default [stepOne, stepTwo, stepThree, stepFour];
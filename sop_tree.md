FinancingApp/
│
├── public/
│   ├── index.html                 # Optional landing page / partner selection
│   ├── css/                       # Shared styles
│   │   └── common.css
│   └── js/
│       └── main.js                # Shared JS (validation, helper functions)
│
├── src/                           # Frontend (React or vanilla)
│   ├── App.js
│   ├── pages/
│   │   ├── DeviceFormPage.js      # Device Financing form template
│   │   ├── WorkingCapitalPage.js  # Working Capital form template
│   │   └── ThankYouPage.js
│   ├── components/
│   │   ├── ParticipantForm.js
│   │   ├── DeviceForm.js
│   │   ├── WorkingCapitalForm.js
│   │   ├── PaymentForm.js
│   │   └── BusinessForm.js
│   └── utils/
│       └── validation.js
│
├── server/
│   ├── index.js                   # Main Node/Express server
│   ├── routes/
│   │   ├── deviceRoutes.js        # API routes for device forms
│   │   └── capitalRoutes.js       # API routes for working capital forms
│   ├── controllers/
│   │   ├── deviceController.js
│   │   └── capitalController.js
│   └── middleware/
│       └── validationMiddleware.js
│
├── config/
│   └── db.js                      # Database connection
│
├── models/
│   ├── DeviceSubmission.js
│   └── CapitalSubmission.js
│
├── partners/                      # Partner-specific branding / overrides
│   ├── witu/
│   │   ├── logo.png
│   │   ├── colors.css             # Partner-specific CSS
│   │   └── copy.json              # Partner-specific text/intro
│   ├── refactory/
│   │   ├── logo.png
│   │   ├── colors.css
│   │   └── copy.json
│   └── outbox/
│       ├── logo.png
│       ├── colors.css
│       └── copy.json
│
├── package.json
├── README.md
└── .env

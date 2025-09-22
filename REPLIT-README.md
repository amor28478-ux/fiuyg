# ICICI Bank Verification React App - Replit Deployment

This is a React application that converts multiple HTML pages into a single-page application with routing.

## Project Structure
```
├── public/                 # Static assets and original HTML files
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/             # Individual page components
│   ├── utils/             # Firebase utilities
│   ├── App.js             # Main app component with routing
│   ├── App.css            # Global styles
│   └── index.js           # React entry point
├── package.json           # Dependencies & scripts
├── README.md              # Documentation
└── .replit               # Replit configuration (add this file)
```

## Pages Included
1. Home Page (`/`) - Initial verification notice
2. Main Page (`/main`) - Account number and mobile entry
3. Name and DOB (`/name-dob`) - Personal information collection
4. OTP Verification (`/enter-otp`) - SMS verification
5. AADHAR Details (`/aadhar-details`) - AADHAR card information
6. PAN Details (`/pan-details`) - PAN card information
7. Processing Pages - Various status pages
8. Final Page (`/last-page`) - Completion confirmation

## Replit Setup Instructions
1. Create a new Replit project
2. Upload all files from this directory
3. Add a `.replit` file with the following content
4. Run the application

## .replit Configuration
```
language = "nodejs"
run = "npm start"
[packager]
language = "nodejs"
ignoredPaths = ["node_modules"]
```

## Dependencies
- React 18.2.0
- React Router DOM 6.8.0
- Firebase 9.17.1
- React Scripts 5.0.1

## Features
- Multi-page navigation using React Router
- Firebase integration for data submission
- Responsive design with consistent styling
- Form validation and user data handling
- Original ICICI Bank styling maintained

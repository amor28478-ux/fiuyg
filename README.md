# ICICI Bank Verification React App

This is a React application that converts multiple HTML pages into a single-page application with routing.

## Features

- Multi-page navigation using React Router
- Firebase integration for data submission
- Responsive design with consistent styling
- Form validation and user data handling

## Pages Included

1. **Home Page** (`/`) - Initial verification notice
2. **Main Page** (`/main`) - Account number and mobile number entry
3. **Name and DOB** (`/name-dob`) - Personal information collection
4. **OTP Verification** (`/enter-otp`) - OTP entry and verification
5. **AADHAR Details** (`/aadhar-details`) - AADHAR card information
6. **PAN Details** (`/pan-details`) - PAN card information
7. **Processing Pages** - Various processing states
8. **Final Page** - Completion confirmation

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the app

## Build for Production

To build the app for production:

```bash
npm run build
```

## Dependencies

- React 18.2.0
- React Router DOM 6.8.0
- Firebase 9.17.1
- React Scripts 5.0.1

## File Structure

```
src/
├── components/          # Reusable components
├── pages/              # Individual page components
├── utils/              # Utility functions (Firebase)
├── App.js              # Main app component with routing
├── App.css             # Global styles
├── index.js            # React entry point
└── index.css           # Base styles

public/                 # Static assets and original HTML files
├── *.html             # Original HTML pages (converted to React)
├── *.css              # Original stylesheets
└── images/            # Logo and icon files
```

## Notes

- All original HTML files are preserved in the `public/` directory
- Images and assets are served from the public directory
- Firebase configuration is included for data submission
- The app maintains the original ICICI Bank styling and branding

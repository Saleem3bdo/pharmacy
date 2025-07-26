# Pharmacy App - Local Setup Guide

## Prerequisites
Make sure you have these installed on your local machine:
- **Node.js** (version 18 or higher) - Download from https://nodejs.org/
- **npm** (comes with Node.js)
- **Git** (optional, but recommended)

## Step 1: Create Project Directory
```bash
mkdir pharmacy-app
cd pharmacy-app
```

## Step 2: Get Project Files
Either:
- Download the project as ZIP from Cursor and extract it
- Or manually copy the files (I can help with this)

## Step 3: Install Dependencies
```bash
npm install
```

## Step 4: Start the App

### For Web Development:
```bash
npm run web
```
This will start the app at `http://localhost:8081`

### For Mobile Development:
```bash
npm start
```
Then scan the QR code with Expo Go app on your phone

### Platform-Specific:
```bash
npm run android  # For Android emulator
npm run ios      # For iOS simulator (macOS only)
```

## What You'll Get
- A fully functional pharmacy app
- Patient portal with medicine search, cart, prescriptions
- Pharmacist portal with inventory management
- Real-time features and consultations
- Multi-language support (Arabic/English)

## Troubleshooting
- If you get dependency errors, try: `npm install --legacy-peer-deps`
- For web issues, clear browser cache and restart
- Make sure no other apps are using port 8081

## Next Steps
Once running locally:
1. Open browser to `http://localhost:8081`
2. Go through the onboarding
3. Choose Patient or Pharmacist portal
4. Explore all the features!
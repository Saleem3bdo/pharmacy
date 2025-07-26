# Quick Start Guide

Get the Pharmacy Management App running in under 5 minutes!

## Prerequisites
- Node.js (v18+)
- Git

## Installation & Running

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd pharmacy-app
   npm install
   ```

2. **Start the App**
   ```bash
   npx expo start --web
   ```

3. **Open in Browser**
   - The app will automatically open in your browser at `http://localhost:8081`
   - If it doesn't open automatically, click the link in the terminal

## Test the App

### Patient Experience
1. Click "Skip" or go through onboarding
2. Select "Patient" as user type
3. Use any email/password to "login" (mock authentication)
4. Explore features:
   - Browse medications on home screen
   - Search for drugs
   - Add items to cart
   - View prescription upload
   - Check consultation features

### Pharmacist Experience
1. Go back to auth screen (logout from patient)
2. Select "Pharmacist" as user type
3. Login with any credentials
4. Explore pharmacist features:
   - Dashboard with metrics
   - Inventory management
   - Order processing
   - Analytics (simplified for web)
   - Drug upload functionality

## Features to Test

✅ **Working Features:**
- Multi-language support (Arabic/English)
- User authentication flow
- Product browsing and search
- Cart management
- Prescription upload interface
- Pharmacist dashboard
- Inventory management
- Order processing
- Profile management
- Responsive design

⚠️ **Mock/Simplified Features:**
- Payment processing (UI only)
- Real-time delivery tracking (UI only)
- Charts in analytics (simplified for web)
- OCR scanning (interface only)

## Troubleshooting

**If the app doesn't start:**
```bash
# Clear cache and restart
npx expo start --clear
```

**If you see import errors:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

**If charts don't show:**
- This is expected for web version
- Charts work fully in mobile apps

## Next Steps

- Run on mobile: Install Expo Go app and scan QR code
- Develop features: Edit files in `components/` directory  
- Add backend: Integrate with real APIs
- Deploy: Use `expo build` for production

---

🎉 **You're ready to explore the pharmacy management system!**
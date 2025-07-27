# 🏥 PharmaCare - Complete Pharmacy Management App

A comprehensive pharmacy management system built with React Native, Expo, and modern web technologies. Features patient portal, pharmacist dashboard, real-time consultations, and multilingual support.

## 🚀 Quick Start (Local Setup)

### Prerequisites
- **Node.js 18+** (Download from [nodejs.org](https://nodejs.org/))
- **npm** (comes with Node.js)

### Installation & Running

1. **Extract/Copy this project** to your desired location
2. **Open terminal** in the project root directory
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the app:**
   ```bash
   npm run web
   ```
5. **Open your browser** to `http://localhost:8081`

## 🎯 Available Commands

```bash
npm run web      # Start web version (recommended for development)
npm start        # Start with QR code for mobile
npm run android  # Start Android version
npm run ios      # Start iOS version (macOS only)
```

## 🏥 Features

### Patient Portal
- 🔍 **Medicine Search** - Find medicines with detailed information
- 🛒 **Smart Cart** - Add medicines, manage quantities
- 📋 **Prescription Upload** - OCR-powered prescription scanning
- 👨‍⚕️ **Pharmacist Consultations** - Real-time chat with licensed pharmacists
- 🚚 **Delivery Tracking** - Track orders in real-time
- 💝 **Medicine Donation** - Donate unused medicines to patients in need
- 📱 **Multi-language** - Arabic and English support

### Pharmacist Portal
- 📊 **Dashboard** - Analytics and overview
- 📦 **Inventory Management** - Track stock, expiration dates
- 📋 **Order Processing** - Manage customer orders
- 💊 **Drug Upload** - Add new medicines to inventory
- 👥 **Patient Consultations** - Provide expert advice
- 📈 **Analytics** - Business insights and reports

### Key Technologies
- **React Native Web** - Cross-platform development
- **Expo Router** - File-based routing
- **Tailwind CSS** - Modern styling
- **Lucide Icons** - Beautiful icon system
- **Radix UI** - Accessible components
- **TypeScript** - Type safety

## 🌍 Language Support
- **Arabic (العربية)** - Full RTL support
- **English** - Default language
- Automatic language detection and switching

## 📱 Mobile Development

### For Physical Device (Recommended)
1. Install **Expo Go** app on your phone
2. Run `npm start`
3. Scan the QR code with Expo Go

### For Emulators
- **Android**: `npm run android` (requires Android Studio)
- **iOS**: `npm run ios` (requires Xcode on macOS)

## 🛠️ Development

### Project Structure
```
├── app/                 # App router screens
├── components/          # Reusable components
│   ├── ui/             # UI components
│   ├── services/       # Service providers
│   ├── pharmacist/     # Pharmacist-specific components
│   └── ...
├── constants/          # App constants
├── hooks/              # Custom React hooks
├── styles/             # Global styles
└── assets/             # Images, fonts, etc.
```

### Adding New Features
1. Create components in `components/` directory
2. Add screens to `app/` directory
3. Use TypeScript for type safety
4. Follow the existing code patterns

## 🔧 Troubleshooting

### Common Issues
- **Port 8081 in use**: Close other development servers or change port
- **Dependencies error**: Try `npm install --legacy-peer-deps`
- **Metro bundler issues**: Clear cache with `npx expo start --clear`

### Performance Tips
- Use web version for fastest development
- Enable React DevTools for debugging
- Check browser console for errors

## 📄 License
Private project - All rights reserved

## 🤝 Support
For support or questions about this pharmacy management system, refer to the development team.

---

**Ready to start? Run `npm run web` and open http://localhost:8081** 🚀
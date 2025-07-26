# Pharmacy Management App

A comprehensive pharmacy management application built with React Native/Expo supporting both patient and pharmacist portals. The app includes features for medication management, prescription processing, delivery tracking, and analytics.

## Features

### Patient Portal
- **Onboarding & Authentication**: Multi-language support (Arabic/English)
- **Home Dashboard**: Personalized view with recent orders and recommendations
- **Product Search**: Advanced search and filtering for medications
- **Prescription Management**: OCR-based prescription scanning and processing
- **Shopping Cart**: Add medications to cart with quantity management
- **Consultation Services**: Connect with pharmacists for medical advice
- **Order History**: Track past orders and reorder functionality
- **Delivery Tracking**: Real-time order tracking with location updates
- **Address Management**: Multiple delivery addresses support
- **Donation System**: Medication donation features

### Pharmacist Portal
- **Dashboard**: Comprehensive overview of pharmacy operations
- **Inventory Management**: Stock tracking, low stock alerts, expiry monitoring
- **Order Processing**: Order management and fulfillment
- **Prescription Verification**: Review and approve prescription requests
- **Customer Consultations**: Handle patient consultation requests
- **Analytics & Reports**: Sales analytics, performance metrics
- **Drug Upload**: Add new medications to inventory
- **Profile Management**: Pharmacy and pharmacist information

### Technical Features
- **Multi-language Support**: Arabic (RTL) and English (LTR)
- **Responsive Design**: Works on web, iOS, and Android
- **Real-time Notifications**: Order updates and system alerts
- **Localization Services**: Sudanese pharmacy context and regulations
- **Error Boundaries**: Robust error handling and recovery
- **Modern UI Components**: Clean, accessible interface design

## Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pharmacy-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on different platforms**
   - **Web**: Press `w` in the terminal or run `npx expo start --web`
   - **iOS Simulator**: Press `i` in the terminal (macOS only)
   - **Android Emulator**: Press `a` in the terminal
   - **Physical Device**: Scan the QR code with Expo Go app

## Project Structure

```
pharmacy-app/
├── app/                          # Expo Router pages
│   ├── (tabs)/                  # Tab navigation
│   │   ├── index.tsx           # Main pharmacy app
│   │   └── _layout.tsx         # Tab layout
│   ├── _layout.tsx             # Root layout with providers
│   └── +not-found.tsx          # 404 page
├── components/                   # React components
│   ├── ui/                     # Reusable UI components
│   ├── services/               # Service providers
│   ├── pharmacist/             # Pharmacist portal components
│   ├── figma/                  # Design system components
│   └── *.tsx                   # Feature components
├── constants/                    # App constants
├── hooks/                       # Custom React hooks
├── assets/                      # Images, fonts, icons
└── styles/                      # Styling files
```

## Key Technologies

- **Framework**: React Native with Expo
- **Routing**: Expo Router (file-based routing)
- **UI Components**: Custom components built with Radix UI primitives
- **Styling**: TailwindCSS with React Native
- **Icons**: Lucide React
- **Charts**: React Native Chart Kit (for analytics)
- **State Management**: React Context API
- **Notifications**: Sonner (toast notifications)
- **Development**: TypeScript, ESLint

## Environment Setup

The app is configured to work out of the box with mock data. For production deployment, you would need to:

1. Set up a backend API
2. Configure authentication services
3. Integrate real payment systems
4. Set up push notifications
5. Configure map services for delivery tracking

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run lint` - Run ESLint

## App Usage

### First Time Setup
1. Open the app
2. Go through the onboarding process
3. Choose your role (Patient or Pharmacist)
4. Complete authentication

### Patient Flow
1. Browse or search for medications
2. Add items to cart
3. Upload prescriptions using camera
4. Place orders
5. Track delivery
6. Consult with pharmacists

### Pharmacist Flow
1. Access dashboard for overview
2. Manage inventory and stock
3. Process incoming orders
4. Review prescriptions
5. Handle customer consultations
6. View analytics and reports

## Development Notes

- The app uses Expo Router for navigation
- All UI components are built with accessibility in mind
- Multi-language support is implemented throughout
- The codebase follows React Native best practices
- Error boundaries are implemented for better user experience

## Troubleshooting

**Common Issues:**

1. **Metro bundler errors**: Try clearing cache with `npx expo start --clear`
2. **Dependency issues**: Delete `node_modules` and run `npm install`
3. **Web platform issues**: Ensure all dependencies support React Native Web

**Known Limitations:**
- Charts are simplified for React Native Web compatibility
- Some native features may require additional setup
- OCR functionality requires camera permissions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository or contact the development team.

---

**Note**: This is a complete, runnable pharmacy management application with both patient and pharmacist portals. The app includes comprehensive features for medication management, prescription processing, and pharmacy operations, all with multi-language support and modern UI design.

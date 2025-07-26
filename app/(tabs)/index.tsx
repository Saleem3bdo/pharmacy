import React, { useState } from 'react';
import { Home, Search, ShoppingCart, MessageCircle, User, Upload, History, Settings, Package, Users, BarChart3, FileText, Clock, Languages, LogOut, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLocalization, useRTL } from '@/components/services/LocalizationService';
import { toast } from 'sonner';

// Import patient portal components
import OnboardingScreen from '@/components/OnboardingScreen';
import AuthScreen from '@/components/AuthScreen';
import HomeScreen from '@/components/HomeScreen';
import SearchScreen from '@/components/SearchScreen';
import ProductDetailScreen from '@/components/ProductDetailScreen';
import PrescriptionScreen from '@/components/PrescriptionScreen';
import CartScreen from '@/components/CartScreen';
import ConsultScreen from '@/components/ConsultScreen';
import ProfileScreen from '@/components/ProfileScreen';
import OrderHistoryScreen from '@/components/OrderHistoryScreen';
import AddressManagement from '@/components/AddressManagement';
import DeliveryTracking from '@/components/DeliveryTracking';
import DonationScreen from '@/components/DonationScreen';

// Import pharmacist portal components
import PharmacistDashboard from '@/components/pharmacist/PharmacistDashboard';
import PharmacistInventory from '@/components/pharmacist/PharmacistInventory';
import PharmacistOrders from '@/components/pharmacist/PharmacistOrders';
import PharmacistPrescriptions from '@/components/pharmacist/PharmacistPrescriptions';
import PharmacistConsultations from '@/components/pharmacist/PharmacistConsultations';
import PharmacistAnalytics from '@/components/pharmacist/PharmacistAnalytics';
import PharmacistProfile from '@/components/pharmacist/PharmacistProfile';
import PharmacistDrugUpload from '@/components/pharmacist/PharmacistDrugUpload';

// Enhanced user data management with pharmacy assignments
const createUserData = (userType, userName = null) => {
  const basePatientData = {
    id: 'user_001',
    name: 'أحمد محمد علي',
    nameEn: 'Ahmed Mohammed Ali',
    phone: '+249 123 456 789',
    email: 'ahmed.mohammed@email.com',
    location: 'الخرطوم',
    locationEn: 'Khartoum',
    joinDate: '2023',
    membershipLevel: 'ذهبي',
    membershipLevelEn: 'Gold',
    orderCount: 23,
    savedMoney: 145,
    points: 1250,
    type: 'patient'
  };

  const basePharmacistData = {
    id: 'pharm_001',
    name: 'د. فاطمة أحمد علي',
    nameEn: 'Dr. Fatima Ahmed Ali',
    phone: '+249 987 654 321',
    email: 'dr.fatima@pharmacy.sd',
    location: 'أم درمان',
    locationEn: 'Omdurman',
    
    // Enhanced pharmacy assignment
    pharmacy: {
      id: 'pharmacy_001',
      name: 'صيدلية النيل الأزرق',
      nameEn: 'Blue Nile Pharmacy',
      address: 'أم درمان - شارع الثورة',
      addressEn: 'Omdurman - Al-Thawra Street',
      licenseNumber: 'PHM-OMD-2019-0543',
      establishedYear: '2019',
      phone: '+249 155 123 456',
      coordinates: { lat: 15.6440, lng: 32.4772 },
      operatingHours: {
        weekday: '8:00 AM - 10:00 PM',
        weekend: '9:00 AM - 9:00 PM'
      },
      services: ['أدوية عامة', 'أدوية مزمنة', 'مستلزمات طبية', 'استشارات'],
      servicesEn: ['General Medicine', 'Chronic Disease Medicine', 'Medical Supplies', 'Consultations']
    },
    
    // Pharmacist personal info
    licenseNumber: 'PH-2019-0543',
    experience: '8 سنوات',
    experienceEn: '8 Years',
    specialization: 'الصيدلة السريرية',
    specializationEn: 'Clinical Pharmacy',
    joinDate: '2019',
    
    // Performance metrics (pharmacy-scoped)
    totalOrders: 1847,
    totalCustomers: 423,
    rating: 4.9,
    monthlyRevenue: 125000,
    inventoryValue: 450000,
    
    // Role and permissions
    role: 'senior_pharmacist',
    permissions: ['inventory_management', 'order_processing', 'consultation', 'donation_management', 'analytics'],
    
    type: 'pharmacist'
  };

  const userData = userType === 'patient' ? basePatientData : basePharmacistData;
  
  // If a custom name is provided, update both Arabic and English names
  if (userName) {
    userData.name = userName;
    userData.nameEn = userName;
  }
  
  return userData;
};

export default function PharmacyApp() {
  const { t, language, toggleLanguage } = useLocalization();
  const { isRTL, getMargin } = useRTL();
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null); // 'patient' or 'pharmacist'
  const [userData, setUserData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [trackingOrderId, setTrackingOrderId] = useState(null);

  // Handle authentication
  const handleAuth = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
    setUserData(createUserData(type));
    setCurrentScreen(type === 'patient' ? 'home' : 'pharmacist-dashboard');
  };

  // Handle profile updates
  const updateUserProfile = (updates) => {
    setUserData(prev => ({ ...prev, ...updates }));
  };

  // Enhanced add to cart functionality with better feedback
  const addToCart = (product, quantity = 1) => {
    if (!product || !product.id) {
      console.error('Invalid product for cart:', product);
      return;
    }

    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        const updated = prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        toast.success(t('تم تحديث الكمية'), {
          description: t('تم تحديث كمية المنتج في السلة')
        });
        return updated;
      } else {
        const newItem = { ...product, quantity };
        toast.success(t('تم إضافة المنتج'), {
          description: t('تم إضافة المنتج إلى السلة بنجاح')
        });
        return [...prev, newItem];
      }
    });
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCartItems(prev => {
      const updated = prev.filter(item => item.id !== productId);
      toast.success(t('تم حذف المنتج'), {
        description: t('تم حذف المنتج من السلة')
      });
      return updated;
    });
  };

  // Update cart item quantity
  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prev => 
      prev.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Enhanced navigation with proper state management
  const navigateTo = (screen, data = null) => {
    console.log(`Navigating to: ${screen}`, data);
    
    // Handle special navigation cases
    if (screen === 'product-detail' && data) {
      setSelectedProduct(data);
    } else if (screen === 'delivery-tracking' && data) {
      setTrackingOrderId(data.orderId || data);
    }
    
    setCurrentScreen(screen);
  };

  // Logout functionality
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    setUserData(null);
    setCartItems([]);
    setSelectedProduct(null);
    setTrackingOrderId(null);
    setCurrentScreen('onboarding');
    toast.success(t('تم تسجيل الخروج بنجاح'));
  };

  // Screen rendering logic
  const renderScreen = () => {
    if (!isAuthenticated) {
      switch (currentScreen) {
        case 'onboarding':
          return <OnboardingScreen onNext={() => navigateTo('auth')} onSkip={() => navigateTo('auth')} />;
        case 'auth':
          return <AuthScreen onAuth={handleAuth} onLanguageToggle={toggleLanguage} currentLanguage={language} />;
        default:
          return <OnboardingScreen onNext={() => navigateTo('auth')} onSkip={() => navigateTo('auth')} />;
      }
    }

    // Patient portal screens
    if (userType === 'patient') {
      switch (currentScreen) {
        case 'home':
          return <HomeScreen userData={userData} navigateTo={navigateTo} addToCart={addToCart} cartItemCount={cartItems.length} />;
        case 'search':
          return <SearchScreen navigateTo={navigateTo} addToCart={addToCart} />;
        case 'product-detail':
          return <ProductDetailScreen product={selectedProduct} navigateTo={navigateTo} addToCart={addToCart} />;
        case 'prescription':
          return <PrescriptionScreen navigateTo={navigateTo} />;
        case 'cart':
          return <CartScreen cartItems={cartItems} setCartItems={setCartItems} navigateTo={navigateTo} removeFromCart={removeFromCart} updateQuantity={updateCartQuantity} />;
        case 'consult':
          return <ConsultScreen navigateTo={navigateTo} />;
        case 'profile':
          return <ProfileScreen userData={userData} navigateTo={navigateTo} onLogout={handleLogout} updateProfile={updateUserProfile} />;
        case 'orders':
          return <OrderHistoryScreen navigateTo={navigateTo} />;
        case 'address':
          return <AddressManagement navigateTo={navigateTo} />;
        case 'delivery-tracking':
          return <DeliveryTracking navigateTo={navigateTo} orderId={trackingOrderId} />;
        case 'donation':
          return <DonationScreen navigateTo={navigateTo} />;
        default:
          return <HomeScreen userData={userData} navigateTo={navigateTo} addToCart={addToCart} cartItemCount={cartItems.length} />;
      }
    }

    // Pharmacist portal screens
    if (userType === 'pharmacist') {
      switch (currentScreen) {
        case 'pharmacist-dashboard':
          return <PharmacistDashboard userData={userData} navigateTo={navigateTo} />;
        case 'pharmacist-inventory':
          return <PharmacistInventory navigateTo={navigateTo} />;
        case 'pharmacist-orders':
          return <PharmacistOrders navigateTo={navigateTo} />;
        case 'pharmacist-prescriptions':
          return <PharmacistPrescriptions navigateTo={navigateTo} />;
        case 'pharmacist-consultations':
          return <PharmacistConsultations navigateTo={navigateTo} />;
        case 'pharmacist-analytics':
          return <PharmacistAnalytics navigateTo={navigateTo} />;
        case 'pharmacist-profile':
          return <PharmacistProfile userData={userData} navigateTo={navigateTo} onLogout={handleLogout} updateProfile={updateUserProfile} />;
        case 'pharmacist-drug-upload':
          return <PharmacistDrugUpload navigateTo={navigateTo} />;
        default:
          return <PharmacistDashboard userData={userData} navigateTo={navigateTo} />;
      }
    }

    return <OnboardingScreen navigateTo={navigateTo} />;
  };

  return renderScreen();
}

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Package, 
  DollarSign,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  Sparkles, 
  MapPin
} from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { useLocalization, sudanesePharmaceuticalData, useRTL } from '../services/LocalizationService';

// Get screen dimensions for charts
const screenWidth = Dimensions.get('window').width;

// Mock analytics data with Sudanese context
const generateAnalyticsData = () => {
  const currentDate = new Date();
  
  return {
    overview: {
      totalRevenue: 125000,
      totalOrders: 1847,
      totalCustomers: 423,
      averageOrderValue: 67.5,
      growthRate: 15.8,
      inventoryValue: 450000
    },
    monthlyTrends: [
      { month: 'يناير', revenue: 89000, orders: 234, customers: 89 },
      { month: 'فبراير', revenue: 102000, orders: 278, customers: 102 },
      { month: 'مارس', revenue: 118000, orders: 312, customers: 118 },
      { month: 'أبريل', revenue: 125000, orders: 347, customers: 134 },
      { month: 'مايو', revenue: 134000, orders: 389, customers: 156 },
      { month: 'يونيو', revenue: 142000, orders: 423, customers: 178 }
    ],
    topProducts: [
      { name: 'أدوية الضغط', revenue: 45000, quantity: 234, margin: 23 },
      { name: 'أدوية السكري', revenue: 38000, quantity: 189, margin: 28 },
      { name: 'المضادات الحيوية', revenue: 32000, quantity: 156, margin: 18 },
      { name: 'المسكنات', revenue: 28000, quantity: 234, margin: 15 },
      { name: 'فيتامينات', revenue: 25000, quantity: 187, margin: 35 }
    ],
    customerSegments: [
      { segment: 'مرضى مزمنون', count: 180, percentage: 42.6, value: 'high' },
      { segment: 'عملاء عاديون', count: 156, percentage: 36.9, value: 'medium' },
      { segment: 'عملاء جدد', count: 87, percentage: 20.6, value: 'low' }
    ]
  };
};

export default function PharmacistAnalytics({ navigateTo }) {
  const { t, language } = useLocalization();
  const { isRTL, getMargin } = useRTL();
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [activeTab, setActiveTab] = useState('overview');

  const analytics = generateAnalyticsData();

  const formatCurrency = (amount) => {
    return `${amount.toLocaleString()} ج.س`;
  };

  const formatPercentage = (value) => {
    return `${value > 0 ? '+' : ''}${value}%`;
  };

  // Simple metric card component
  const MetricCard = ({ title, value, change, icon: Icon, trend }) => (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          {change && (
            <div className={`flex items-center gap-1 text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span>{change}</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </Card>
  );

  return (
    <ScrollView className="flex-1 bg-background" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onPress={() => navigateTo('pharmacist-dashboard')}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">{t('تحليلات الصيدلية')}</h1>
            <p className="text-sm text-muted-foreground">{t('تقارير شاملة حول أداء الصيدلية')}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">{t('أسبوعي')}</SelectItem>
              <SelectItem value="month">{t('شهري')}</SelectItem>
              <SelectItem value="quarter">{t('ربعي')}</SelectItem>
              <SelectItem value="year">{t('سنوي')}</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4" />
            {t('تصدير')}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">{t('نظرة عامة')}</TabsTrigger>
            <TabsTrigger value="revenue">{t('الإيرادات')}</TabsTrigger>
            <TabsTrigger value="products">{t('المنتجات')}</TabsTrigger>
            <TabsTrigger value="customers">{t('العملاء')}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <MetricCard
                title={t('إجمالي الإيرادات')}
                value={formatCurrency(analytics.overview.totalRevenue)}
                change={formatPercentage(analytics.overview.growthRate)}
                icon={DollarSign}
                trend="up"
              />
              <MetricCard
                title={t('إجمالي الطلبات')}
                value={analytics.overview.totalOrders.toLocaleString()}
                change={formatPercentage(12.3)}
                icon={Package}
                trend="up"
              />
              <MetricCard
                title={t('إجمالي العملاء')}
                value={analytics.overview.totalCustomers.toLocaleString()}
                change={formatPercentage(8.7)}
                icon={Users}
                trend="up"
              />
              <MetricCard
                title={t('متوسط قيمة الطلب')}
                value={formatCurrency(analytics.overview.averageOrderValue)}
                change={formatPercentage(5.2)}
                icon={TrendingUp}
                trend="up"
              />
              <MetricCard
                title={t('قيمة المخزون')}
                value={formatCurrency(analytics.overview.inventoryValue)}
                change={formatPercentage(-2.1)}
                icon={Package}
                trend="down"
              />
              <MetricCard
                title={t('معدل النمو')}
                value={formatPercentage(analytics.overview.growthRate)}
                icon={Activity}
              />
            </div>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{t('إجراءات سريعة')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                  <BarChart3 className="w-6 h-6" />
                  <span className="text-sm">{t('تقرير المبيعات')}</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                  <PieChartIcon className="w-6 h-6" />
                  <span className="text-sm">{t('تحليل المنتجات')}</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                  <Users className="w-6 h-6" />
                  <span className="text-sm">{t('تحليل العملاء')}</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                  <Target className="w-6 h-6" />
                  <span className="text-sm">{t('تقرير الأهداف')}</span>
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{t('تطور الإيرادات الشهرية')}</h3>
              <div className="text-center py-8 text-muted-foreground">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>{t('الرسوم البيانية متاحة في التطبيق المحمول')}</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{t('أفضل المنتجات مبيعاً')}</h3>
              <div className="space-y-4">
                {analytics.topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.quantity} وحدة</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatCurrency(product.revenue)}</p>
                      <Badge variant="secondary">{product.margin}% هامش</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{t('تقسيم العملاء')}</h3>
              <div className="space-y-4">
                {analytics.customerSegments.map((segment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{segment.segment}</p>
                      <p className="text-sm text-muted-foreground">{segment.count} عميل</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{segment.percentage}%</p>
                      <Badge variant={segment.value === 'high' ? 'default' : segment.value === 'medium' ? 'secondary' : 'outline'}>
                        {segment.value === 'high' ? 'عالية القيمة' : segment.value === 'medium' ? 'متوسطة' : 'منخفضة'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollView>
  );
}
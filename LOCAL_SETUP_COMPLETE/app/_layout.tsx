import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { NotificationProvider } from '@/components/services/NotificationService';
import { InventoryProvider } from '@/components/services/InventoryService';
import { DeliveryProvider } from '@/components/services/DeliveryService';
import { LocalizationProvider } from '@/components/services/LocalizationService';
import { Toaster } from '@/components/ui/sonner';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ErrorBoundary>
      <LocalizationProvider>
        <NotificationProvider>
          <InventoryProvider>
            <DeliveryProvider>
              <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                  <Stack.Screen name="+not-found" />
                </Stack>
                <StatusBar style="auto" />
                <Toaster />
              </ThemeProvider>
            </DeliveryProvider>
          </InventoryProvider>
        </NotificationProvider>
      </LocalizationProvider>
    </ErrorBoundary>
  );
}

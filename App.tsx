import { Colors } from './src/theme';
import React, { useEffect } from 'react';
import Navigation from './src/navigation';
import { useCachedResources, useColorScheme } from './src/hooks';
import { CustomStatusBar } from './src/components';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const theme = useColorScheme();
  const { isLoadingComplete } = useCachedResources();

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor={Colors[theme].primary} />
        <Navigation colorScheme={theme} />
      </SafeAreaProvider>
    );
  }
}

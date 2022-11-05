import { Routes } from '../../constants';
import { RootStackParamList } from '@types';
import BottomTabNavigator from '../BottomTabs';
import { NotFound, NoConnectivity } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Root}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name={Routes.NoConnectivity} component={NoConnectivity} />
        <Stack.Screen
          name={Routes.NotFound}
          component={NotFound}
          options={{ title: 'Oops!' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

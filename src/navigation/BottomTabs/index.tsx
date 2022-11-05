import React from 'react';
import { Colors } from '../../theme';
import { Routes } from '../../constants';
import { RootTabParamList } from '@types';
import { useColorScheme } from '../../hooks';
import { useTranslation } from 'react-i18next';
import { normalize } from '../../theme/Metrics';
import { AppBottomTab } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Files, More, Home, Scanner, Tools } from '../../screens';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const theme = useColorScheme();
  const { t, i18n } = useTranslation();

  return (
    <BottomTab.Navigator
      tabBar={props => <AppBottomTab locked={false} {...props} />}
      initialRouteName={Routes.Home}

      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarActiveTintColor: Colors[theme].activeTab,
        tabBarInactiveTintColor: Colors[theme].inActiveTab,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: normalize(60, 'height'),
          borderTopWidth: 0,
        },
      }}>
      <BottomTab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          title: t(Routes.Home),
          tabBarIcon: ({ color }) => (
            <Ionicons name={"home"} size={24} color={color} style={{ marginBottom: -3 }} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.Tools}
        component={Tools}
        options={{
          title: t(Routes.Tools),
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"tools"} size={24} color={color} style={{ marginBottom: -3 }} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.Scanner}
        component={Scanner}
        options={{
          title: t(Routes.Scanner),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={"credit-card-scan"} size={24} color={color} style={{ marginBottom: -3 }} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.Files}
        component={Files}
        options={{
          title: t(Routes.Files),
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"file-download"} size={24} color={color} style={{ marginBottom: -3 }} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.More}
        component={More}
        options={{
          title: t(Routes.More),
          tabBarIcon: ({ color }) => (
            <SimpleIcon name={"menu"} size={24} color={color} style={{ marginBottom: -3 }} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

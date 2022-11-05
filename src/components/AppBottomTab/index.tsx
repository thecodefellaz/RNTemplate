import styles from './styles';
import { Fonts } from '../../theme';
import { Text } from 'react-native';
import { Colors } from '../../theme';
import { useColorScheme } from '../../hooks';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';

interface Props extends BottomTabBarProps {
  locked: boolean;
}

const AppBottomTab = ({
  locked = false,
  state,
  descriptors,
  navigation,
}: Props) => {

  const theme = useColorScheme();

  return (
    <View>
      {/* <BlurView blurType={'light'} blurAmount={30} style={styles.main}> */}
      <View style={[styles.main, { backgroundColor: Colors[theme].primary }]}>
        <SafeAreaView style={styles.buttonsRow}>
          {state.routes.map((route, index) => {
            let lockTab = locked;
            if (route.name === 'Home') {
              lockTab = false;
            }
            const { options } = descriptors[route.key];
            const label = options.title;
            const icon = options.tabBarIcon;
            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                disabled={lockTab}
                key={route.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.button}>
                <View style={styles.buttonIcon}>
                  {icon &&
                    icon({
                      focused: isFocused,
                      color: isFocused
                        ? options.tabBarActiveTintColor
                        : options.tabBarInactiveTintColor,
                      size: 20,
                    })}
                </View>
                <View style={styles.buttonLabel}>
                  <Text
                    style={{
                      color: isFocused
                        ? options.tabBarActiveTintColor
                        : options.tabBarInactiveTintColor,
                      fontFamily: Fonts.montMedium,
                      fontSize: 13
                    }}>
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </SafeAreaView>
      </View>
    </View>
  );
};

export default AppBottomTab;

import React from 'react';
import { styles } from './styles';
import { isEmpty } from '../../utils';
import { View } from '../../components';
import Spinner from 'react-native-loading-spinner-overlay';
import { SafeAreaView, ViewStyle } from 'react-native';

interface Props {
  spinner?: boolean;
  safeArea?: boolean;
  customStyle?: ViewStyle;
  backgroundColor?: string;
  children: React.ReactNode;
}

const Container = ({
  children,
  customStyle,
  safeArea = true,
  spinner = false,
  backgroundColor = '',
}: Props) => {

  return (
    <View
      style={[
        styles.container,
        !isEmpty(backgroundColor) && { backgroundColor: backgroundColor },
      ]}>
      <Spinner visible={spinner} />
      <View style={styles.flex}>
        {safeArea ? (
          <SafeAreaView style={[styles.flex1, customStyle]}>
            {children}
          </SafeAreaView>
        ) : (
          <View style={[styles.flex1, customStyle]}>{children}</View>
        )}
      </View>
    </View>
  );
};

export default Container;

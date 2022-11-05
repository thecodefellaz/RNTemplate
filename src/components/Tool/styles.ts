import {StyleSheet} from 'react-native';
import {normalize} from '../../theme/Metrics';

const styles = StyleSheet.create({
  container: {
    height: normalize(75),
    width: normalize(75),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};

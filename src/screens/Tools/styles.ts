import {StyleSheet} from 'react-native';
import {normalize} from '../../theme/Metrics';

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    paddingHorizontal: normalize(12),
  },
  listSeparator: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default styles;

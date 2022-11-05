import {normalize} from '../../theme/Metrics';
import {Dimensions, Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    height:
      Platform.OS === 'ios' && Dimensions.get('window').height >= 800
        ? normalize(80, 'height')
        : normalize(65, 'height'),
    paddingTop: normalize(10),
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
  },
  buttonsRow: {
    flexDirection: 'row',
    paddingBottom: normalize(2, 'height'),
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    width: normalize(70),
    height: '90%',
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonIcon: {
    marginBottom: normalize(10, 'height'),
  },
  buttonLabel: {},
});

export default styles;

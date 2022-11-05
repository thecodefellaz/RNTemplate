import {Fonts} from '../../theme';
import {StyleSheet} from 'react-native';
import {normalize} from '../../theme/Metrics';

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width: '100%',
    marginBottom: normalize(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(6),
  },
  left: {
    flex: 2,
  },
  title: {
    flex: 6,
    textAlign: 'center',
    fontSize: normalize(18),
    fontFamily: Fonts.montBold,
  },
  simpleHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalize(6),
  },
  simpleTitle: {
    flex: 6,
    fontSize: normalize(18),
    fontFamily: Fonts.montBold,
  },
});

export default styles;

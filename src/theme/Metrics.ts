import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export const normalize = (
  size: number,
  based: 'height' | 'width' = 'width',
): number => {
  let wscale;
  let hscale;
  if (width > height) {
    wscale = height / 320;
    hscale = width / 667;
  } else {
    wscale = width / 320;
    hscale = height / 667;
  }
  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const metrics = {
  margin: {
    small: 10,
    medium: 25,
    large: 50,
  },
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  ratio: height / width,
  icons: {
    vtiny: 8,
    tiny: 15,
    small: 22,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  fonts: {
    vsmall: normalize(14),
    small: normalize(16),
    medium: normalize(20),
    large: normalize(32),
  },
};

export default metrics;

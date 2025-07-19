import { Platform, StyleSheet, Dimensions } from 'react-native';
import { isTablet } from 'react-native-device-info';

import colors from './colors';
import fonts from './fonts';

/**
 * Height and Width export
 *
 */

export const { height, width } = Dimensions.get('screen');

/**
 * This common style will have some generic styles which is reffered globally in the application.
 */

function getCalculated(value: number) {
  //screen is designed from mockup of 414.0 width
  const tabSize = height < width ? 1024.0 : 768.0;
  return width * (value / (isTablet() ? tabSize : 414.0));
}

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.select({
      ios: 0,
      android: 0,
    }),
  },
  containerStretch: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
  },
  appHeader: {
    backgroundColor: colors.background,
    shadowColor: colors.onBackground,
    shadowOffset: {
      width: 0, height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
    zIndex: 1000,
  },
  appAction: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appContent: {
    alignSelf: 'flex-start',
    fontFamily: fonts.medium,
    fontSize: getCalculated(18),
    color: colors.onBackground,
  },
  flexStyle: {
    flex: 1,
  },
});

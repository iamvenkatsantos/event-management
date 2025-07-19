import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors, fonts } from '../styles';
import { DEFAULT_FONT_SIZE } from '../common/componentutils';
import { customPaletts } from '../styles/paletts';

export type TextControlProps = React.ComponentPropsWithRef<typeof Text> & {
  bold?: boolean | undefined;
  variant?: 'headline' | 'title' | 'body' | 'label' | 'small';
  type?: 'dark' | 'normal' | 'light' | 'clear' | 'error' | 'select' | 'link';
};

const TextControl: React.FC<TextControlProps> = (props: TextControlProps) => {
  return (
    <Text allowFontScaling={false} {...props} style={[
      styles.lblMain,
      (props.variant === 'headline') && styles.lblHeadline,
      (props.variant === 'title') && styles.lblTitle,
      (props.variant === 'body') && styles.lblBody,
      (props.variant === 'label') && styles.lblLabel,
      (props.variant === 'small') && styles.lblSmall,
      (props.type === 'dark') && styles.lblDark,
      (props.type === 'normal') && styles.lblNormal,
      (props.type === 'light') && styles.lblLight,
      (props.type === 'clear') && styles.lblClear,
      (props.type === 'error') && styles.lblError,
      (props.type === 'select') && styles.lblSelect,
      (props.type === 'link') && styles.lblLink,
      (props.bold) && styles.lblBold, props.style,
    ]} />
  );
};

export default React.memo(TextControl);

const styles = StyleSheet.create({
  lblMain: {
    fontSize: DEFAULT_FONT_SIZE,
    lineHeight: DEFAULT_FONT_SIZE + 4,
    fontFamily: fonts.medium,
    color: colors.onBackground,
  },
  lblHeadline: {
    fontSize: DEFAULT_FONT_SIZE + 4,
    lineHeight: DEFAULT_FONT_SIZE + 8,
    fontFamily: fonts.medium,
    color: colors.onSurface,
  },
  lblTitle: {
    fontSize: DEFAULT_FONT_SIZE + 2,
    lineHeight: DEFAULT_FONT_SIZE + 6,
    fontFamily: fonts.semiBold,
    color: colors.onBackground,
  },
  lblBody: {
    fontSize: DEFAULT_FONT_SIZE,
    lineHeight: DEFAULT_FONT_SIZE + 4,
    fontFamily: fonts.medium,
    color: colors.onTertiary,
  },
  lblLabel: {
    fontSize: DEFAULT_FONT_SIZE - 2,
    lineHeight: DEFAULT_FONT_SIZE + 2,
    fontFamily: fonts.medium,
    color: colors.onTertiary,
  },
  lblSmall: {
    fontSize: DEFAULT_FONT_SIZE - 4,
    lineHeight: DEFAULT_FONT_SIZE,
    fontFamily: fonts.medium,
    color: colors.onTertiary,
  },
  lblDark: {
    color: colors.onBackground,
  },
  lblNormal: {
    color: colors.onTertiary,
  },
  lblLight: {
    color: colors.onSecondary,
  },
  lblClear: {
    color: colors.onPrimary,
  },
  lblError: {
    color: colors.error,
  },
  lblSelect: {
    color: colors.primary,
  },
  lblLink: {
    color: customPaletts.linkTextColor,
  },
  lblBold: {
    fontFamily: fonts.semiBold,
  },
});

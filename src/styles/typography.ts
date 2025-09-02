import { StyleSheet } from 'react-native';
import fonts from './fonts';
import colors from './colors';

// Common font sizes
export const fontSizes = {
  xxxs: 10,
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 28,
  xxxl: 32,
} as const;

// Common typography styles
export const typography = StyleSheet.create({
  // Headlines
  h1: {
    fontSize: fontSizes.xxxl,
    fontFamily: fonts.bold,
    color: colors.onBackground,
    lineHeight: fontSizes.xxxl * 1.2,
  },
  h2: {
    fontSize: fontSizes.xxl,
    fontFamily: fonts.bold,
    color: colors.onBackground,
    lineHeight: fontSizes.xxl * 1.2,
  },
  h3: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.semiBold,
    color: colors.onBackground,
    lineHeight: fontSizes.xl * 1.2,
  },
  h4: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.semiBold,
    color: colors.onBackground,
    lineHeight: fontSizes.lg * 1.2,
  },
  
  // Body Text
  bodyLarge: {
    fontSize: fontSizes.md,
    fontFamily: fonts.medium,
    color: colors.onSurface,
    lineHeight: fontSizes.md * 1.4,
  },
  bodyMedium: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurface,
    lineHeight: fontSizes.sm * 1.4,
  },
  bodySmall: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: colors.onSurface,
    lineHeight: fontSizes.xs * 1.4,
  },
  
  // Labels
  labelLarge: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    color: colors.onSurfaceVariant,
    lineHeight: fontSizes.sm * 1.2,
  },
  labelMedium: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.semiBold,
    color: colors.onSurfaceVariant,
    lineHeight: fontSizes.xs * 1.2,
  },
  labelSmall: {
    fontSize: fontSizes.xxs,
    fontFamily: fonts.semiBold,
    color: colors.onSurfaceVariant,
    lineHeight: fontSizes.xxs * 1.2,
  },
  
  // Special Text Types
  button: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    lineHeight: fontSizes.sm * 1.2,
  },
  caption: {
    fontSize: fontSizes.xxs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
    lineHeight: fontSizes.xxs * 1.3,
  },
  overline: {
    fontSize: fontSizes.xxxs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  
  // Color Variants
  primary: {
    color: colors.primary,
  },
  secondary: {
    color: colors.secondary,
  },
  onPrimary: {
    color: colors.onPrimary,
  },
  onSecondary: {
    color: colors.onSecondary,
  },
  error: {
    color: colors.error,
  },
  
  // Weight Variants
  light: {
    fontFamily: fonts.light,
  },
  regular: {
    fontFamily: fonts.regular,
  },
  medium: {
    fontFamily: fonts.medium,
  },
  semiBold: {
    fontFamily: fonts.semiBold,
  },
  bold: {
    fontFamily: fonts.bold,
  },
});

// Export commonly used combinations
export const textStyles = {
  headerTitle: [typography.h2, typography.primary],
  headerSubtitle: [typography.bodyMedium, { color: 'rgba(255, 255, 255, 0.8)' }],
  cardTitle: [typography.h4, typography.semiBold],
  cardSubtitle: [typography.bodySmall, { color: colors.onSurfaceVariant }],
  buttonText: [typography.button, typography.onPrimary],
  placeholder: [typography.bodyMedium, { color: colors.onSurfaceVariant }],
  link: [typography.bodyMedium, typography.primary, typography.semiBold],
  error: [typography.bodySmall, typography.error],
};

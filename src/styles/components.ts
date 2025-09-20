import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from './index';
import { spacing, fontSizes } from './typography';
import { customPaletts } from './paletts';

// Shared component styles for consistent UI across the app
export const sharedComponents = StyleSheet.create({
  // Button Styles
  primaryButton: {
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  primaryButtonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: spacing.xl,
  },

  primaryButtonText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.5,
  },

  secondaryButton: {
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.primary,
    elevation: 2,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  secondaryButtonText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    color: colors.primary,
    letterSpacing: 0.3,
  },

  outlineButton: {
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.outline,
  },

  outlineButtonText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurface,
  },

  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface,
    elevation: 3,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  // Card Styles
  modernCard: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    padding: spacing.lg,
    elevation: 8,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    marginBottom: spacing.lg,
  },

  cardWithGradient: {
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    marginBottom: spacing.lg,
  },

  cardGradient: {
    padding: spacing.lg,
  },

  compactCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.md,
    elevation: 4,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  // Input Styles
  modernInput: {
    height: 56,
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingHorizontal: spacing.lg,
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurface,
    borderWidth: 2,
    borderColor: colors.outline,
    elevation: 2,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },

  modernInputFocused: {
    borderColor: colors.primary,
    elevation: 6,
    shadowColor: customPaletts.shadows.primary,
    shadowOpacity: 0.2,
  },

  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingHorizontal: spacing.lg,
    height: 56,
    borderWidth: 2,
    borderColor: colors.outline,
    elevation: 2,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },

  inputIcon: {
    marginRight: spacing.md,
  },

  inputField: {
    flex: 1,
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurface,
    paddingVertical: 0, // Remove default padding
  },

  // Badge Styles
  successBadge: {
    backgroundColor: customPaletts.success,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },

  warningBadge: {
    backgroundColor: customPaletts.warning,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },

  infoBadge: {
    backgroundColor: customPaletts.info,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },

  errorBadge: {
    backgroundColor: colors.error,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },

  badgeText: {
    fontSize: fontSizes.xxs,
    fontFamily: fonts.semiBold,
    color: colors.onPrimary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Chip Styles
  activeChip: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    elevation: 3,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  inactiveChip: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.outline,
    elevation: 1,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },

  activeChipText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    color: colors.onPrimary,
  },

  inactiveChipText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
  },

  // Header Styles
  modernHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },

  headerTitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onSurface,
  },

  headerBackButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  // Loading States
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.backdrop,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },

  loadingContainer: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: spacing.xl,
    alignItems: 'center',
    elevation: 8,
    shadowColor: customPaletts.shadows.elevation.large,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },

  loadingText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurface,
    marginTop: spacing.md,
  },

  // Status Indicators
  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: customPaletts.success,
    borderWidth: 2,
    borderColor: colors.surface,
  },

  offlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.onSurfaceVariant,
    borderWidth: 2,
    borderColor: colors.surface,
  },

  // Dividers
  modernDivider: {
    height: 1,
    backgroundColor: colors.outline,
    opacity: 0.3,
    marginVertical: spacing.md,
  },

  thickDivider: {
    height: 8,
    backgroundColor: colors.surfaceVariant,
    marginVertical: spacing.lg,
  },

  // Container Styles
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },

  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },

  // Animation Helpers
  fadeInCard: {
    opacity: 0,
    transform: [{ translateY: 20 }, { scale: 0.95 }],
  },

  fadeInCardVisible: {
    opacity: 1,
    transform: [{ translateY: 0 }, { scale: 1 }],
  },

  slideInLeft: {
    transform: [{ translateX: -50 }],
    opacity: 0,
  },

  slideInLeftVisible: {
    transform: [{ translateX: 0 }],
    opacity: 1,
  },
});

// Helper function to create gradient button props
export const createGradientButtonProps = (colors: string[]) => ({
  colors,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  style: sharedComponents.primaryButtonGradient,
});

// Helper function to create shadow styles
export const createShadow = (
  elevation: number,
  shadowColor: string = customPaletts.shadows.elevation.small,
  opacity: number = 0.1
) => ({
  elevation,
  shadowColor,
  shadowOffset: { width: 0, height: elevation / 2 },
  shadowOpacity: opacity,
  shadowRadius: elevation,
});

export default sharedComponents;

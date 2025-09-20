import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, fonts } from '../../../styles';
import { spacing, fontSizes } from '../../../styles/typography';
import { customPaletts } from '../../../styles/paletts';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Background and Layout
  gradientBackground: {
    flex: 0.4,
  },

  // Floating background elements
  floatingCircle1: {
    position: 'absolute',
    top: height * 0.15,
    right: -20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  floatingCircle2: {
    position: 'absolute',
    top: height * 0.08,
    left: -10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  
  floatingCircle3: {
    position: 'absolute',
    top: height * 0.22,
    right: width * 0.3,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },

  // Hero Section
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
  },

  heroContent: {
    alignItems: 'center',
  },

  heroIconContainer: {
    marginBottom: spacing.md,
  },

  heroIconGradient: {
    width: 80,
    height: 80,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: customPaletts.shadows.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  heroTitle: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    marginBottom: spacing.xs,
    textAlign: 'center',
    letterSpacing: -0.3,
  },

  heroSubtitle: {
    fontSize: fontSizes.md,
    fontFamily: fonts.semiBold,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  eventTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 16,
    gap: spacing.xs,
  },

  heroEventTime: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onPrimary,
  },

  // Modern Content Container
  modernContentContainer: {
    flex: 0.6,
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    elevation: 20,
    shadowColor: colors.backdrop,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -10 },
    shadowRadius: 25,
  },

  scrollContent: {
    paddingBottom: spacing.xxxl,
  },

  // Section Headers
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
    gap: spacing.sm,
  },

  sectionTitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onBackground,
    letterSpacing: 0.3,
  },

  // Modern Breakdown Container
  modernBreakdownContainer: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.lg,
    borderRadius: 20,
    elevation: 4,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  breakdownCardGradient: {
    borderRadius: 20,
    padding: spacing.lg,
  },

  // Modern Breakdown Row
  modernBreakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },

  itemInfo: {
    flex: 1,
  },

  modernBreakdownLabel: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    color: colors.onSurface,
    marginBottom: spacing.xxs,
  },

  itemSubtext: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
  },

  itemPrice: {
    alignItems: 'flex-end',
  },

  modernBreakdownValue: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onSurface,
    letterSpacing: 0.2,
  },

  // Modern Total Section
  modernTotalSection: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    borderRadius: 20,
    elevation: 8,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },

  totalCardGradient: {
    borderRadius: 20,
    padding: spacing.xl,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalInfo: {
    flex: 1,
  },

  totalLabel: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    marginBottom: spacing.xxs,
  },

  totalSubtext: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: 'rgba(255, 255, 255, 0.8)',
  },

  modernTotalPrice: {
    fontSize: fontSizes.xxxl,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: -0.5,
  },

  // Modern Bottom Section
  modernBottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 20,
    shadowColor: colors.backdrop,
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },

  bottomSectionGradient: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: Platform.OS === 'ios' ? spacing.xxl + spacing.md : spacing.xl,
  },

  // Payment Methods Preview
  paymentMethodsPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  paymentMethodsLabel: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
  },

  paymentIconsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },

  // Modern Pay Now Button
  modernPayNowButton: {
    height: 60,
    borderRadius: 20,
    elevation: 8,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  payNowButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },

  modernPayNowText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.3,
    flex: 1,
    textAlign: 'center',
  },

  payNowAmount: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.5,
  },

  // Bottom Spacing
  bottomSpacing: {
    height: 150, // Space for fixed bottom section
  },

  // Legacy styles (keeping for compatibility)
  scrollContentLegacy: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventNameText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onBackground,
    flex: 1,
  },
  eventTimeText: {
    fontSize: 14,
    color: colors.onSurface,
    fontWeight: '500',
  },
  breakdownContainer: {
    paddingHorizontal: 15,
    backgroundColor: colors.surface,
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 20,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  breakdownLabel: {
    fontSize: 16,
    color: colors.onBackground,
  },
  breakdownValue: {
    fontSize: 16,
    color: colors.onBackground,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: colors.outline,
    marginVertical: 10,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.onBackground,
  },
  bottomSection: {
    backgroundColor: colors.surface,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  payNowButton: {
    backgroundColor: colors.surfaceVariant,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  payNowText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onBackground,
  },
});

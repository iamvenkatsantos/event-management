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
    flex: 0.35,
  },

  // Floating background elements
  floatingCircle1: {
    position: 'absolute',
    top: height * 0.12,
    right: -25,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  floatingCircle2: {
    position: 'absolute',
    top: height * 0.06,
    left: -15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  
  floatingCircle3: {
    position: 'absolute',
    top: height * 0.18,
    right: width * 0.25,
    width: 35,
    height: 35,
    borderRadius: 17.5,
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

  // Modern Loading
  modernLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.lg,
  },

  loadingText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.semiBold,
    color: colors.onPrimary,
  },

  // Modern Content Container
  modernContentContainer: {
    flex: 0.65,
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

  // Section Header
  sectionHeader: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
    color: colors.onBackground,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },

  sectionSubtitle: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
    textAlign: 'center',
  },

  // Modern Tickets Container
  modernTicketsContainer: {
    paddingHorizontal: spacing.lg,
  },

  // Modern Ticket Card
  modernTicketCard: {
    marginBottom: spacing.lg,
    borderRadius: 20,
    elevation: 6,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },

  ticketCardGradient: {
    borderRadius: 20,
    padding: spacing.lg,
  },

  // Ticket Header
  ticketHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  ticketIconContainer: {
    marginRight: spacing.md,
  },

  ticketIconGradient: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  ticketInfo: {
    flex: 1,
  },

  modernTicketTierName: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onSurface,
    marginBottom: spacing.xxs,
    letterSpacing: 0.2,
  },

  modernTicketDescription: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
  },

  // Price Badge
  priceBadge: {
    alignSelf: 'flex-start',
  },

  priceBadgeGradient: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: 12,
    elevation: 2,
    shadowColor: customPaletts.shadows.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  priceText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.bold,
    color: colors.onSecondary,
    letterSpacing: 0.3,
  },

  // Modern Quantity Container
  modernQuantityContainer: {
    marginTop: spacing.sm,
  },

  quantityLabel: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    color: colors.onSurface,
    marginBottom: spacing.sm,
  },

  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  modernQuantityButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    elevation: 4,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  quantityButtonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },

  disabledButton: {
    opacity: 0.6,
    elevation: 2,
    shadowOpacity: 0.1,
  },

  quantityDisplay: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 12,
    minWidth: 60,
    alignItems: 'center',
    elevation: 2,
    shadowColor: colors.onSurface,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  modernQuantityText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onSurface,
    letterSpacing: 0.5,
  },

  // Ticket Floating Elements
  ticketFloatingElement: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
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

  // Summary Header
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },

  summaryHeaderText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onSurface,
    letterSpacing: 0.3,
  },

  // Modern Summary Row
  modernSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },

  summaryRowLeft: {
    flex: 1,
    marginRight: spacing.md,
  },

  summaryRowRight: {
    alignItems: 'flex-end',
  },

  summaryLabel: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
    marginBottom: spacing.xxs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  summaryMainText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    color: colors.onSurface,
  },

  modernQuantityValue: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.primary,
  },

  // Modern Price Section
  modernPriceSection: {
    borderTopWidth: 1,
    borderTopColor: colors.outline,
    paddingTop: spacing.md,
    marginBottom: spacing.lg,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    fontSize: fontSizes.md,
    fontFamily: fonts.semiBold,
    color: colors.onSurface,
  },

  modernTotalPrice: {
    fontSize: fontSizes.xxl,
    fontFamily: fonts.bold,
    color: colors.primary,
    letterSpacing: -0.5,
  },

  // Modern Pay Now Button
  modernPayNowButton: {
    height: 56,
    borderRadius: 18,
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
    borderRadius: 18,
    gap: spacing.sm,
  },

  modernPayNowText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.5,
  },

  // Bottom Spacing
  bottomSpacing: {
    height: 180, // Space for fixed bottom section
  },

  // Legacy styles (keeping for compatibility)
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  ticketsContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  ticketCard: {
    width: width - 30,
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  ticketImagePlaceholder: {
    width: width - 60,
    height: 60,
    backgroundColor: colors.surfaceVariant,
    borderRadius: 10,
    marginBottom: 15,
  },
  ticketTierName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.onBackground,
    marginBottom: 10,
    textAlign: 'center',
  },
  ticketDescription: {
    fontSize: 12,
    color: colors.onTertiary,
    textAlign: 'center',
    lineHeight: 16,
    marginBottom: 15,
    minHeight: 48,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: colors.surfaceVariant,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.onBackground,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onBackground,
    marginHorizontal: 15,
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
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  quantityValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onBackground,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.onBackground,
  },
  payNowButton: {
    backgroundColor: colors.surfaceVariant,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  payNowText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onBackground,
  },
});

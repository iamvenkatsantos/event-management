import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, fonts } from '../../../styles';
import { spacing, fontSizes } from '../../../styles/typography';
import { customPaletts } from '../../../styles/paletts';

const { width, height } = Dimensions.get('window');
const ticketCardWidth = (width - 60) / 2; // Changed to 2 columns for better display

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
    right: -30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  floatingCircle2: {
    position: 'absolute',
    top: height * 0.08,
    left: -20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  
  floatingCircle3: {
    position: 'absolute',
    top: height * 0.25,
    right: width * 0.3,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },

  // Hero Section
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },

  heroContent: {
    alignItems: 'center',
  },

  heroTitle: {
    fontSize: fontSizes.xxl,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    marginBottom: spacing.sm,
    textAlign: 'center',
    letterSpacing: -0.5,
  },

  heroSubtitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.semiBold,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: spacing.md,
    textAlign: 'center',
  },

  eventTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 20,
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
    paddingBottom: spacing.xxl,
  },

  // Section Header
  sectionHeader: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  // Modern Ticket Card
  modernTicketCard: {
    width: ticketCardWidth,
    marginBottom: spacing.xl,
    borderRadius: 24,
    elevation: 8,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },

  ticketCardGradient: {
    borderRadius: 24,
    padding: spacing.lg,
    alignItems: 'center',
    minHeight: 280,
    justifyContent: 'space-between',
  },

  // Ticket Icon
  ticketIconContainer: {
    marginBottom: spacing.md,
  },

  ticketIconGradient: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  // Ticket Details
  modernTicketTierName: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onSurface,
    marginBottom: spacing.sm,
    textAlign: 'center',
    letterSpacing: 0.3,
  },

  modernTicketDescription: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: fontSizes.xs * 1.4,
    marginBottom: spacing.md,
    minHeight: 32,
  },

  // Price Badge
  priceBadge: {
    marginBottom: spacing.lg,
  },

  priceBadgeGradient: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    elevation: 3,
    shadowColor: customPaletts.shadows.secondary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  priceText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onSecondary,
    letterSpacing: 0.5,
  },

  // Modern Book Button
  modernBookButton: {
    width: '100%',
    height: 48,
    borderRadius: 16,
    elevation: 6,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  bookButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    gap: spacing.sm,
  },

  modernBookButtonText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.5,
  },

  // Ticket Floating Elements
  ticketFloatingElement: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },

  // Bottom Spacing
  bottomSpacing: {
    height: spacing.xxl,
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
    width: ticketCardWidth,
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  ticketImagePlaceholder: {
    width: ticketCardWidth - 30,
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
  bookButton: {
    backgroundColor: colors.surfaceVariant,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
  },
  bookButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onBackground,
  },
});

import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, spacing, typography } from '../../../styles';
import { customPaletts } from '../../../styles/paletts';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  // Legacy styles for loading state
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Modern styles
  modernContainer: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  floatingElement: {
    position: 'absolute',
    borderRadius: 50,
    opacity: 0.1,
  },
  floatingElement1: {
    width: 100,
    height: 100,
    backgroundColor: customPaletts.info,
    top: height * 0.1,
    right: -50,
  },
  floatingElement2: {
    width: 150,
    height: 150,
    backgroundColor: customPaletts.warning,
    top: height * 0.4,
    left: -75,
  },
  floatingElement3: {
    width: 80,
    height: 80,
    backgroundColor: customPaletts.success,
    bottom: height * 0.2,
    right: -40,
  },
  scrollContent: {
    paddingBottom: spacing.xxxl,
  },

  // Modern Banner Styles
  modernBannerContainer: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.md,
    marginBottom: spacing.lg,
    borderRadius: 16,
    elevation: 8,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  modernEventBanner: {
    height: 200,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bannerIcon: {
    opacity: 0.8,
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  modernBannerText: {
    ...typography.h3,
    color: 'white',
    fontWeight: '700',
  },

  // Modern Event Info Card
  modernEventInfoCard: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    borderRadius: 16,
    elevation: 6,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  eventInfoGradient: {
    borderRadius: 16,
    padding: spacing.lg,
  },
  modernEventHeader: {
    marginBottom: spacing.md,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  modernEventName: {
    ...typography.h2,
    color: colors.onBackground,
    flex: 1,
    marginRight: spacing.md,
    fontWeight: '700',
  },
  modernRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  modernEventRating: {
    ...typography.bodyMedium,
    fontWeight: '600',
    color: customPaletts.warning,
    marginLeft: 4,
  },
  ratingLabel: {
    ...typography.caption,
    color: colors.onSurfaceVariant,
    marginLeft: 2,
  },
  modernBookingInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    width: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginHorizontal: spacing.md,
  },
  statLabel: {
    ...typography.caption,
    color: colors.onSurfaceVariant,
    marginTop: 4,
    textAlign: 'center',
  },
  statValue: {
    ...typography.bodyMedium,
    fontWeight: '600',
    color: colors.onBackground,
    marginTop: 2,
    textAlign: 'center',
  },

  // Modern Description Card
  modernDescriptionCard: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    borderRadius: 16,
    elevation: 6,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  descriptionGradient: {
    borderRadius: 16,
    padding: spacing.lg,
  },
  descriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  modernDescriptionTitle: {
    ...typography.h3,
    color: colors.onBackground,
    marginLeft: spacing.sm,
    fontWeight: '600',
  },
  modernDescription: {
    ...typography.bodyMedium,
    color: colors.onSurfaceVariant,
    lineHeight: 24,
  },

  // Modern Cast Section
  modernCastContainer: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  modernCastTitle: {
    ...typography.h3,
    color: colors.onBackground,
    marginLeft: spacing.sm,
    fontWeight: '600',
  },
  modernCastList: {
    paddingLeft: spacing.md,
  },
  modernCastMember: {
    alignItems: 'center',
    marginRight: spacing.md,
    width: 80,
  },
  modernCastImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  modernCastName: {
    ...typography.caption,
    color: colors.onBackground,
    textAlign: 'center',
    fontWeight: '500',
  },

  // Modern Book Now Button
  modernBookNowButton: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    borderRadius: 16,
    elevation: 8,
    shadowColor: customPaletts.shadows.elevation.large,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  bookNowGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.lg,
    borderRadius: 16,
  },
  modernBookNowText: {
    ...typography.h3,
    color: 'white',
    fontWeight: '700',
  },
  bookNowIcon: {
    marginLeft: spacing.sm,
  },

  // Modern Recommendations
  modernRecommendationsContainer: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  modernRecommendationsTitle: {
    ...typography.h3,
    color: colors.onBackground,
    marginLeft: spacing.sm,
    fontWeight: '600',
  },
  modernRecommendationsList: {
    paddingLeft: spacing.md,
  },
  modernRecommendationCard: {
    width: 180,
    marginRight: spacing.md,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    elevation: 6,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  recommendationImageGradient: {
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendationContent: {
    padding: spacing.md,
  },
  recommendationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  modernRecommendationTitle: {
    ...typography.bodyMedium,
    color: colors.onBackground,
    fontWeight: '600',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  modernRecommendationRating: {
    ...typography.caption,
    fontWeight: '600',
    color: customPaletts.warning,
    marginLeft: 2,
  },
  modernRecommendationDesc: {
    ...typography.caption,
    color: colors.onSurfaceVariant,
    marginBottom: spacing.sm,
    lineHeight: 16,
  },
  modernRecommendationBookBtn: {
    borderRadius: 12,
    elevation: 4,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  recommendationBookGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 12,
  },
  modernRecommendationBookText: {
    ...typography.caption,
    color: 'white',
    fontWeight: '600',
    marginRight: 4,
  },

  // Legacy styles (keeping for backward compatibility)
  bannerContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  eventBanner: {
    height: 200,
    backgroundColor: colors.surfaceVariant,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    position: 'absolute',
    color: colors.onSurfaceVariant,
    fontSize: 16,
    fontWeight: '600',
  },
  eventInfo: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.onBackground,
    flex: 1,
  },
  eventRating: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onBackground,
  },
  bookingInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalBooking: {
    fontSize: 16,
    color: colors.onBackground,
    fontWeight: '500',
  },
  memberCount: {
    fontSize: 16,
    color: colors.onSurface,
  },
  descriptionContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  description: {
    fontSize: 14,
    color: colors.onTertiary,
    lineHeight: 20,
    textAlign: 'justify',
  },
  castContainer: {
    paddingTop: 25,
  },
  castTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.onBackground,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  castList: {
    paddingLeft: 15,
  },
  castMember: {
    alignItems: 'center',
    marginRight: 15,
    width: 60,
  },
  castImage: {
    width: 50,
    height: 50,
    backgroundColor: colors.surfaceVariant,
    borderRadius: 25,
    marginBottom: 8,
  },
  castName: {
    fontSize: 12,
    color: colors.onBackground,
    textAlign: 'center',
  },
  bookNowButton: {
    marginHorizontal: 15,
    marginTop: 30,
    backgroundColor: colors.surfaceVariant,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  bookNowText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onBackground,
  },
  recommendationsContainer: {
    paddingTop: 30,
    paddingBottom: 20,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.onBackground,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  recommendationsList: {
    paddingLeft: 15,
  },
  recommendationCard: {
    width: (width - 60) / 3,
    backgroundColor: colors.surface,
    borderRadius: 15,
    margin: 5,
    padding: 10,
    marginRight: 10,
  },
  recommendationImage: {
    height: 60,
    backgroundColor: colors.surfaceVariant,
    borderRadius: 10,
    marginBottom: 8,
  },
  recommendationTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 3,
    color: colors.onBackground,
  },
  recommendationRating: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 3,
    color: colors.onBackground,
  },
  recommendationDesc: {
    fontSize: 10,
    marginBottom: 8,
    color: colors.onTertiary,
  },
  recommendationBookBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 4,
    borderRadius: 15,
    alignItems: 'center',
  },
  recommendationBookText: {
    color: colors.onPrimary,
    fontSize: 11,
    fontWeight: '600',
  },
});

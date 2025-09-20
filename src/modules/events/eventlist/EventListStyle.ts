import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors, fonts } from '../../../styles';
import { spacing, fontSizes } from '../../../styles/typography';
import { customPaletts } from '../../../styles/paletts';

const { width, height } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 24px margin on each side, 8px gap between cards
const modernCardWidth = (width - 48) / 2;

export const styles = StyleSheet.create({
  // Header Section
  headerGradient: {
    paddingTop: Platform.OS === 'ios' ? 50 : 25,
    paddingBottom: 20,
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
  },
  
  header: {
    marginBottom: 20,
  },
  
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.onPrimary,
    marginBottom: 4,
    fontFamily: fonts.semiBold,
  },
  
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: fonts.medium,
  },
  
  // Search Section
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 48,
  },
  
  searchIcon: {
    marginRight: 12,
  },
  
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.onSurface,
    fontFamily: fonts.medium,
  },
  
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Content Section
  content: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  // Featured Banner
  featuredBanner: {
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 24,
    padding: 20,
    borderRadius: 16,
    backgroundColor: colors.primary,
    elevation: 4,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
  },
  
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.onPrimary,
    marginBottom: 4,
    fontFamily: fonts.semiBold,
  },
  
  bannerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: fonts.medium,
  },
  
  // Category Tabs
  categoryTabs: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 20,
    gap: 12,
  },
  
  activeTabButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 2,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  
  inactiveTabButton: {
    backgroundColor: colors.surface,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.outline,
  },
  
  activeTabText: {
    color: colors.onPrimary,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fonts.semiBold,
  },
  
  inactiveTabText: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  
  // Events Grid
  eventsGrid: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  
  // Event Cards
  eventCard: {
    width: cardWidth,
    backgroundColor: colors.surface,
    borderRadius: 16,
    marginBottom: 16,
    marginRight: 8,
    elevation: 4,
    shadowColor: colors.onBackground,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    overflow: 'hidden',
  },
  
  cardImageGradient: {
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 12,
  },
  
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.onSurface,
    fontFamily: fonts.semiBold,
  },
  
  cardContent: {
    padding: 16,
  },
  
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.onSurface,
    marginBottom: 8,
    fontFamily: fonts.semiBold,
    lineHeight: 20,
  },
  
  eventLocation: {
    fontSize: 12,
    color: colors.onSurfaceVariant,
    marginBottom: 12,
    fontFamily: fonts.medium,
  },
  
  cardImagePlaceholder: {
    height: 120,
    backgroundColor: colors.surfaceVariant,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 12,
  },
  
  modernBookBtn: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    elevation: 2,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 8,
  },
  
  modernBookText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onPrimary,
    fontFamily: fonts.semiBold,
  },

  // Modern Header Styles
  modernHeader: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xl,
    minHeight: 200,
  },

  headerDecoration1: {
    position: 'absolute',
    top: -50,
    right: -30,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  headerDecoration2: {
    position: 'absolute',
    bottom: -40,
    left: -20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },

  modernHeaderContent: {
    flex: 1,
    justifyContent: 'space-between',
  },

  greetingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.xl,
  },

  greetingText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.medium,
    color: 'rgba(255, 255, 255, 0.9)',
  },

  userNameText: {
    fontSize: fontSizes.xxl,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    marginTop: spacing.xs,
  },

  profileButton: {
    padding: spacing.xs,
  },

  profileAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  profileInitial: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
  },

  // Location Container
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginTop: spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    maxWidth: '90%',
  },

  locationText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onPrimary,
    marginLeft: spacing.sm,
    flex: 1,
  },

  modernSearchContainer: {
    marginTop: spacing.lg,
  },

  modernSearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 25,
    paddingHorizontal: spacing.lg,
    height: 56,
    elevation: 8,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },

  modernSearchInput: {
    flex: 1,
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurface,
    marginLeft: spacing.md,
    marginRight: spacing.sm,
  },

  modernFilterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Modern Content
  modernContent: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    paddingTop: spacing.xl,
  },

  // Stats Container
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    gap: spacing.md,
  },

  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: spacing.lg,
    alignItems: 'center',
    elevation: 4,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  statNumber: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
    color: colors.onSurface,
    marginTop: spacing.xs,
  },

  statLabel: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
    marginTop: spacing.xs,
  },

  // Section Headers
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.lg,
  },

  sectionTitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onBackground,
  },

  seeAllText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    color: colors.primary,
  },

  // View Mode Toggle
  viewModeToggle: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceVariant,
    borderRadius: 12,
    padding: 2,
  },

  viewModeButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 1,
  },

  activeViewMode: {
    backgroundColor: colors.primary,
    elevation: 2,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  // Modern Categories
  modernCategoriesContainer: {
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    gap: spacing.md,
  },

  modernCategoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 25,
    gap: spacing.sm,
    elevation: 2,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: colors.outline,
  },

  activeCategoryTab: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    elevation: 4,
    shadowColor: customPaletts.shadows.primary,
    shadowOpacity: 0.3,
  },

  categoryTabText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
  },

  activeCategoryTabText: {
    color: colors.onPrimary,
    fontFamily: fonts.semiBold,
  },

  // Modern Event Cards
  modernEventsGrid: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },

  modernEventCard: {
    width: modernCardWidth,
    backgroundColor: colors.surface,
    borderRadius: 24,
    marginBottom: spacing.lg,
    elevation: 6,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    overflow: 'hidden',
    marginRight: spacing.sm,
  },

  listViewCard: {
    width: width - (spacing.xl * 2),
    flexDirection: 'row',
    height: 140,
    marginRight: 0,
  },

  modernCardImage: {
    height: 140,
    position: 'relative',
  },

  listViewImage: {
    width: 120,
    height: '100%',
  },

  imageGradient: {
    flex: 1,
    justifyContent: 'space-between',
    padding: spacing.md,
  },

  cardOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  favoriteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modernRatingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
    gap: spacing.xs,
  },

  modernRatingText: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.semiBold,
    color: colors.onPrimary,
  },

  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },

  categoryText: {
    fontSize: fontSizes.xxs,
    fontFamily: fonts.semiBold,
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  modernCardContent: {
    padding: spacing.lg,
  },

  listViewContent: {
    flex: 1,
    justifyContent: 'space-between',
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
    gap: spacing.xs,
  },

  eventDate: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: colors.primary,
  },

  modernEventTitle: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onSurface,
    marginBottom: spacing.sm,
    lineHeight: fontSizes.md * 1.3,
  },

  modernLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    gap: spacing.xs,
  },

  modernEventLocation: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
    flex: 1,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceContainer: {
    flex: 1,
  },

  priceLabel: {
    fontSize: fontSizes.xxs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
    textTransform: 'uppercase',
  },

  priceValue: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onSurface,
    marginTop: 2,
  },

  quickBookButton: {
    borderRadius: 20,
    elevation: 3,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  quickBookGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 20,
    gap: spacing.xs,
  },

  quickBookText: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.semiBold,
    color: colors.onPrimary,
  },

  // Load More Button
  loadMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    marginHorizontal: spacing.xl,
    marginVertical: spacing.xl,
    paddingVertical: spacing.lg,
    borderRadius: 16,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.outline,
  },

  loadMoreText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    color: colors.primary,
  },
});

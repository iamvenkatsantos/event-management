import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors, fonts } from '../../../styles';

const { width, height } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 24px margin on each side, 8px gap between cards

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
});

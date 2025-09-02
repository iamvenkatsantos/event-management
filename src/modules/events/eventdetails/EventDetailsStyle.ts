import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../styles';

const { width } = Dimensions.get('window');
const recommendationCardWidth = (width - 60) / 3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Banner Section
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
  
  // Event Info Section
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
  
  // Description Section
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
  
  // Cast and Crew Section
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
  
  // Book Now Button
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
  
  // Recommendations Section
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
    width: recommendationCardWidth,
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

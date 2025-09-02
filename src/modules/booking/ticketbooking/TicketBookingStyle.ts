import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../styles';

const { width } = Dimensions.get('window');
const ticketCardWidth = (width - 50) / 3;

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
  scrollContent: {
    flex: 1,
  },
  
  // Header Section
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
  
  // Tickets Container
  ticketsContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  
  // Ticket Card
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
  
  // Quantity Selection
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
  
  // Bottom Section
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
  summaryLabel: {
    fontSize: 14,
    color: colors.onSurface,
  },
  summaryMainText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onBackground,
  },
  quantityValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onBackground,
  },
  priceRow: {
    alignItems: 'flex-end',
    marginVertical: 15,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.onBackground,
  },
  
  // Pay Now Button
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

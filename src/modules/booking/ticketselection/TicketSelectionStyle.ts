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
    minHeight: 48, // Ensure consistent height
  },
  
  // Book Button
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

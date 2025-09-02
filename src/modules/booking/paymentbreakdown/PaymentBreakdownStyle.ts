import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
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
  totalRow: {
    alignItems: 'flex-end',
    paddingTop: 15,
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

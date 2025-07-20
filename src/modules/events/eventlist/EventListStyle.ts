import { StyleSheet } from "react-native";
import { colors } from "../../../styles";
import { width } from "../../../styles/common";


const cardWidth = (width - 60) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60,
    // paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  searchRow: {
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 45,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  filterBtn: {
    backgroundColor: colors.primary,
    marginLeft: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: 'center',
    height: 45,
  },
  adBanner: {
    height: 100,
    backgroundColor: '#999',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 25,
  },
  activeTab: {
    fontWeight: 'bold',
    color: colors.onBackground,
  },
  inactiveTab: {
    color: colors.onSurfaceDisabled,
  },
  cardGrid: {
    paddingBottom: 20,
  },
  card: {
    width: cardWidth,
    backgroundColor: colors.surface,
    borderRadius: 15,
    margin: 7,
    padding: 10,
    marginHorizontal: 12,
  },
  imagePlaceholder: {
    height: 70,
    backgroundColor: colors.outline,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3,
  },
  rating: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
  desc: {
    fontSize: 11,
    marginBottom: 8,
    color: '#555',
  },
  bookBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
  },
  bookText: {
    color: '#fff',
    fontSize: 13,
  },
});
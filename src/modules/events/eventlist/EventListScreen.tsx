import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { styles } from './EventListStyle';

import useEventListViewModal from './useEventListViewModal';
import AppBarHeader from '../../../components/appbarheader';
import { colors } from '../../../styles';
import { IEventListBO } from '../../../models/events';

const EventListScreen = () => {

  const {
    eventListDummyData, navigation,
    handleEventPress
  } = useEventListViewModal();

  const renderCard = ({ item }: { item: IEventListBO }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleEventPress(item)}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.rating}>{`${item.rating}/10`}</Text>
      <Text style={styles.desc}>{item.address}</Text>
      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.bookText}>Book now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <AppBarHeader navigation={navigation} title='Event Details' showBack showMenu={false} />
      <View style={styles.searchRow}>
        <TextInput placeholder="Search event" style={styles.searchInput} />
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ color: colors.background }}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.adBanner}>
        <Text style={{ color: '#fff' }}>Ad Space</Text>
      </View> */}

      <View style={styles.tabRow}>
        <Text style={styles.activeTab}>Events</Text>
        <Text style={styles.inactiveTab}>Upcoming</Text>
        <Text style={styles.inactiveTab}>Live Events</Text>
        <Text style={styles.inactiveTab}>Online Events</Text>
      </View>

      <FlatList
        data={eventListDummyData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.cardGrid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EventListScreen;
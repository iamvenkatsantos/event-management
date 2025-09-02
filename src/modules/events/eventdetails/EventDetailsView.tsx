import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import { styles } from './EventDetailsStyle';
import useEventDetailsModal from './useEventDetailsModal';
import AppBarHeader from '../../../components/appbarheader';
import { IEventListBO } from '../../../models/events';
import { ICastMember } from '../../../models/booking';

const EventDetailsView = (props: any) => {
  const {
    navigation,
    eventDetails,
    handleBookNow,
    recommendedEvents,
  } = useEventDetailsModal(props);

  const renderRecommendationCard = ({ item }: { item: IEventListBO }) => (
    <TouchableOpacity style={styles.recommendationCard} onPress={() => {}}>
      <View style={styles.recommendationImage} />
      <Text style={styles.recommendationTitle}>{item.name}</Text>
      <Text style={styles.recommendationRating}>{`${item.rating}/10`}</Text>
      <Text style={styles.recommendationDesc} numberOfLines={2}>
        {item.address}
      </Text>
      <TouchableOpacity style={styles.recommendationBookBtn}>
        <Text style={styles.recommendationBookText}>Book now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderCastMember = ({ item }: { item: ICastMember }) => (
    <View style={styles.castMember}>
      <View style={styles.castImage} />
      <Text style={styles.castName}>{item.name}</Text>
    </View>
  );

  if (!eventDetails) {
    return (
      <View style={styles.container}>
        <AppBarHeader navigation={navigation} title="Event Details" showBack showMenu={false} />
        <View style={styles.loadingContainer}>
          <Text>Loading event details...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppBarHeader navigation={navigation} title="Event Details" showBack showMenu={false} />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Event Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.eventBanner} />
          <Text style={styles.bannerText}>Event Banner</Text>
        </View>

        {/* Event Info */}
        <View style={styles.eventInfo}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventName}>{eventDetails.name}</Text>
            <Text style={styles.eventRating}>{`${eventDetails.rating}/10`}</Text>
          </View>
          
          <View style={styles.bookingInfo}>
            <Text style={styles.totalBooking}>Total Booking</Text>
            <Text style={styles.memberCount}>{`${eventDetails.totalMembers} Members`}</Text>
          </View>
        </View>

        {/* Event Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {eventDetails.description}
          </Text>
        </View>

        {/* Cast and Crew */}
        <View style={styles.castContainer}>
          <Text style={styles.castTitle}>Cast and Crew</Text>
          <FlatList
            data={eventDetails.castAndCrew}
            renderItem={renderCastMember}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.castList}
          />
        </View>

        {/* Book Now Button */}
        <TouchableOpacity style={styles.bookNowButton} onPress={handleBookNow}>
          <Text style={styles.bookNowText}>Book now</Text>
        </TouchableOpacity>

        {/* Recommendations */}
        <View style={styles.recommendationsContainer}>
          <Text style={styles.recommendationsTitle}>Recommendation</Text>
          <FlatList
            data={recommendedEvents}
            renderItem={renderRecommendationCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recommendationsList}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EventDetailsView;

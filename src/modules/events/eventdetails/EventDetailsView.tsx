import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './EventDetailsStyle';
import useEventDetailsModal from './useEventDetailsModal';
import AppBarHeader from '../../../components/appbarheader';
import { IEventListBO } from '../../../models/events';
import { ICastMember } from '../../../models/booking';
import { colors } from '../../../styles';
import { customPaletts } from '../../../styles/paletts';


const EventDetailsView = (props: any) => {
  const {
    navigation,
    eventDetails,
    handleBookNow,
    recommendedEvents,
  } = useEventDetailsModal(props);

  const renderRecommendationCard = ({ item }: { item: IEventListBO }) => (
    <TouchableOpacity style={styles.modernRecommendationCard} onPress={() => { }}>
      <LinearGradient
        colors={customPaletts.gradients.tertiary}
        style={styles.recommendationImageGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Icon name="event" size={32} color="white" />
      </LinearGradient>

      <View style={styles.recommendationContent}>
        <View style={styles.recommendationHeader}>
          <Text style={styles.modernRecommendationTitle} numberOfLines={1}>
            {item.name}
          </Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={14} color={customPaletts.warning} />
            <Text style={styles.modernRecommendationRating}>{item.rating}</Text>
          </View>
        </View>

        <Text style={styles.modernRecommendationDesc} numberOfLines={2}>
          {item.address}
        </Text>

        <TouchableOpacity style={styles.modernRecommendationBookBtn}>
          <LinearGradient
            colors={customPaletts.gradients.primary}
            style={styles.recommendationBookGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.modernRecommendationBookText}>Book</Text>
            <Icon name="arrow-forward" size={14} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderCastMember = ({ item }: { item: ICastMember }) => (
    <View style={styles.modernCastMember}>
      <LinearGradient
        colors={customPaletts.gradients.secondary}
        style={styles.modernCastImage}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Icon name="person" size={24} color="white" />
      </LinearGradient>
      <Text style={styles.modernCastName} numberOfLines={1}>{item.name}</Text>
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
    <View style={styles.modernContainer}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* Modern Background with Gradient */}
      <View
        style={styles.gradientBackground}
      >
        {/* Floating Decorative Elements */}
        <View style={[styles.floatingElement, styles.floatingElement1]} />
        <View style={[styles.floatingElement, styles.floatingElement2]} />
        <View style={[styles.floatingElement, styles.floatingElement3]} />

        <AppBarHeader navigation={navigation} title="Event Details" showBack showMenu={false} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Modern Event Banner */}
          <View style={styles.modernBannerContainer}>
            <LinearGradient
              colors={customPaletts.gradients.primary}
              style={styles.modernEventBanner}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Icon name="event" size={48} color="white" style={styles.bannerIcon} />
              <View style={styles.bannerOverlay}>
                <Text style={styles.modernBannerText}>Featured Event</Text>
              </View>
            </LinearGradient>
          </View>

          {/* Modern Event Info Card */}
          <View style={styles.modernEventInfoCard}>
            <LinearGradient
              colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.85)']}
              style={styles.eventInfoGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.modernEventHeader}>
                <View style={styles.titleSection}>
                  <Text style={styles.modernEventName}>{eventDetails.name}</Text>
                  <View style={styles.modernRatingContainer}>
                    <Icon name="star" size={18} color={customPaletts.warning} />
                    <Text style={styles.modernEventRating}>{eventDetails.rating}</Text>
                    <Text style={styles.ratingLabel}>/10</Text>
                  </View>
                </View>
              </View>

              <View style={styles.modernBookingInfo}>
                <View style={styles.statItem}>
                  <Icon name="people" size={20} color={colors.primary} />
                  <Text style={styles.statLabel}>Total Booking</Text>
                  <Text style={styles.statValue}>{eventDetails.totalMembers} Members</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Icon name="location-on" size={20} color={customPaletts.info} />
                  <Text style={styles.statLabel}>Venue</Text>
                  <Text style={styles.statValue} numberOfLines={1}>{eventDetails.address}</Text>
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* Modern Description Card */}
          <View style={styles.modernDescriptionCard}>
            <LinearGradient
              colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.85)']}
              style={styles.descriptionGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.descriptionHeader}>
                <Icon name="description" size={20} color={colors.primary} />
                <Text style={styles.modernDescriptionTitle}>About Event</Text>
              </View>
              <Text style={styles.modernDescription}>
                {eventDetails.description}
              </Text>
            </LinearGradient>
          </View>

          {/* Modern Cast and Crew Section */}
          <View style={styles.modernCastContainer}>
            <View style={styles.sectionHeader}>
              <Icon name="group" size={20} color={colors.primary} />
              <Text style={styles.modernCastTitle}>Cast & Crew</Text>
            </View>
            <FlatList
              data={eventDetails.castAndCrew}
              renderItem={renderCastMember}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.modernCastList}
            />
          </View>

          {/* Modern Book Now Button */}
          <TouchableOpacity style={styles.modernBookNowButton} onPress={handleBookNow}>
            <LinearGradient
              colors={customPaletts.gradients.primary}
              style={styles.bookNowGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.modernBookNowText}>Book Now</Text>
              <Icon name="arrow-forward" size={20} color="white" style={styles.bookNowIcon} />
            </LinearGradient>
          </TouchableOpacity>

          {/* Modern Recommendations Section */}
          <View style={styles.modernRecommendationsContainer}>
            <View style={styles.sectionHeader}>
              <Icon name="recommend" size={20} color={colors.primary} />
              <Text style={styles.modernRecommendationsTitle}>You May Also Like</Text>
            </View>
            <FlatList
              data={recommendedEvents}
              renderItem={renderRecommendationCard}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.modernRecommendationsList}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default EventDetailsView;

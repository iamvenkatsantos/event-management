import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    <TouchableOpacity style={styles.eventCard} onPress={() => handleEventPress(item)}>
      <View style={styles.cardImagePlaceholder}>
        <View style={styles.ratingBadge}>
          <Icon name="star" size={12} color={colors.primary} />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      
      <View style={styles.cardContent}>
        <Text style={styles.eventTitle} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.eventLocation} numberOfLines={1}>
          <Icon name="location-on" size={14} color={colors.onSurfaceVariant} />
          {item.address}
        </Text>
        
        <TouchableOpacity style={styles.modernBookBtn}>
          <Text style={styles.modernBookText}>{translate('book_now')}</Text>
          <Icon name="arrow-forward" size={16} color={colors.onPrimary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.headerGradient}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{translate('discover_events')}</Text>
          <Text style={styles.headerSubtitle}>{translate('find_events_subtitle')}</Text>
        </View>
        
        {/* Search Section */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Icon name="search" size={20} color={colors.onSurfaceVariant} style={styles.searchIcon} />
            <TextInput 
              placeholder={translate('search_events_placeholder')} 
              style={styles.searchInput}
              placeholderTextColor={colors.onSurfaceVariant}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="tune" size={20} color={colors.onSecondary} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        {/* Featured Banner */}
        <View style={styles.featuredBanner}>
          <Text style={styles.bannerTitle}>{translate('featured_events')}</Text>
          <Text style={styles.bannerSubtitle}>{translate('featured_events_subtitle')}</Text>
        </View>

        {/* Category Tabs */}
        <View style={styles.categoryTabs}>
          <TouchableOpacity style={styles.activeTabButton}>
            <Text style={styles.activeTabText}>{translate('all_events')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTabButton}>
            <Text style={styles.inactiveTabText}>{translate('upcoming')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTabButton}>
            <Text style={styles.inactiveTabText}>{translate('live_events')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTabButton}>
            <Text style={styles.inactiveTabText}>{translate('online_events')}</Text>
          </TouchableOpacity>
        </View>

        {/* Events Grid */}
        <FlatList
          data={eventListDummyData}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.eventsGrid}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default EventListScreen;
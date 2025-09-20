import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './EventListStyle';

import useEventListViewModal from './useEventListViewModal';
import AppBarHeader from '../../../components/appbarheader';
import { colors } from '../../../styles';
import { customPaletts } from '../../../styles/paletts';
import { IEventListBO } from '../../../models/events';

const EventListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const {
    eventListDummyData, 
    navigation,
    handleEventPress,
    currentLocation,
    locationLoading,
    locationError,
    permissionGranted,
    handleLocationRefresh,
    getLocationDisplayText,
  } = useEventListViewModal();

  const categories = [
    { id: 'all', title: 'All Events', icon: 'apps' },
    { id: 'upcoming', title: 'Upcoming', icon: 'schedule' },
    { id: 'live', title: 'Live Events', icon: 'live-tv' },
    { id: 'online', title: 'Online Events', icon: 'computer' },
  ];

  const renderModernEventCard = ({ item, index }: { item: IEventListBO, index: number }) => (
    <Animated.View 
      style={[
        styles.modernEventCard,
        viewMode === 'list' && styles.listViewCard,
        { transform: [{ scale: 1 }] }
      ]}
    >
      <TouchableOpacity onPress={() => handleEventPress(item)} activeOpacity={0.9}>
        {/* Card Image with Gradient Overlay */}
        <View style={[styles.modernCardImage, viewMode === 'list' && styles.listViewImage]}>
          <LinearGradient
            colors={customPaletts.gradients.primary}
            style={styles.imageGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.cardOverlay}>
              {/* Favorite Heart */}
              <TouchableOpacity style={styles.favoriteButton}>
                <Icon name="favorite-outline" size={20} color="white" />
              </TouchableOpacity>
              
              {/* Rating Badge */}
              <View style={styles.modernRatingBadge}>
                <Icon name="star" size={14} color={customPaletts.warning} />
                <Text style={styles.modernRatingText}>{item.rating}</Text>
              </View>
            </View>
            
            {/* Category Badge */}
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>Music</Text>
            </View>
          </LinearGradient>
        </View>
        
        {/* Card Content */}
        <View style={[styles.modernCardContent, viewMode === 'list' && styles.listViewContent]}>
          {/* Event Date */}
          <View style={styles.dateContainer}>
            <Icon name="event" size={16} color={colors.primary} />
            <Text style={styles.eventDate}>Dec 25, 2024</Text>
          </View>
          
          {/* Event Title */}
          <Text style={styles.modernEventTitle} numberOfLines={2}>
            {item.name}
          </Text>
          
          {/* Location */}
          <View style={styles.modernLocationContainer}>
            <Icon name="place" size={16} color={colors.onSurfaceVariant} />
            <Text style={styles.modernEventLocation} numberOfLines={1}>
              {item.address}
            </Text>
          </View>
          
          {/* Price and Book Button */}
          <View style={styles.cardFooter}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>From</Text>
              <Text style={styles.priceValue}>$25.00</Text>
            </View>
            
            <TouchableOpacity style={styles.quickBookButton}>
              <LinearGradient
                colors={customPaletts.gradients.primary}
                style={styles.quickBookGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.quickBookText}>Book</Text>
                <Icon name="arrow-forward" size={14} color="white" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  const renderCategoryTab = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={[
        styles.modernCategoryTab,
        selectedCategory === item.id && styles.activeCategoryTab
      ]}
      onPress={() => setSelectedCategory(item.id)}
    >
      <Icon 
        name={item.icon} 
        size={18} 
        color={selectedCategory === item.id ? colors.onPrimary : colors.onSurfaceVariant} 
      />
      <Text style={[
        styles.categoryTabText,
        selectedCategory === item.id && styles.activeCategoryTabText
      ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Modern Gradient Header */}
      <LinearGradient
        colors={customPaletts.gradients.primary}
        style={styles.modernHeader}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Floating Decorative Elements */}
        <View style={styles.headerDecoration1} />
        <View style={styles.headerDecoration2} />
        
        <View style={styles.modernHeaderContent}>
          {/* Greeting and Profile */}
          <View style={styles.greetingSection}>
            <View style={{ flex: 1 }}>
              <Text style={styles.greetingText}>Good evening,</Text>
              <Text style={styles.userNameText}>Sarah! 👋</Text>
              
              {/* Location Display */}
              <TouchableOpacity 
                style={styles.locationContainer} 
                onPress={handleLocationRefresh}
                activeOpacity={0.7}
              >
                <Icon 
                  name={locationLoading ? "refresh" : "location-on"} 
                  size={16} 
                  color={colors.onPrimary} 
                  style={locationLoading ? { transform: [{ rotate: '360deg' }] } : {}}
                />
                <Text style={styles.locationText} numberOfLines={1}>
                  {getLocationDisplayText()}
                </Text>
                {!locationLoading && !currentLocation && (
                  <Icon name="arrow-forward-ios" size={12} color={colors.onPrimary} />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.profileButton}>
              <View style={styles.profileAvatar}>
                <Text style={styles.profileInitial}>S</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          {/* Modern Search Bar */}
          <View style={styles.modernSearchContainer}>
            <View style={styles.modernSearchBar}>
              <Icon name="search" size={22} color={colors.onSurfaceVariant} />
              <TextInput 
                placeholder="Search events, venues..." 
                style={styles.modernSearchInput}
                placeholderTextColor={colors.onSurfaceVariant}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              <TouchableOpacity style={styles.modernFilterButton}>
                <Icon name="tune" size={20} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.modernContent} showsVerticalScrollIndicator={false}>
        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Icon name="event" size={24} color={colors.primary} />
            <Text style={styles.statNumber}>124</Text>
            <Text style={styles.statLabel}>Events</Text>
          </View>
          <View style={styles.statCard}>
            <Icon name="location-on" size={24} color={customPaletts.tertiary} />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Cities</Text>
          </View>
          <View style={styles.statCard}>
            <Icon name="people" size={24} color={customPaletts.success} />
            <Text style={styles.statNumber}>2.1k</Text>
            <Text style={styles.statLabel}>Attendees</Text>
          </View>
        </View>
        
        {/* Modern Category Tabs */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.viewModeToggle}>
            <TouchableOpacity 
              style={[styles.viewModeButton, viewMode === 'grid' && styles.activeViewMode]}
              onPress={() => setViewMode('grid')}
            >
              <Icon name="grid-view" size={18} color={viewMode === 'grid' ? colors.onPrimary : colors.onSurfaceVariant} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.viewModeButton, viewMode === 'list' && styles.activeViewMode]}
              onPress={() => setViewMode('list')}
            >
              <Icon name="view-list" size={18} color={viewMode === 'list' ? colors.onPrimary : colors.onSurfaceVariant} />
            </TouchableOpacity>
          </View>
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.modernCategoriesContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={category.id}
              style={[
                styles.modernCategoryTab,
                selectedCategory === category.id && styles.activeCategoryTab
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Icon 
                name={category.icon} 
                size={20} 
                color={selectedCategory === category.id ? colors.onPrimary : colors.onSurfaceVariant} 
              />
              <Text style={[
                styles.categoryTabText,
                selectedCategory === category.id && styles.activeCategoryTabText
              ]}>
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Events Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Events</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Events Grid/List */}
        <FlatList
          data={eventListDummyData}
          renderItem={renderModernEventCard}
          keyExtractor={(item) => item.id}
          numColumns={viewMode === 'grid' ? 2 : 1}
          key={viewMode} // Force re-render when view mode changes
          contentContainerStyle={styles.modernEventsGrid}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
        
        {/* Load More Button */}
        <TouchableOpacity style={styles.loadMoreButton}>
          <Text style={styles.loadMoreText}>Load More Events</Text>
          <Icon name="expand-more" size={20} color={colors.primary} />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default EventListScreen;
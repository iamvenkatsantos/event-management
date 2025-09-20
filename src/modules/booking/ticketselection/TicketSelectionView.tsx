import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './TicketSelectionStyle';
import useTicketSelectionModal from './useTicketSelectionModal';
import AppBarHeader from '../../../components/appbarheader';
import { ITicketTier } from '../../../models/booking';
import { colors } from '../../../styles';
import { customPaletts } from '../../../styles/paletts';

const { width, height } = Dimensions.get('window');

const TicketSelectionView = (props: any) => {
  const {
    navigation,
    eventDetails,
    handleTicketSelect,
    formatDateTime,
  } = useTicketSelectionModal(props);

  const renderTicketTier = (tier: ITicketTier, index: number) => (
    <View key={tier.id} style={styles.modernTicketCard}>
      <LinearGradient
        colors={customPaletts.gradients.surface}
        style={styles.ticketCardGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Ticket Icon */}
        <View style={styles.ticketIconContainer}>
          <LinearGradient
            colors={customPaletts.gradients.primary}
            style={styles.ticketIconGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Icon 
              name="ticket-confirmation" 
              size={32} 
              color={colors.onPrimary}
            />
          </LinearGradient>
        </View>
        
        {/* Ticket Details */}
        <Text style={styles.modernTicketTierName}>{tier.name}</Text>
        
        <Text style={styles.modernTicketDescription} numberOfLines={2}>
          {tier.description || 'Premium ticket experience'}
        </Text>
        
        {/* Price Badge */}
        <View style={styles.priceBadge}>
          <LinearGradient
            colors={customPaletts.gradients.secondary}
            style={styles.priceBadgeGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.priceText}>£{tier.price || '25.00'}</Text>
          </LinearGradient>
        </View>
        
        {/* Book Button */}
        <TouchableOpacity 
          style={styles.modernBookButton} 
          onPress={() => handleTicketSelect(tier)}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={customPaletts.gradients.primary}
            style={styles.bookButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Icon name="cart-plus" size={18} color={colors.onPrimary} />
            <Text style={styles.modernBookButtonText}>Select</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
      
      {/* Floating Elements */}
      <View style={[styles.ticketFloatingElement, { opacity: 0.1 * (index + 1) }]} />
    </View>
  );

  if (!eventDetails) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={customPaletts.gradients.primary}
          style={styles.gradientBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <AppBarHeader navigation={navigation} title="Select Tickets" showBack showMenu={false} />
          <View style={styles.modernLoadingContainer}>
            <Icon name="loading" size={48} color={colors.onPrimary} />
            <Text style={styles.loadingText}>Loading tickets...</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={customPaletts.gradients.primary}
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Floating Background Elements */}
        <View style={styles.floatingCircle1} />
        <View style={styles.floatingCircle2} />
        <View style={styles.floatingCircle3} />
        
        <AppBarHeader 
          navigation={navigation} 
          title="Select Tickets"
          showBack 
          showMenu={false} 
        />
        
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Choose Your Experience</Text>
            <Text style={styles.heroSubtitle}>{eventDetails.name}</Text>
            <View style={styles.eventTimeContainer}>
              <Icon name="calendar-clock" size={16} color={colors.onPrimary} />
              <Text style={styles.heroEventTime}>{formatDateTime()}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      
      {/* Modern Content Section */}
      <View style={styles.modernContentContainer}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Section Header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Available Tickets</Text>
            <Text style={styles.sectionSubtitle}>Select the perfect ticket for your experience</Text>
          </View>

          {/* Modern Ticket Grid */}
          <View style={styles.modernTicketsContainer}>
            {eventDetails.ticketTiers.map(renderTicketTier)}
          </View>
          
          {/* Bottom Spacing */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>
    </View>
  );
};

export default TicketSelectionView;

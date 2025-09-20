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

import { styles } from './TicketBookingStyle';
import useTicketBookingModal from './useTicketBookingModal';
import AppBarHeader from '../../../components/appbarheader';
import { ITicketTier } from '../../../models/booking';
import { colors } from '../../../styles';
import { customPaletts } from '../../../styles/paletts';

const { width, height } = Dimensions.get('window');

const TicketBookingView = (props: any) => {
  const {
    navigation,
    eventDetails,
    selectedTiers,
    quantities,
    totalAmount,
    handleQuantityChange,
    handlePayNow,
    formatDateTime,
  } = useTicketBookingModal(props);

  const renderTicketTier = (tier: ITicketTier, index: number) => {
    const quantity = quantities[tier.id] || 0;
    
    return (
      <View key={tier.id} style={styles.modernTicketCard}>
        <LinearGradient
          colors={customPaletts.gradients.surface}
          style={styles.ticketCardGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Ticket Header */}
          <View style={styles.ticketHeader}>
            <View style={styles.ticketIconContainer}>
              <LinearGradient
                colors={customPaletts.gradients.primary}
                style={styles.ticketIconGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Icon 
                  name="ticket-confirmation" 
                  size={20} 
                  color={colors.onPrimary}
                />
              </LinearGradient>
            </View>
            
            <View style={styles.ticketInfo}>
              <Text style={styles.modernTicketTierName}>{tier.name}</Text>
              <Text style={styles.modernTicketDescription} numberOfLines={1}>
                {tier.description || 'Premium experience'}
              </Text>
            </View>
            
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
          </View>
          
          {/* Quantity Selection */}
          <View style={styles.modernQuantityContainer}>
            <Text style={styles.quantityLabel}>Quantity</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity 
                style={[
                  styles.modernQuantityButton,
                  quantity <= 0 && styles.disabledButton
                ]}
                onPress={() => handleQuantityChange(tier.id, Math.max(0, quantity - 1))}
                disabled={quantity <= 0}
              >
                <LinearGradient
                  colors={quantity <= 0 ? ['#E0E0E0', '#E0E0E0'] : customPaletts.gradients.primary}
                  style={styles.quantityButtonGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Icon 
                    name="minus" 
                    size={16} 
                    color={quantity <= 0 ? colors.onSurfaceVariant : colors.onPrimary}
                  />
                </LinearGradient>
              </TouchableOpacity>
              
              <View style={styles.quantityDisplay}>
                <Text style={styles.modernQuantityText}>{quantity}</Text>
              </View>
              
              <TouchableOpacity 
                style={styles.modernQuantityButton}
                onPress={() => handleQuantityChange(tier.id, quantity + 1)}
              >
                <LinearGradient
                  colors={customPaletts.gradients.primary}
                  style={styles.quantityButtonGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Icon 
                    name="plus" 
                    size={16} 
                    color={colors.onPrimary}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        
        {/* Floating Element */}
        <View style={[styles.ticketFloatingElement, { opacity: 0.15 + (index * 0.05) }]} />
      </View>
    );
  };

  if (!eventDetails) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={customPaletts.gradients.primary}
          style={styles.gradientBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <AppBarHeader navigation={navigation} title="Book Tickets" showBack showMenu={false} />
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
          title="Book Tickets"
          showBack 
          showMenu={false} 
        />
        
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Complete Your Booking</Text>
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
            <Text style={styles.sectionTitle}>Select Quantities</Text>
            <Text style={styles.sectionSubtitle}>Choose how many tickets you'd like</Text>
          </View>

          {/* Modern Tickets Container */}
          <View style={styles.modernTicketsContainer}>
            {selectedTiers.map(renderTicketTier)}
          </View>
          
          {/* Bottom Spacing for the fixed summary */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>

      {/* Modern Bottom Section with Summary and Pay Button */}
      <View style={styles.modernBottomSection}>
        <LinearGradient
          colors={customPaletts.gradients.surface}
          style={styles.bottomSectionGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Summary Header */}
          <View style={styles.summaryHeader}>
            <Icon name="receipt" size={24} color={colors.primary} />
            <Text style={styles.summaryHeaderText}>Order Summary</Text>
          </View>
          
          {/* Event Details Row */}
          <View style={styles.modernSummaryRow}>
            <View style={styles.summaryRowLeft}>
              <Text style={styles.summaryLabel}>Event</Text>
              <Text style={styles.summaryMainText}>{eventDetails.name}</Text>
            </View>
            <View style={styles.summaryRowRight}>
              <Text style={styles.summaryLabel}>Total Tickets</Text>
              <Text style={styles.modernQuantityValue}>
                {Object.values(quantities).reduce((sum, qty) => sum + qty, 0)}
              </Text>
            </View>
          </View>
          
          {/* Price Section */}
          <View style={styles.modernPriceSection}>
            <View style={styles.priceRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.modernTotalPrice}>£{totalAmount}</Text>
            </View>
          </View>
          
          {/* Pay Now Button */}
          <TouchableOpacity 
            style={styles.modernPayNowButton} 
            onPress={handlePayNow}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={customPaletts.gradients.primary}
              style={styles.payNowButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Icon name="credit-card" size={20} color={colors.onPrimary} />
              <Text style={styles.modernPayNowText}>Pay Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default TicketBookingView;

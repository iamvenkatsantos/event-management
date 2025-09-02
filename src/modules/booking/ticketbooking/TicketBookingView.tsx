import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { styles } from './TicketBookingStyle';
import useTicketBookingModal from './useTicketBookingModal';
import AppBarHeader from '../../../components/appbarheader';
import { ITicketTier } from '../../../models/booking';

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

  const renderTicketTier = (tier: ITicketTier) => {
    const quantity = quantities[tier.id] || 0;
    
    return (
      <View key={tier.id} style={styles.ticketCard}>
        <View style={styles.ticketImagePlaceholder} />
        
        <Text style={styles.ticketTierName}>{tier.name}</Text>
        
        <Text style={styles.ticketDescription} numberOfLines={3}>
          {tier.description}
        </Text>
        
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => handleQuantityChange(tier.id, quantity - 1)}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          
          <Text style={styles.quantityText}>{quantity}</Text>
          
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => handleQuantityChange(tier.id, quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (!eventDetails) {
    return (
      <View style={styles.container}>
        <AppBarHeader navigation={navigation} title="Book Tickets" showBack showMenu={false} />
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppBarHeader 
        navigation={navigation} 
        title={eventDetails.name}
        showBack 
        showMenu={false} 
      />
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContent}>
        {/* Header with Event name and Time */}
        <View style={styles.headerContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.eventNameText}>{eventDetails.name}</Text>
            <Text style={styles.eventTimeText}>{formatDateTime()}</Text>
          </View>
        </View>

        {/* Ticket Tiers with Quantity Selection */}
        <View style={styles.ticketsContainer}>
          {selectedTiers.map(renderTicketTier)}
        </View>
      </ScrollView>

      {/* Bottom Section with Summary and Pay Button */}
      <View style={styles.bottomSection}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Time and Date</Text>
          <Text style={styles.summaryLabel}>Time and Date</Text>
        </View>
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryMainText}>
            {selectedTiers.find(tier => quantities[tier.id] > 0)?.name || 'Premium'}
          </Text>
          <Text style={styles.quantityValue}>
            {Object.values(quantities).reduce((sum, qty) => sum + qty, 0)}
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.totalPrice}>${totalAmount}</Text>
        </View>

        <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicketBookingView;

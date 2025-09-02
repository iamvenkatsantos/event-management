import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { styles } from './TicketSelectionStyle';
import useTicketSelectionModal from './useTicketSelectionModal';
import AppBarHeader from '../../../components/appbarheader';
import { ITicketTier } from '../../../models/booking';

const TicketSelectionView = (props: any) => {
  const {
    navigation,
    eventDetails,
    handleTicketSelect,
    formatDateTime,
  } = useTicketSelectionModal(props);

  const renderTicketTier = (tier: ITicketTier) => (
    <View key={tier.id} style={styles.ticketCard}>
      <View style={styles.ticketImagePlaceholder} />
      
      <Text style={styles.ticketTierName}>{tier.name}</Text>
      
      <Text style={styles.ticketDescription} numberOfLines={3}>
        {tier.description}
      </Text>
      
      <TouchableOpacity 
        style={styles.bookButton} 
        onPress={() => handleTicketSelect(tier)}
      >
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );

  if (!eventDetails) {
    return (
      <View style={styles.container}>
        <AppBarHeader navigation={navigation} title="Select Tickets" showBack showMenu={false} />
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
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Event name and Time */}
        <View style={styles.headerContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.eventNameText}>{eventDetails.name}</Text>
            <Text style={styles.eventTimeText}>{formatDateTime()}</Text>
          </View>
        </View>

        {/* Ticket Tiers */}
        <View style={styles.ticketsContainer}>
          {eventDetails.ticketTiers.map(renderTicketTier)}
        </View>
      </ScrollView>
    </View>
  );
};

export default TicketSelectionView;

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { styles } from './PaymentBreakdownStyle';
import usePaymentBreakdownModal from './usePaymentBreakdownModal';
import AppBarHeader from '../../../components/appbarheader';

const PaymentBreakdownView = (props: any) => {
  const {
    navigation,
    eventDetails,
    paymentBreakdown,
    handlePayNow,
    formatDateTime,
  } = usePaymentBreakdownModal(props);

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

        {/* Payment Breakdown */}
        <View style={styles.breakdownContainer}>
          {paymentBreakdown.items.map((item, index) => (
            <View key={index} style={styles.breakdownRow}>
              <Text style={styles.breakdownLabel}>{item.ticketTier.name}</Text>
              <Text style={styles.breakdownValue}>{item.quantity}</Text>
            </View>
          ))}
          
          <View style={styles.divider} />
          
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>GST</Text>
            <Text style={styles.breakdownValue}>{paymentBreakdown.gst}</Text>
          </View>
          
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>SGST</Text>
            <Text style={styles.breakdownValue}>{paymentBreakdown.sgst}</Text>
          </View>
          
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>Convenience Fee</Text>
            <Text style={styles.breakdownValue}>{paymentBreakdown.convenienceFee}</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.totalRow}>
            <Text style={styles.totalPrice}>${paymentBreakdown.total}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Pay Now Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentBreakdownView;

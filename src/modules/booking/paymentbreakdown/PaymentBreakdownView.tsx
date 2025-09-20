import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './PaymentBreakdownStyle';
import usePaymentBreakdownModal from './usePaymentBreakdownModal';
import AppBarHeader from '../../../components/appbarheader';
import GuestInfoForm from '../../../components/GuestInfoForm';
import { colors } from '../../../styles';
import { customPaletts } from '../../../styles/paletts';

const { width, height } = Dimensions.get('window');

const PaymentBreakdownView = (props: any) => {
  const {
    navigation,
    eventDetails,
    paymentBreakdown,
    handlePayNow,
    formatDateTime,
    isGuestUser,
    needsGuestInfo,
    showGuestForm,
    setShowGuestForm,
    guestInfoLoading,
    handleGuestInfoSubmit,
  } = usePaymentBreakdownModal(props);

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
          title="Payment Breakdown"
          showBack 
          showMenu={false} 
        />
        
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <View style={styles.heroIconContainer}>
              <LinearGradient
                colors={customPaletts.gradients.secondary}
                style={styles.heroIconGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Icon name="receipt" size={32} color={colors.onSecondary} />
              </LinearGradient>
            </View>
            <Text style={styles.heroTitle}>Payment Summary</Text>
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
          {/* Ticket Items Section */}
          <View style={styles.sectionHeader}>
            <Icon name="ticket-confirmation" size={20} color={colors.primary} />
            <Text style={styles.sectionTitle}>Ticket Details</Text>
          </View>
          
          <View style={styles.modernBreakdownContainer}>
            <LinearGradient
              colors={customPaletts.gradients.surface}
              style={styles.breakdownCardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              {paymentBreakdown.items.map((item, index) => (
                <View key={index} style={styles.modernBreakdownRow}>
                  <View style={styles.itemInfo}>
                    <Text style={styles.modernBreakdownLabel}>{item.ticketTier.name}</Text>
                    <Text style={styles.itemSubtext}>Quantity: {item.quantity}</Text>
                  </View>
                  <View style={styles.itemPrice}>
                    <Text style={styles.modernBreakdownValue}>£{(item.ticketTier.price * item.quantity).toFixed(2)}</Text>
                  </View>
                </View>
              ))}
            </LinearGradient>
          </View>
          
          {/* Fees Section */}
          <View style={styles.sectionHeader}>
            <Icon name="calculator" size={20} color={colors.primary} />
            <Text style={styles.sectionTitle}>Fees & Taxes</Text>
          </View>
          
          <View style={styles.modernBreakdownContainer}>
            <LinearGradient
              colors={customPaletts.gradients.surface}
              style={styles.breakdownCardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.modernBreakdownRow}>
                <View style={styles.itemInfo}>
                  <Text style={styles.modernBreakdownLabel}>GST</Text>
                  <Text style={styles.itemSubtext}>Goods & Services Tax</Text>
                </View>
                <Text style={styles.modernBreakdownValue}>£{paymentBreakdown.gst}</Text>
              </View>
              
              <View style={styles.modernBreakdownRow}>
                <View style={styles.itemInfo}>
                  <Text style={styles.modernBreakdownLabel}>SGST</Text>
                  <Text style={styles.itemSubtext}>State Goods & Services Tax</Text>
                </View>
                <Text style={styles.modernBreakdownValue}>£{paymentBreakdown.sgst}</Text>
              </View>
              
              <View style={styles.modernBreakdownRow}>
                <View style={styles.itemInfo}>
                  <Text style={styles.modernBreakdownLabel}>Convenience Fee</Text>
                  <Text style={styles.itemSubtext}>Processing & Service</Text>
                </View>
                <Text style={styles.modernBreakdownValue}>£{paymentBreakdown.convenienceFee}</Text>
              </View>
            </LinearGradient>
          </View>
          
          {/* Total Section */}
          <View style={styles.modernTotalSection}>
            <LinearGradient
              colors={customPaletts.gradients.primary}
              style={styles.totalCardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.totalRow}>
                <View style={styles.totalInfo}>
                  <Text style={styles.totalLabel}>Total Amount</Text>
                  <Text style={styles.totalSubtext}>All inclusive</Text>
                </View>
                <Text style={styles.modernTotalPrice}>£{paymentBreakdown.total}</Text>
              </View>
            </LinearGradient>
          </View>
          
          {/* Bottom Spacing */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>

      {/* Modern Bottom Section with Pay Button */}
      <View style={styles.modernBottomSection}>
        <LinearGradient
          colors={customPaletts.gradients.surface}
          style={styles.bottomSectionGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Payment Methods Preview */}
          <View style={styles.paymentMethodsPreview}>
            <Text style={styles.paymentMethodsLabel}>Secure Payment</Text>
            <View style={styles.paymentIconsRow}>
              <Icon name="credit-card" size={20} color={colors.primary} />
              <Icon name="google-pay" size={20} color={colors.primary} />
              <Icon name="apple-pay" size={20} color={colors.primary} />
              <Icon name="account-balance" size={20} color={colors.primary} />
            </View>
          </View>
          
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
              <Icon name="lock" size={20} color={colors.onPrimary} />
              <Text style={styles.modernPayNowText}>Proceed to Payment</Text>
              <Text style={styles.payNowAmount}>£{paymentBreakdown.total}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Guest Info Modal */}
      <Modal
        visible={showGuestForm}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowGuestForm(false)}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 16, maxHeight: '80%' }}>
            {/* Modal Header */}
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: 20, 
              borderBottomWidth: 1, 
              borderBottomColor: '#F0F0F0' 
            }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text }}>Complete Your Booking</Text>
              <TouchableOpacity onPress={() => setShowGuestForm(false)}>
                <Icon name="close" size={24} color={colors.text} />
              </TouchableOpacity>
            </View>
            
            {/* Guest Form */}
            <ScrollView style={{ maxHeight: '100%' }}>
              <GuestInfoForm 
                onSubmit={handleGuestInfoSubmit} 
                loading={guestInfoLoading}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PaymentBreakdownView;

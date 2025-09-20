import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppBarHeader from '../../../components/appbarheader';
import { NavigationProp } from '../../../navigation/main';
import { colors, fonts } from '../../../styles';
import { spacing, fontSizes } from '../../../styles/typography';
import { customPaletts } from '../../../styles/paletts';

const { width, height } = Dimensions.get('window');

const BookingSummaryView = () => {
  const navigation: NavigationProp<'BookingSummary'> = useNavigation();

  // Mock data - in real app, this would come from route params or state management
  const bookingData = {
    eventName: "Summer Music Festival 2024",
    eventDate: "July 15, 2024",
    eventTime: "7:00 PM - 11:00 PM",
    venue: "Central Park Amphitheater",
    tickets: [
      { type: "Premium", quantity: 1, price: 75 },
      { type: "Gold", quantity: 1, price: 50 },
      { type: "Standard", quantity: 2, price: 25 }
    ],
    totalAmount: 175,
    bookingId: "BK#2024-7890"
  };

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
        <View style={styles.floatingCircle4} />
        
        <AppBarHeader navigation={navigation} title="Booking Confirmed" showBack showMenu={false} />
        
        {/* Success Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            {/* Success Icon */}
            <View style={styles.successIconContainer}>
              <LinearGradient
                colors={customPaletts.gradients.secondary}
                style={styles.successIconGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Icon name="check-circle" size={48} color={colors.onSecondary} />
              </LinearGradient>
            </View>
            
            <Text style={styles.heroTitle}>Booking Confirmed!</Text>
            <Text style={styles.heroSubtitle}>Your tickets are ready</Text>
            <Text style={styles.bookingId}>Booking ID: {bookingData.bookingId}</Text>
          </View>
        </View>
      </LinearGradient>
      
      {/* Modern Content Section */}
      <View style={styles.modernContentContainer}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Event Details Card */}
          <View style={styles.modernEventCard}>
            <LinearGradient
              colors={customPaletts.gradients.surface}
              style={styles.eventCardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              {/* Event Image Placeholder */}
              <View style={styles.eventImageContainer}>
                <LinearGradient
                  colors={customPaletts.gradients.primary}
                  style={styles.eventImageGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Icon name="music" size={32} color={colors.onPrimary} />
                </LinearGradient>
              </View>
              
              {/* Event Info */}
              <Text style={styles.eventName}>{bookingData.eventName}</Text>
              
              <View style={styles.eventDetailsRow}>
                <Icon name="calendar" size={16} color={colors.primary} />
                <Text style={styles.eventDetailText}>{bookingData.eventDate}</Text>
              </View>
              
              <View style={styles.eventDetailsRow}>
                <Icon name="clock" size={16} color={colors.primary} />
                <Text style={styles.eventDetailText}>{bookingData.eventTime}</Text>
              </View>
              
              <View style={styles.eventDetailsRow}>
                <Icon name="map-marker" size={16} color={colors.primary} />
                <Text style={styles.eventDetailText}>{bookingData.venue}</Text>
              </View>
            </LinearGradient>
          </View>
          
          {/* Ticket Details Section */}
          <View style={styles.sectionHeader}>
            <Icon name="ticket-confirmation" size={20} color={colors.primary} />
            <Text style={styles.sectionTitle}>Ticket Summary</Text>
          </View>
          
          <View style={styles.ticketSummaryCard}>
            <LinearGradient
              colors={customPaletts.gradients.surface}
              style={styles.summaryCardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              {bookingData.tickets.map((ticket, index) => (
                <View key={index} style={styles.ticketRow}>
                  <View style={styles.ticketInfo}>
                    <Text style={styles.ticketType}>{ticket.type}</Text>
                    <Text style={styles.ticketSubtext}>Quantity: {ticket.quantity}</Text>
                  </View>
                  <View style={styles.ticketPrice}>
                    <Text style={styles.ticketAmount}>£{(ticket.price * ticket.quantity).toFixed(2)}</Text>
                  </View>
                </View>
              ))}
              
              <View style={styles.dividerLine} />
              
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total Amount</Text>
                <Text style={styles.totalAmount}>£{bookingData.totalAmount.toFixed(2)}</Text>
              </View>
            </LinearGradient>
          </View>
          
          {/* Action Buttons */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.downloadButton}>
              <LinearGradient
                colors={customPaletts.gradients.surface}
                style={styles.downloadButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Icon name="download" size={20} color={colors.primary} />
                <Text style={styles.downloadButtonText}>Download Tickets</Text>
              </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.shareButton}>
              <LinearGradient
                colors={customPaletts.gradients.primary}
                style={styles.shareButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Icon name="share" size={20} color={colors.onPrimary} />
                <Text style={styles.shareButtonText}>Share Event</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          
          {/* Bottom Spacing */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>
    </View>
  );
};

// Styles object for the component
const styles = {
  container: {
    flex: 1,
  },
  
  // Background and Layout
  gradientBackground: {
    flex: 0.4,
  },
  
  // Floating background elements
  floatingCircle1: {
    position: 'absolute',
    top: height * 0.1,
    right: -30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  floatingCircle2: {
    position: 'absolute',
    top: height * 0.05,
    left: -20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  
  floatingCircle3: {
    position: 'absolute',
    top: height * 0.18,
    right: width * 0.2,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  
  floatingCircle4: {
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.15,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  
  // Hero Section
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
  },
  
  heroContent: {
    alignItems: 'center',
  },
  
  successIconContainer: {
    marginBottom: spacing.lg,
  },
  
  successIconGradient: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
    shadowColor: customPaletts.shadows.secondary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
  },
  
  heroTitle: {
    fontSize: fontSizes.xxl,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    marginBottom: spacing.xs,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  
  heroSubtitle: {
    fontSize: fontSizes.md,
    fontFamily: fonts.semiBold,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  
  bookingId: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  
  // Modern Content Container
  modernContentContainer: {
    flex: 0.6,
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    elevation: 20,
    shadowColor: colors.backdrop,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -10 },
    shadowRadius: 25,
  },
  
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
  
  // Modern Event Card
  modernEventCard: {
    marginHorizontal: spacing.xl,
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
    borderRadius: 24,
    elevation: 8,
    shadowColor: customPaletts.shadows.elevation.large,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },
  
  eventCardGradient: {
    borderRadius: 24,
    padding: spacing.xl,
    alignItems: 'center',
  },
  
  eventImageContainer: {
    marginBottom: spacing.lg,
  },
  
  eventImageGradient: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  
  eventName: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onSurface,
    textAlign: 'center',
    marginBottom: spacing.lg,
    letterSpacing: 0.3,
  },
  
  eventDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  
  eventDetailText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
  },
  
  // Section Headers
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    gap: spacing.sm,
  },
  
  sectionTitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onBackground,
    letterSpacing: 0.3,
  },
  
  // Ticket Summary Card
  ticketSummaryCard: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    borderRadius: 20,
    elevation: 6,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },
  
  summaryCardGradient: {
    borderRadius: 20,
    padding: spacing.lg,
  },
  
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  
  ticketInfo: {
    flex: 1,
  },
  
  ticketType: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    color: colors.onSurface,
    marginBottom: spacing.xxs,
  },
  
  ticketSubtext: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
  },
  
  ticketPrice: {
    alignItems: 'flex-end',
  },
  
  ticketAmount: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onSurface,
    letterSpacing: 0.2,
  },
  
  dividerLine: {
    height: 2,
    backgroundColor: colors.primary,
    marginVertical: spacing.md,
    borderRadius: 1,
  },
  
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.sm,
  },
  
  totalLabel: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onSurface,
  },
  
  totalAmount: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
    color: colors.primary,
    letterSpacing: -0.3,
  },
  
  // Action Buttons
  actionButtonsContainer: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },
  
  downloadButton: {
    height: 56,
    borderRadius: 18,
    elevation: 4,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: spacing.sm,
  },
  
  downloadButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    gap: spacing.sm,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  
  downloadButtonText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.semiBold,
    color: colors.primary,
    letterSpacing: 0.3,
  },
  
  shareButton: {
    height: 56,
    borderRadius: 18,
    elevation: 6,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  
  shareButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    gap: spacing.sm,
  },
  
  shareButtonText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.3,
  },
  
  // Bottom Spacing
  bottomSpacing: {
    height: spacing.xl,
  },
};

export default BookingSummaryView;

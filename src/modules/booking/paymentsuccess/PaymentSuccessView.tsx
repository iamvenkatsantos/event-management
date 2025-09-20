import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationProp } from '../../../navigation/main';
import { colors, fonts } from '../../../styles';
import { spacing, fontSizes } from '../../../styles/typography';
import { customPaletts } from '../../../styles/paletts';

const { width, height } = Dimensions.get('window');

const PaymentSuccessView = () => {
  const navigation: NavigationProp<'PaymentSuccess'> = useNavigation();
  
  // Animation references
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const confettiAnimations = useRef(
    Array.from({ length: 12 }, () => ({
      scale: new Animated.Value(0),
      translateY: new Animated.Value(0),
      rotate: new Animated.Value(0),
    }))
  ).current;

  useEffect(() => {
    // Success icon animation
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 1.2,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Content fade in
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 800,
      delay: 400,
      useNativeDriver: true,
    }).start();

    // Confetti animation
    const confettiAnimationSequence = confettiAnimations.map((animation, index) => 
      Animated.sequence([
        Animated.delay(index * 100),
        Animated.parallel([
          Animated.timing(animation.scale, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(animation.translateY, {
            toValue: height * 0.8,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(animation.rotate, {
            toValue: 360,
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
      ])
    );

    Animated.parallel(confettiAnimationSequence).start();
  }, []);

  const handleContinue = () => {
    navigation.navigate('EventList');
  };

  const handleDownloadTickets = () => {
    // Handle ticket download
    console.log('Download tickets');
  };

  const handleViewBooking = () => {
    // Navigate to booking summary
    navigation.navigate('BookingSummary');
  };

  // Mock booking data
  const bookingData = {
    eventName: "Summer Music Festival 2024",
    totalAmount: "175.00",
    bookingId: "BK#2024-7890",
    paymentMethod: "**** 1234"
  };

  const confettiColors = [
    customPaletts.gradients.primary[0],
    customPaletts.gradients.secondary[0],
    colors.primary,
    colors.secondary,
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#FFA07A',
  ];

  return (
    <View style={styles.container}>
      {/* Celebratory Background Gradient */}
      <LinearGradient
        colors={['#667eea', '#764ba2', '#667eea']}
        style={styles.celebratoryBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Confetti Elements */}
        {confettiAnimations.map((animation, index) => (
          <Animated.View
            key={index}
            style={[
              styles.confettiPiece,
              {
                left: (width / 12) * index + Math.random() * 50,
                top: -50,
                backgroundColor: confettiColors[index % confettiColors.length],
                transform: [
                  { scale: animation.scale },
                  { translateY: animation.translateY },
                  {
                    rotate: animation.rotate.interpolate({
                      inputRange: [0, 360],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              },
            ]}
          />
        ))}

        {/* Floating Background Elements */}
        <View style={styles.floatingCircle1} />
        <View style={styles.floatingCircle2} />
        <View style={styles.floatingCircle3} />
        <View style={styles.floatingCircle4} />
        <View style={styles.floatingCircle5} />

        {/* Success Content */}
        <View style={styles.contentContainer}>
          {/* Animated Success Icon */}
          <Animated.View
            style={[
              styles.successIconContainer,
              {
                transform: [{ scale: scaleAnimation }],
              },
            ]}
          >
            <LinearGradient
              colors={['#4CAF50', '#45A049', '#4CAF50']}
              style={styles.successIconGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Icon name="check-circle" size={64} color={colors.onPrimary} />
            </LinearGradient>
          </Animated.View>

          {/* Success Message */}
          <Animated.View
            style={[
              styles.messageContainer,
              {
                opacity: fadeAnimation,
              },
            ]}
          >
            <Text style={styles.successTitle}>Payment Successful!</Text>
            <Text style={styles.successSubtitle}>Your booking is confirmed</Text>
            
            {/* Booking Details */}
            <View style={styles.bookingDetailsContainer}>
              <LinearGradient
                colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
                style={styles.bookingDetailsGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.bookingDetailRow}>
                  <Icon name="ticket-confirmation" size={20} color={colors.onPrimary} />
                  <Text style={styles.bookingDetailText}>{bookingData.eventName}</Text>
                </View>
                
                <View style={styles.bookingDetailRow}>
                  <Icon name="receipt" size={20} color={colors.onPrimary} />
                  <Text style={styles.bookingDetailText}>Booking ID: {bookingData.bookingId}</Text>
                </View>
                
                <View style={styles.bookingDetailRow}>
                  <Icon name="credit-card" size={20} color={colors.onPrimary} />
                  <Text style={styles.bookingDetailText}>Card ending {bookingData.paymentMethod}</Text>
                </View>
                
                <View style={styles.totalAmountRow}>
                  <Text style={styles.totalAmountLabel}>Total Paid</Text>
                  <Text style={styles.totalAmountValue}>£{bookingData.totalAmount}</Text>
                </View>
              </LinearGradient>
            </View>
          </Animated.View>

          {/* Action Buttons */}
          <Animated.View
            style={[
              styles.actionButtonsContainer,
              {
                opacity: fadeAnimation,
              },
            ]}
          >
            {/* Download Tickets Button */}
            <TouchableOpacity
              style={styles.downloadButton}
              onPress={handleDownloadTickets}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#FF6B6B', '#FF5252']}
                style={styles.downloadButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Icon name="download" size={24} color={colors.onPrimary} />
                <Text style={styles.downloadButtonText}>Download Tickets</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* View Booking Button */}
            <TouchableOpacity
              style={styles.viewBookingButton}
              onPress={handleViewBooking}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.2)']}
                style={styles.viewBookingButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Icon name="eye" size={24} color={colors.onPrimary} />
                <Text style={styles.viewBookingButtonText}>View Booking</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Continue Button */}
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinue}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#4CAF50', '#45A049']}
                style={styles.continueButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.continueButtonText}>Continue Exploring</Text>
                <Icon name="arrow-right" size={24} color={colors.onPrimary} />
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </LinearGradient>
    </View>
  );
};

// Styles object for the component
const styles = {
  container: {
    flex: 1,
  },

  celebratoryBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Confetti pieces
  confettiPiece: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  // Floating background elements
  floatingCircle1: {
    position: 'absolute',
    top: height * 0.1,
    right: width * 0.1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  floatingCircle2: {
    position: 'absolute',
    top: height * 0.2,
    left: width * 0.1,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },

  floatingCircle3: {
    position: 'absolute',
    top: height * 0.8,
    right: width * 0.2,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },

  floatingCircle4: {
    position: 'absolute',
    top: height * 0.7,
    left: width * 0.15,
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },

  floatingCircle5: {
    position: 'absolute',
    top: height * 0.3,
    right: width * 0.05,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },

  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    width: '100%',
  },

  // Success Icon
  successIconContainer: {
    marginBottom: spacing.xxl,
  },

  successIconGradient: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
  },

  // Message Container
  messageContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },

  successTitle: {
    fontSize: fontSizes.xxxl,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    textAlign: 'center',
    marginBottom: spacing.sm,
    letterSpacing: -0.5,
  },

  successSubtitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.semiBold,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: spacing.xl,
  },

  // Booking Details
  bookingDetailsContainer: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },

  bookingDetailsGradient: {
    padding: spacing.xl,
  },

  bookingDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    gap: spacing.sm,
  },

  bookingDetailText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onPrimary,
    flex: 1,
  },

  totalAmountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
  },

  totalAmountLabel: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
  },

  totalAmountValue: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: -0.3,
  },

  // Action Buttons
  actionButtonsContainer: {
    width: '100%',
    gap: spacing.md,
  },

  downloadButton: {
    height: 60,
    borderRadius: 20,
    elevation: 8,
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    marginBottom: spacing.sm,
  },

  downloadButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    gap: spacing.sm,
  },

  downloadButtonText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.3,
  },

  viewBookingButton: {
    height: 56,
    borderRadius: 18,
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: spacing.sm,
  },

  viewBookingButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    gap: spacing.sm,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },

  viewBookingButtonText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.semiBold,
    color: colors.onPrimary,
    letterSpacing: 0.3,
  },

  continueButton: {
    height: 60,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },

  continueButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    gap: spacing.sm,
  },

  continueButtonText: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.3,
  },
};

export default PaymentSuccessView;

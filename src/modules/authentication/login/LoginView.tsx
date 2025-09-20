import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StatusBar, Alert, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import Text from '../../../components/text';
import '../../../common/global';

import useLoginViewModal from './useLoginViewModal';

import { styles } from './LoginStyle';
import { colors } from '../../../styles';
import { customPaletts } from '../../../styles/paletts';

const { width } = Dimensions.get('window');

export default function LoginView() {
  const {
    handleGoogleLogin,
    handleGuestLogin,
    loading
  } = useLoginViewModal();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LinearGradient
        colors={customPaletts.gradients.primary}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Floating Elements */}
        <View style={styles.floatingCircle1} />
        <View style={styles.floatingCircle2} />
        <View style={styles.floatingCircle3} />
        
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.modernLogoContainer}>
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.1)']}
              style={styles.modernLogo}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Icon name="event" size={48} color="white" />
            </LinearGradient>
          </View>
          
          <Text style={styles.modernWelcomeTitle}>Welcome Back</Text>
          <Text style={styles.modernWelcomeSubtitle}>Sign in to continue your journey</Text>
        </View>

        {/* Modern Login Form */}
        <View style={styles.modernFormContainer}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>Choose Sign In Method</Text>
            <Text style={styles.formSubtitle}>Select your preferred way to continue</Text>
          </View>

          {/* Google Sign In Button */}
          <TouchableOpacity 
            style={[styles.modernGoogleButton, loading && styles.loadingButton]} 
            onPress={handleGoogleLogin}
            disabled={loading}
          >
            <LinearGradient
              colors={['#FFFFFF', '#F8F9FA']}
              style={styles.modernGoogleButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Icon name="g-translate" size={24} color={colors.primary} />
              <Text style={styles.modernGoogleButtonText}>Continue with Google</Text>
              <Icon name="arrow-forward" size={20} color={colors.primary} />
            </LinearGradient>
          </TouchableOpacity>

          {/* Modern Divider */}
          <View style={styles.modernDividerContainer}>
            <View style={styles.modernDivider} />
            <Text style={styles.modernOrText}>or</Text>
            <View style={styles.modernDivider} />
          </View>

          {/* Guest Sign In Button */}
          <TouchableOpacity 
            style={[styles.modernGuestButton, loading && styles.loadingButton]} 
            onPress={handleGuestLogin}
            disabled={loading}
          >
            <LinearGradient
              colors={customPaletts.gradients.secondary}
              style={styles.modernGuestButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Icon name="person-outline" size={24} color="white" />
              <Text style={styles.modernGuestButtonText}>Continue as Guest</Text>
              <Icon name="arrow-forward" size={20} color="white" />
            </LinearGradient>
          </TouchableOpacity>

          {/* Benefits Section */}
          <View style={styles.benefitsContainer}>
            <View style={styles.benefitItem}>
              <Icon name="security" size={16} color={colors.primary} />
              <Text style={styles.benefitText}>Secure & Fast Authentication</Text>
            </View>
            <View style={styles.benefitItem}>
              <Icon name="event" size={16} color={colors.primary} />
              <Text style={styles.benefitText}>Access All Events</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

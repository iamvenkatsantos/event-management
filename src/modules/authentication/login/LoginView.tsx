import React from 'react';
import { TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Text from '../../../components/text';

import useLoginViewModal from './useLoginViewModal';

import { styles } from './LoginStyle';
import { colors } from '../../../styles';

export default function LoginView() {

  const {
    username, password,
    setUsername, setPassword, handleLogin
  } = useLoginViewModal();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoText}>TE</Text>
            </View>
          </View>
          {/* <Text style={styles.welcomeTitle}>{translate('welcome_back')}</Text>
          <Text style={styles.welcomeSubtitle}>{translate('signin_subtitle')}</Text> */}
        </View>

        {/* Login Form */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={translate('username_placeholder')}
              value={username}
              onChangeText={setUsername}
              style={styles.input}
              placeholderTextColor={colors.onSurfaceVariant}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder={translate('password_placeholder')}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              placeholderTextColor={colors.onSurfaceVariant}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>{translate('forgot_password')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>{translate('sign_in')}</Text>
          </TouchableOpacity>

          {/* Social Login */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>{translate('or_continue_with')}</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="g-translate" size={24} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="facebook" size={24} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="phone-iphone" size={24} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="alternate-email" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>

          {/* Sign Up */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>{translate('dont_have_account')}</Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>{translate('sign_up')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

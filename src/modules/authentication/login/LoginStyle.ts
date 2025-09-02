import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  // Header Section
  headerSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
  },

  logoContainer: {
    marginBottom: 30,
  },

  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.onPrimary,
    fontFamily: fonts.semiBold,
  },

  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.onPrimary,
    marginBottom: 8,
    fontFamily: fonts.semiBold,
  },

  welcomeSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    fontFamily: fonts.medium,
  },

  // Form Section
  formContainer: {
    flex: 0.7,
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 40,
    elevation: 10,
    shadowColor: colors.onBackground,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 8,
  },

  inputContainer: {
    marginBottom: 16,
  },

  input: {
    height: 56,
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    color: colors.onSurface,
    borderWidth: 1,
    borderColor: colors.outline,
    elevation: 2,
    shadowColor: colors.onSurface,
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    color: colors.primary,
    fontSize: 14,
    marginBottom: 24,
    fontFamily: fonts.medium,
  },

  loginButton: {
    height: 56,
    borderRadius: 16,
    marginBottom: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
  },

  loginButtonText: {
    color: colors.onPrimary,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fonts.semiBold,
  },

  // Social Login
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.outline,
  },

  orText: {
    paddingHorizontal: 16,
    color: colors.onSurfaceVariant,
    fontSize: 14,
    fontFamily: fonts.medium,
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },

  socialButton: {
    width: 56,
    height: 56,
    backgroundColor: colors.surface,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.outline,
    elevation: 2,
    shadowColor: colors.onSurface,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  socialImage: {
    width: 24,
    height: 24,
  },

  // Sign Up
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupText: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
    fontFamily: fonts.medium,
  },

  signupLink: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fonts.semiBold,
  },
});

import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, fonts } from '../../../styles';
import { spacing, fontSizes } from '../../../styles/typography';
import { customPaletts } from '../../../styles/paletts';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Floating background elements
  floatingCircle1: {
    position: 'absolute',
    top: height * 0.1,
    right: -50,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  floatingCircle2: {
    position: 'absolute',
    top: height * 0.25,
    left: -40,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  
  floatingCircle3: {
    position: 'absolute',
    top: height * 0.4,
    right: width * 0.2,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },

  // Header Section - Enhanced
  headerSection: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 80 : 60,
    paddingBottom: spacing.lg,
  },

  modernLogoContainer: {
    marginBottom: spacing.xl,
  },

  modernLogo: {
    width: 120,
    height: 120,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },

  modernWelcomeTitle: {
    fontSize: fontSizes.xxl,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    marginBottom: spacing.sm,
    textAlign: 'center',
    letterSpacing: -0.3,
  },

  modernWelcomeSubtitle: {
    fontSize: fontSizes.md,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    fontFamily: fonts.medium,
    paddingHorizontal: spacing.xl,
    lineHeight: fontSizes.md * 1.4,
  },

  // Modern Form Section
  modernFormContainer: {
    flex: 0.65,
    backgroundColor: colors.background,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    elevation: 20,
    shadowColor: colors.backdrop,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -10 },
    shadowRadius: 25,
  },

  formHeader: {
    marginBottom: spacing.xxl,
    alignItems: 'center',
  },

  formTitle: {
    fontSize: fontSizes.xxl,
    fontFamily: fonts.bold,
    color: colors.onBackground,
    marginBottom: spacing.xs,
    letterSpacing: -0.3,
  },

  formSubtitle: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
    textAlign: 'center',
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

  disabledButton: {
    opacity: 0.5,
    elevation: 0,
    shadowOpacity: 0,
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

  // Modern Input Styles
  modernInputContainer: {
    marginBottom: spacing.lg,
  },

  modernInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingHorizontal: spacing.lg,
    height: 60,
    borderWidth: 2,
    borderColor: colors.outline,
    elevation: 3,
    shadowColor: customPaletts.shadows.elevation.small,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  focusedInput: {
    borderColor: colors.primary,
    shadowColor: customPaletts.shadows.primary,
    shadowOpacity: 0.2,
    elevation: 6,
  },

  inputIcon: {
    marginRight: spacing.md,
  },

  modernInput: {
    flex: 1,
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurface,
    paddingVertical: 0,
  },

  passwordToggle: {
    padding: spacing.xs,
  },

  // Modern Forgot Password
  modernForgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: spacing.xl,
  },

  modernForgotPasswordText: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.semiBold,
    color: colors.primary,
  },

  // Modern Login Button
  modernLoginButton: {
    height: 60,
    borderRadius: 20,
    marginBottom: spacing.xl,
    elevation: 8,
    shadowColor: customPaletts.shadows.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  modernLoginButtonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  loadingButton: {
    opacity: 0.8,
  },

  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  modernLoginButtonText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.5,
  },

  // Modern Divider
  modernDividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },

  modernDivider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.outline,
    opacity: 0.5,
  },

  modernOrText: {
    paddingHorizontal: spacing.lg,
    fontSize: fontSizes.xs,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  // Modern Social Login
  modernSocialRow: {
    marginBottom: spacing.xl,
  },

  modernSocialButton: {
    height: 56,
    borderRadius: 18,
    elevation: 4,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  socialButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    borderRadius: 18,
    gap: spacing.sm,
  },

  socialButtonText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.semiBold,
    color: colors.onSurface,
  },

  // Modern Sign Up
  modernSignupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: spacing.xl,
    gap: spacing.xs,
  },

  modernSignupText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
  },

  modernSignupLink: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.bold,
    color: colors.primary,
    textDecorationLine: 'underline',
  },

  // Modern Google Sign-in Button
  googleSignInButton: {
    height: 60,
    borderRadius: 20,
    marginBottom: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.outline,
    elevation: 4,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  googleSignInButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    borderRadius: 18,
    gap: spacing.md,
  },

  googleSignInButtonText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.semiBold,
    color: colors.onSurface,
    letterSpacing: 0.3,
  },

  googleIcon: {
    width: 24,
    height: 24,
  },

  // Modern Guest Sign-in Button
  guestSignInButton: {
    height: 60,
    borderRadius: 20,
    marginBottom: spacing.xl,
    elevation: 6,
    shadowColor: customPaletts.shadows.elevation.large,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },

  guestSignInButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    borderRadius: 20,
    gap: spacing.md,
  },

  guestSignInButtonText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.5,
  },

  guestIcon: {
    width: 24,
    height: 24,
  },

  // Button Container
  buttonContainer: {
    marginBottom: spacing.lg,
  },

  // Modern Google Button
  modernGoogleButton: {
    height: 60,
    borderRadius: 20,
    marginBottom: spacing.lg,
    elevation: 4,
    shadowColor: customPaletts.shadows.elevation.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  modernGoogleButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.outline,
  },

  modernGoogleButtonText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.semiBold,
    color: colors.onSurface,
    letterSpacing: 0.3,
    flex: 1,
    textAlign: 'center',
  },

  // Modern Guest Button
  modernGuestButton: {
    height: 60,
    borderRadius: 20,
    marginBottom: spacing.xl,
    elevation: 6,
    shadowColor: customPaletts.shadows.elevation.large,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },

  modernGuestButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    borderRadius: 20,
  },

  modernGuestButtonText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.bold,
    color: colors.onPrimary,
    letterSpacing: 0.5,
    flex: 1,
    textAlign: 'center',
  },

  // Benefits Section
  benefitsContainer: {
    marginTop: spacing.xl,
    gap: spacing.md,
  },

  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  benefitText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.medium,
    color: colors.onSurfaceVariant,
  },
});

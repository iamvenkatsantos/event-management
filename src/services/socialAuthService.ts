import {
  GoogleSignin,
  statusCodes,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';

export interface SocialUser {
  id: string;
  name: string;
  email: string;
  phone?: string; // Optional for guest users, collected during payment
  photo?: string;
  provider: 'google' | 'guest';
}

export interface AuthResult {
  success: boolean;
  user?: SocialUser;
  error?: string;
}

class SocialAuthService {
  private isConfigured = false;
  
  constructor() {
    // Don't auto-configure on instantiation to avoid early native module access
  }

  private configureGoogleSignIn() {
    GoogleSignin.configure({
      // You'll need to add your webClientId from Google Console
      webClientId: '583345621964-gtv765ssufbu51tnjh6dmhgt8j4fla9a.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceCodeForRefreshToken: true,
    });
  }

  async signInWithGoogle(): Promise<AuthResult> {
    try {
      // Configure Google Sign-In on first use
      if (!this.isConfigured) {
        this.configureGoogleSignIn();
        this.isConfigured = true;
      }
      
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      if (userInfo && (userInfo as any).user) {
        const user = (userInfo as any).user;
        const socialUser: SocialUser = {
          id: user.id,
          name: user.name || '',
          email: user.email,
          photo: user.photo || undefined,
          provider: 'google',
        };

        return {
          success: true,
          user: socialUser,
        };
      }

      return {
        success: false,
        error: 'Failed to get user information from Google',
      };
    } catch (error) {
      console.log("error", error);

      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            return {
              success: false,
              error: 'Google sign in was cancelled',
            };
          case statusCodes.IN_PROGRESS:
            return {
              success: false,
              error: 'Google sign in is in progress',
            };
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            return {
              success: false,
              error: 'Google Play Services not available',
            };
          default:
            return {
              success: false,
              error: `Google sign in error: ${error.message}`,
            };
        }
      }

      return {
        success: false,
        error: 'Unknown Google sign in error',
      };
    }
  }

  async signOutGoogle(): Promise<void> {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.log('Google sign out error:', error);
    }
  }

  async getCurrentGoogleUser() {
    try {
      // Configure Google Sign-In if not already configured
      if (!this.isConfigured) {
        this.configureGoogleSignIn();
        this.isConfigured = true;
      }
      
      const userInfo = await GoogleSignin.getCurrentUser();
      return userInfo;
    } catch (error) {
      return null;
    }
  }

}

export default new SocialAuthService();

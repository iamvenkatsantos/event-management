/**
 * Google Login Configuration Example
 * 
 * Copy this file and rename it to google-login-config.js
 * Replace the placeholder values with your actual credentials
 * 
 * ⚠️  NEVER commit the actual config file with real credentials to version control!
 */

export const GOOGLE_LOGIN_CONFIG = {
  // Google Sign-In Configuration
  google: {
    webClientId: 'YOUR_GOOGLE_WEB_CLIENT_ID.apps.googleusercontent.com',
    // Example: '123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com'
  }
};

// Optional: Environment-specific configuration
export const getConfigForEnvironment = (env = 'development') => {
  const configs = {
    development: {
      ...GOOGLE_LOGIN_CONFIG,
      // Add development-specific overrides
    },
    staging: {
      ...GOOGLE_LOGIN_CONFIG,
      // Add staging-specific overrides
    },
    production: {
      ...GOOGLE_LOGIN_CONFIG,
      // Add production-specific overrides
    }
  };
  
  return configs[env] || configs.development;
};

/*
Instructions for getting credentials:

🔵 GOOGLE CREDENTIALS:
1. Go to https://console.cloud.google.com/
2. Create/select project → APIs & Services → Credentials
3. Create OAuth 2.0 Client ID for "Web application"
4. Copy the Client ID (ends with .apps.googleusercontent.com)

🔵 TESTING TIPS:
- Use real devices for testing (simulators may have issues)
- For Android: Generate SHA-1 key and add to Google Console
- For iOS: Add Bundle ID to Google Console

🔵 SECURITY:
- Add google-login-config.js to .gitignore
- Use environment variables in CI/CD pipelines
- Never expose credentials in client-side code
- Validate tokens on your backend server
*/

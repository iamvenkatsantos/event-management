# Google Sign-In Setup Guide for React Native

## Overview
This guide walks you through setting up Google Sign-In for your React Native app. The error code '10' (DEVELOPER_ERROR) typically occurs when the configuration is incomplete or incorrect.

## Your Current SHA-1 Fingerprint
**Debug SHA-1:** `5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25`

## Step 1: Google Console Setup

### 1.1 Create/Access Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing project
3. Note the project ID and project number

### 1.2 Enable Google Sign-In API
1. Go to **APIs & Services** > **Library**
2. Search for "Google Sign-In API" or "Google+ API"
3. Click **Enable**

### 1.3 Create OAuth 2.0 Credentials
1. Go to **APIs & Services** > **Credentials**
2. Click **+ CREATE CREDENTIALS** > **OAuth 2.0 Client IDs**
3. Create credentials for both Android and iOS:

#### For Android:
- **Application type:** Android
- **Package name:** `com.eventmanagement`
- **SHA-1 certificate fingerprint:** `5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25`

#### For iOS:
- **Application type:** iOS
- **Bundle ID:** `com.eventmanagement`

#### Web Client (Required):
- **Application type:** Web application
- **Name:** Your app name (e.g., "Event Management Web")
- **Authorized redirect URIs:** Leave empty for now

4. Note down the **Web Client ID** - this goes in your React Native code

## Step 2: Download Configuration Files

### 2.1 Download google-services.json (Android)
1. In Google Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click on your Android app
4. Click **Download google-services.json**
5. Replace the template file at `android/app/google-services.json`

### 2.2 Download GoogleService-Info.plist (iOS)
1. In Google Console, go to Project Settings
2. Scroll down to "Your apps" section  
3. Click on your iOS app
4. Click **Download GoogleService-Info.plist**
5. Replace the template file at `ios/eventManagement/GoogleService-Info.plist`

## Step 3: Update Your Code

### 3.1 Update webClientId in socialAuthService.ts
Replace the webClientId in `src/services/socialAuthService.ts`:

```typescript
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID_FROM_GOOGLE_CONSOLE',
  offlineAccess: true,
  hostedDomain: '',
  forceCodeForRefreshToken: true,
});
```

## Step 4: Build and Test

### 4.1 Clean and Rebuild
```bash
# For Android
cd android && ./gradlew clean && cd ..
npx react-native run-android

# For iOS  
cd ios && rm -rf Pods/ && pod install && cd ..
npx react-native run-ios
```

### 4.2 Test Google Sign-In
1. Run your app
2. Navigate to login screen
3. Tap Google Sign-In button
4. Should open Google authentication flow

## Common Issues & Solutions

### Issue: DEVELOPER_ERROR (Code 10)
**Causes:**
- Missing or incorrect google-services.json/GoogleService-Info.plist
- SHA-1 fingerprint not added to Google Console
- Wrong package name/bundle ID
- Missing webClientId or incorrect webClientId

**Solutions:**
1. Verify all configuration files are in place
2. Ensure SHA-1 fingerprint matches: `5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25`
3. Check package name matches: `com.eventmanagement`
4. Verify webClientId is from the Web Application credentials

### Issue: SIGN_IN_CANCELLED (Code 12001)
- User cancelled the sign-in flow
- This is expected behavior

### Issue: NETWORK_ERROR (Code 7)
- Check internet connection
- Verify Google Play Services are up to date (Android)

## Verification Steps

1. **Check files exist:**
   - `android/app/google-services.json` ✓
   - `ios/eventManagement/GoogleService-Info.plist` ✓

2. **Check Google Console:**
   - SHA-1 fingerprint added ✓
   - Package name matches ✓
   - APIs enabled ✓

3. **Check code:**
   - webClientId updated ✓
   - GoogleSignin.configure() called ✓

## Next Steps After Setup

Once Google Sign-In is working:

1. Test on both Android and iOS devices/simulators
2. Test with different Google accounts
3. Implement sign-out functionality
4. Add error handling for edge cases
5. Consider adding additional scopes if needed

## Production Considerations

For production builds:
1. Generate production keystore
2. Add production SHA-1 fingerprint to Google Console
3. Use production Google Console project
4. Test thoroughly with production build

---

**Current Configuration Status:**
- ✅ Android build.gradle updated with Google Services plugin
- ✅ Template google-services.json created (needs real file)
- ✅ Template GoogleService-Info.plist created (needs real file)  
- ✅ iOS Info.plist updated with URL scheme
- ✅ SHA-1 fingerprint identified
- ⚠️ Need to update webClientId in code
- ⚠️ Need to download real config files from Google Console

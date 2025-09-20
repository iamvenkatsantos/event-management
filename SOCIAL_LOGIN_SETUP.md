# Google Login Setup Guide

This guide will help you configure Google login for your React Native Event Management app.

## Prerequisites
- Google Cloud Console access
- React Native development environment setup

## 1. Google Sign-In Setup

### Step 1: Google Cloud Console Configuration

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing project
3. Enable "Google Sign-In API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Create credentials for:
   - **Web application** (for the webClientId)
   - **Android** (if building for Android)
   - **iOS** (if building for iOS)

### Step 2: Get Configuration Values

After creating credentials, you'll get:
- **Web Client ID** (needed for React Native configuration)
- **Android Client ID** (if applicable)
- **iOS Client ID** (if applicable)

### Step 3: Update socialAuthService.ts

Replace the placeholder in `src/services/socialAuthService.ts`:

```typescript
webClientId: 'YOUR_ACTUAL_WEB_CLIENT_ID.apps.googleusercontent.com',
```

### Step 4: iOS Configuration

1. Download the `GoogleService-Info.plist` file from your Google project
2. Add it to your iOS project:
   - Open Xcode
   - Right-click on your project → "Add Files to [ProjectName]"
   - Select the `GoogleService-Info.plist` file
   - Make sure it's added to your target

3. Update `ios/eventManagement/Info.plist`:

```xml
<!-- Add these entries inside the <dict> tag -->
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLName</key>
    <string>REVERSED_CLIENT_ID</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>YOUR_REVERSED_CLIENT_ID</string>
    </array>
  </dict>
</array>
```

Replace `YOUR_REVERSED_CLIENT_ID` with the REVERSED_CLIENT_ID from your GoogleService-Info.plist.

4. Install iOS dependencies:
```bash
cd ios && pod install
```

### Step 5: Android Configuration

1. Download the `google-services.json` file from your Google project
2. Place it in `android/app/google-services.json`

3. Update `android/build.gradle` (project level):

```gradle
dependencies {
    classpath 'com.google.gms:google-services:4.3.15'
    // ... other dependencies
}
```

4. Update `android/app/build.gradle`:

```gradle
apply plugin: 'com.google.gms.google-services'

dependencies {
    implementation 'com.google.android.gms:play-services-auth:20.7.0'
    // ... other dependencies
}
```

## 2. Testing

1. Build and run your app on a physical device (Google login doesn't work well in simulators)
2. Test Google login by tapping the Google button
3. Verify that user information is correctly displayed in alerts
4. Check that navigation to EventList works after successful login

## 3. Important Notes

- **Google Play Console**: For Android production, you'll need to upload your app to Google Play Console and add the SHA-1 fingerprint of your upload key to Google Cloud Console
- **Testing**: Use real devices for testing Google login, as simulators/emulators may have limitations
- **Bundle IDs**: Make sure your iOS Bundle ID and Android Package Name match what you configured in Google Cloud Console

## 4. Troubleshooting

- **iOS Build Issues**: Run `cd ios && pod install` after installing new dependencies
- **Android Build Issues**: Clean build with `cd android && ./gradlew clean`
- **Google Sign-In Errors**: Verify that your webClientId is correct and that you've enabled the Google Sign-In API

## 5. Security Considerations

- Never commit your `google-services.json` or `GoogleService-Info.plist` files to public repositories
- Use environment variables for sensitive configuration in CI/CD pipelines
- Regularly rotate your client secrets and tokens
- Implement proper server-side validation of social login tokens in production

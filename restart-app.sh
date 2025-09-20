#!/bin/bash

echo "🧹 Cleaning React Native caches..."

# Kill any running Metro processes
pkill -f "react-native" 2>/dev/null || true
pkill -f "metro" 2>/dev/null || true
lsof -ti:8081 | xargs kill -9 2>/dev/null || true

# Clean React Native caches
echo "📱 Cleaning React Native cache..."
npx react-native start --reset-cache --port 8081 &

# Wait for Metro to start
echo "⏳ Waiting for Metro to start..."
sleep 5

echo "🚀 Metro server started! You can now run:"
echo "   npx react-native run-android"
echo "   or"
echo "   npx react-native run-ios"

echo ""
echo "📱 If you're still seeing text rendering issues, try:"
echo "1. Force close the app on your device/emulator"
echo "2. Run: npx react-native run-android --reset-cache"
echo "3. Or restart the emulator/device completely"

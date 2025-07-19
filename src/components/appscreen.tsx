import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBarHeader from './appbarheader';
import type { AllScreens, NavigationProp } from '../navigation/main';
import { colors } from '../styles';

type AppScreenProps<T extends AllScreens> = {
  title: string;
  children: React.ReactNode;
  navigation: NavigationProp<T>;
  showBack?: boolean;
  showMenu?: boolean;
  onLogout?: () => void;
  backgroundColor?: string;
};

const AppScreen = <T extends AllScreens>({
  title,
  children,
  navigation,
  showBack = false,
  showMenu = false,
  onLogout,
}: AppScreenProps<T>) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <AppBarHeader<T>
        title={title}
        navigation={navigation}
        showBack={showBack}
        showMenu={showMenu}
        onLogout={onLogout}
      />
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    flex: 1,
    padding: 10,
  },
});

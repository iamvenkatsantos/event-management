import React from 'react';
import { Appbar } from 'react-native-paper';
// import { DrawerActions } from '@react-navigation/native';
import type { AllScreens, NavigationProp } from '../navigation/main';
import { BackHandler, StyleSheet } from 'react-native';
// import { useDrawerStatus } from '@react-navigation/drawer';
import { colors } from '../styles';

type AppBarHeaderProps<T extends AllScreens> = {
  title: string;
  showBack?: boolean;
  showMenu?: boolean;
  onLogout?: () => void;
  navigation: NavigationProp<T>;
};

const AppBarHeader = <T extends AllScreens>({
  title,
  showBack,
  showMenu,
  onLogout,
  navigation,
}: AppBarHeaderProps<T>) => {
  // const isDrawerOpen = useDrawerStatus() === 'open';

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack?.();
    } else {
      BackHandler.exitApp();
    }
  };

  const handleMenu = () => {
    // if (isDrawerOpen && navigation) {
    //   navigation.dispatch(DrawerActions.closeDrawer());
    // } else {
    //   navigation.dispatch(DrawerActions.openDrawer());
    // }
  };

  return (
    <Appbar.Header style={styles.header}>
      {showBack ? (
        <Appbar.BackAction color={colors.primary} onPress={handleBack} />
      ) : showMenu ? (
        <Appbar.Action icon="menu" color={colors.background} onPress={handleMenu} />
      ) : null}
      <Appbar.Content title={title ?? ''} titleStyle={styles.title} />
      {onLogout && (
        <Appbar.Action icon="logout"  onPress={onLogout} />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.background,
    elevation: 4,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    color: colors.onBackground,
  },
});

export default AppBarHeader;

import React from 'react';
import { createStackNavigator, StackNavigationProp as RNStackNavigationProp } from '@react-navigation/stack';
import {
  createDrawerNavigator, DrawerNavigationProp as RNDrawerNavigationProp, DrawerScreenProps
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../modules/authentication/login/LoginView';
import LoaderScreen from '../modules/authentication/loading/LoadingView';
import HomeScreen from '../modules/home/HomeView';

import EventListScreen from '../modules/events/eventlist/EventListScreen';
import EventMapScreen from '../modules/events/eventmap/EventMapView';
import { IEventListBO } from '../models/events';

export type StackParamList = {
  Login: undefined;
  Loader: undefined;
  AuthStack: undefined;
  DrawerStack: undefined;
}

export type DrawerParamList = {
  Home: undefined;
  EventList: undefined;
  EventMap: { selectedEvent: IEventListBO };
}

const Stack = createStackNavigator<StackParamList>();

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator<DrawerParamList>();
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="EventList">
      <Drawer.Screen name="EventList" component={EventListScreen} />
      <Drawer.Screen name="EventMap" component={EventMapScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const AuthenticationStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AuthStack">
        <Stack.Screen name="Loader" component={LoaderScreen} />
        <Stack.Screen name="AuthStack" component={AuthenticationStack} />
        <Stack.Screen name="DrawerStack" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type NavigationPropType = RNStackNavigationProp<StackParamList, 'Login'> | RNDrawerNavigationProp<DrawerParamList, 'Home'>;

export type EventMapNavigationProp = DrawerScreenProps<DrawerParamList, 'EventMap'>;

export type AllScreens = keyof StackParamList | keyof DrawerParamList;

export type NavigationProp<T extends AllScreens> =
  T extends keyof StackParamList
  ? RNStackNavigationProp<StackParamList, T>
  : T extends keyof DrawerParamList
  ? RNDrawerNavigationProp<DrawerParamList, T>
  : never;

export type StackNavigationProp<T extends keyof StackParamList> = RNStackNavigationProp<StackParamList, T>;
export type DrawerNavigationProp<T extends keyof DrawerParamList> = RNDrawerNavigationProp<DrawerParamList, T>;

export default AppNavigator;

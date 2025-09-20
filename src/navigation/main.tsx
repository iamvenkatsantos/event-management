import React from 'react';
import { createStackNavigator, StackNavigationProp as RNStackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../modules/authentication/login/LoginView';
import LoaderScreen from '../modules/authentication/loading/LoadingView';
import HomeScreen from '../modules/home/HomeView';

import EventListScreen from '../modules/events/eventlist/EventListScreen';
import EventMapScreen from '../modules/events/eventmap/EventMapView';
import EventDetailsScreen from '../modules/events/eventdetails/EventDetailsView';
import TicketSelectionScreen from '../modules/booking/ticketselection/TicketSelectionView';
import TicketBookingScreen from '../modules/booking/ticketbooking/TicketBookingView';
import PaymentBreakdownScreen from '../modules/booking/paymentbreakdown/PaymentBreakdownView';
import PaymentSuccessScreen from '../modules/booking/paymentsuccess/PaymentSuccessView';
import BookingSummaryScreen from '../modules/booking/bookingsummary/BookingSummaryView';

import { IEventListBO } from '../models/events';
import { IEventDetails, ITicketTier, IBookingItem } from '../models/booking';

export type StackParamList = {
  Login: undefined;
  Loader: undefined;
  EventList: undefined;
  Home: undefined;
  EventMap: { selectedEvent: IEventListBO };
  EventDetails: { eventId: string };
  TicketSelection: { eventDetails: IEventDetails };
  TicketBooking: { eventDetails: IEventDetails; selectedTiers: ITicketTier[] };
  PaymentBreakdown: { bookingItems: IBookingItem[]; eventDetails: IEventDetails };
  PaymentSuccess: undefined;
  BookingSummary: { bookingId: string };
}

const Stack = createStackNavigator<StackParamList>();

// const DrawerNavigator = () => {
//   const Drawer = createDrawerNavigator<DrawerParamList>();
//   return (
//     <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="EventList">
//       <Drawer.Screen name="EventList" component={EventListScreen} />
//       <Drawer.Screen name="EventMap" component={EventMapScreen} />
//       <Drawer.Screen name="Home" component={HomeScreen} />
//     </Drawer.Navigator>
//   );
// };

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Loader" component={LoaderScreen} />
        <Stack.Screen name="EventList" component={EventListScreen} />
        <Stack.Screen name="EventMap" component={EventMapScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
        <Stack.Screen name="TicketSelection" component={TicketSelectionScreen} />
        <Stack.Screen name="TicketBooking" component={TicketBookingScreen} />
        <Stack.Screen name="PaymentBreakdown" component={PaymentBreakdownScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
        <Stack.Screen name="BookingSummary" component={BookingSummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type AllScreens = keyof StackParamList;

export type NavigationProp<T extends AllScreens> = RNStackNavigationProp<StackParamList, T>;

export type StackNavigationProp<T extends keyof StackParamList> = RNStackNavigationProp<StackParamList, T>;

export default AppNavigator;

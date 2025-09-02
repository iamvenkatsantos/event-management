import { useNavigation, RouteProp } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { NavigationProp, StackParamList } from '../../../navigation/main';
import { IBookingItem } from '../../../models/booking';

type TicketBookingScreenProps = {
  route: RouteProp<StackParamList, 'TicketBooking'>;
};

const useTicketBookingModal = (props: TicketBookingScreenProps) => {
  const navigation: NavigationProp<'TicketBooking'> = useNavigation();
  const { eventDetails, selectedTiers } = props.route.params;
  
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    selectedTiers.forEach(tier => {
      initial[tier.id] = 1; // Default quantity of 1
    });
    return initial;
  });

  const formatDateTime = useCallback(() => {
    const date = new Date(eventDetails.eventDateTime);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, [eventDetails.eventDateTime]);

  const handleQuantityChange = useCallback((tierId: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantities(prev => ({
        ...prev,
        [tierId]: newQuantity
      }));
    }
  }, []);

  const totalAmount = Object.entries(quantities).reduce((total, [tierId, quantity]) => {
    const tier = selectedTiers.find(t => t.id === tierId);
    return total + (tier ? tier.price * quantity : 0);
  }, 0);

  const handlePayNow = useCallback(() => {
    const bookingItems: IBookingItem[] = selectedTiers
      .filter(tier => quantities[tier.id] > 0)
      .map(tier => ({
        ticketTier: tier,
        quantity: quantities[tier.id],
        subtotal: tier.price * quantities[tier.id]
      }));

    navigation.navigate('PaymentBreakdown', { bookingItems, eventDetails });
  }, [navigation, selectedTiers, quantities, eventDetails]);

  return {
    navigation,
    eventDetails,
    selectedTiers,
    quantities,
    totalAmount,
    handleQuantityChange,
    handlePayNow,
    formatDateTime,
  };
};

export default useTicketBookingModal;

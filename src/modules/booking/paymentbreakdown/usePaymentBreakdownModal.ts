import { useNavigation, RouteProp } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { NavigationProp, StackParamList } from '../../../navigation/main';
import { IPaymentBreakdown } from '../../../models/booking';

type PaymentBreakdownScreenProps = {
  route: RouteProp<StackParamList, 'PaymentBreakdown'>;
};

const usePaymentBreakdownModal = (props: PaymentBreakdownScreenProps) => {
  const navigation: NavigationProp<'PaymentBreakdown'> = useNavigation();
  const { bookingItems, eventDetails } = props.route.params;

  const paymentBreakdown: IPaymentBreakdown = useMemo(() => {
    const subtotal = bookingItems.reduce((total, item) => total + item.subtotal, 0);
    const gst = 1; // Fixed value as per Figma
    const sgst = 1; // Fixed value as per Figma
    const convenienceFee = 1; // Fixed value as per Figma
    const total = subtotal + gst + sgst + convenienceFee;

    return {
      items: bookingItems,
      subtotal,
      gst,
      sgst,
      convenienceFee,
      total,
    };
  }, [bookingItems]);

  const formatDateTime = useCallback(() => {
    const date = new Date(eventDetails.eventDateTime);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, [eventDetails.eventDateTime]);

  const handlePayNow = useCallback(() => {
    // Simulate payment processing
    setTimeout(() => {
      navigation.navigate('PaymentSuccess');
    }, 1000);
  }, [navigation]);

  return {
    navigation,
    eventDetails,
    paymentBreakdown,
    handlePayNow,
    formatDateTime,
  };
};

export default usePaymentBreakdownModal;

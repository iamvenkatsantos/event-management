import { useNavigation, RouteProp } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, StackParamList } from '../../../navigation/main';
import { IPaymentBreakdown } from '../../../models/booking';
import { RootState, AppDispatch } from '../../../redux/store';
import { updateGuestInfo } from '../../../redux/authSlice';

type PaymentBreakdownScreenProps = {
  route: RouteProp<StackParamList, 'PaymentBreakdown'>;
};

const usePaymentBreakdownModal = (props: PaymentBreakdownScreenProps) => {
  const navigation: NavigationProp<'PaymentBreakdown'> = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { bookingItems, eventDetails } = props.route.params;
  
  const [showGuestForm, setShowGuestForm] = useState(false);
  const [guestInfoLoading, setGuestInfoLoading] = useState(false);
  
  // Check if user is guest and needs to provide contact info
  const isGuestUser = user?.provider === 'guest';
  const needsGuestInfo = isGuestUser && (!user?.email || !user?.phone);

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

  const handleGuestInfoSubmit = useCallback(async (email: string, phone: string) => {
    setGuestInfoLoading(true);
    try {
      // Update guest user info in Redux
      dispatch(updateGuestInfo({ email, phone }));
      setShowGuestForm(false);
    } catch (error) {
      console.error('Error updating guest info:', error);
    } finally {
      setGuestInfoLoading(false);
    }
  }, [dispatch]);

  const handlePayNow = useCallback(() => {
    // Check if guest user needs to provide contact info first
    if (needsGuestInfo) {
      setShowGuestForm(true);
      return;
    }
    
    // Proceed with payment processing
    setTimeout(() => {
      navigation.navigate('PaymentSuccess');
    }, 1000);
  }, [navigation, needsGuestInfo]);

  return {
    navigation,
    eventDetails,
    paymentBreakdown,
    handlePayNow,
    formatDateTime,
    isGuestUser,
    needsGuestInfo,
    showGuestForm,
    setShowGuestForm,
    guestInfoLoading,
    handleGuestInfoSubmit,
  };
};

export default usePaymentBreakdownModal;

import { useNavigation, RouteProp } from '@react-navigation/native';
import { useCallback } from 'react';
import { NavigationProp, StackParamList } from '../../../navigation/main';
import { ITicketTier } from '../../../models/booking';

type TicketSelectionScreenProps = {
  route: RouteProp<StackParamList, 'TicketSelection'>;
};

const useTicketSelectionModal = (props: TicketSelectionScreenProps) => {
  const navigation: NavigationProp<'TicketSelection'> = useNavigation();
  const eventDetails = props.route.params.eventDetails;

  const formatDateTime = useCallback(() => {
    // Format the date and time for display
    const date = new Date(eventDetails.eventDateTime);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, [eventDetails.eventDateTime]);

  const handleTicketSelect = useCallback((selectedTier: ITicketTier) => {
    navigation.navigate('TicketBooking', { 
      eventDetails, 
      selectedTiers: [selectedTier] 
    });
  }, [navigation, eventDetails]);

  return {
    navigation,
    eventDetails,
    handleTicketSelect,
    formatDateTime,
  };
};

export default useTicketSelectionModal;

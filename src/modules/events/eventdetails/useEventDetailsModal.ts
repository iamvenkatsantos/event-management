import { useNavigation, RouteProp } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { NavigationProp, StackParamList } from '../../../navigation/main';
import { IEventDetails } from '../../../models/booking';
import { IEventListBO } from '../../../models/events';

type EventDetailsScreenProps = {
  route: RouteProp<StackParamList, 'EventDetails'>;
};

const useEventDetailsModal = (props: EventDetailsScreenProps) => {
  const navigation: NavigationProp<'EventDetails'> = useNavigation();
  const [eventDetails, setEventDetails] = useState<IEventDetails | null>(null);

  // Mock event details data
  const mockEventDetails: IEventDetails = {
    id: props.route.params.eventId,
    name: 'Tech Conference 2025',
    rating: 9.5,
    latitude: 13.0827,
    longitude: 80.2707,
    address: 'Chennai Trade Centre, Chennai, Tamil Nadu',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.',
    totalBookings: 1000,
    totalMembers: 1000,
    eventDateTime: '2025-03-15T10:00:00Z',
    duration: '3 hours',
    castAndCrew: [
      { id: '1', name: 'Cast', role: 'Speaker', imageUrl: undefined },
      { id: '2', name: 'Cast', role: 'Host', imageUrl: undefined },
      { id: '3', name: 'Cast', role: 'Organizer', imageUrl: undefined },
      { id: '4', name: 'Cast', role: 'Technical', imageUrl: undefined },
    ],
    ticketTiers: [
      {
        id: 'premium',
        name: 'Premium',
        price: 100,
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        available: true,
        totalSeats: 100,
        availableSeats: 50,
      },
      {
        id: 'gold',
        name: 'Gold',
        price: 75,
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        available: true,
        totalSeats: 150,
        availableSeats: 80,
      },
      {
        id: 'silver',
        name: 'Silver',
        price: 50,
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        available: true,
        totalSeats: 200,
        availableSeats: 120,
      },
    ],
  };

  // Mock recommended events data
  const recommendedEvents: IEventListBO[] = [
    {
      id: '1',
      name: 'Event Name',
      rating: 9.5,
      latitude: 13.0827,
      longitude: 80.2707,
      address: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    },
    {
      id: '2',
      name: 'Event Name',
      rating: 9.5,
      latitude: 13.0827,
      longitude: 80.2707,
      address: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    },
    {
      id: '3',
      name: 'Event Name',
      rating: 9.5,
      latitude: 13.0827,
      longitude: 80.2707,
      address: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    },
  ];

  useEffect(() => {
    // Simulate API call to fetch event details
    setTimeout(() => {
      setEventDetails(mockEventDetails);
    }, 1000);
  }, [props.route.params.eventId]);

  const handleBookNow = useCallback(() => {
    if (eventDetails) {
      navigation.navigate('TicketSelection', { eventDetails });
    }
  }, [navigation, eventDetails]);

  return {
    navigation,
    eventDetails,
    handleBookNow,
    recommendedEvents,
  };
};

export default useEventDetailsModal;

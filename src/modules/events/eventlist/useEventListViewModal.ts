import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../navigation/main";
import { useCallback } from "react";

const useEventListViewModal = () => {

  const navigation: NavigationProp<"EventList"> = useNavigation();

  const eventListDummyData = [
    {
      id: '0',
      name: 'Tech Conference 2025',
      rating: 9.5,
      latitude: 13.0827,
      longitude: 80.2707,
      address: 'Chennai Trade Centre, Chennai, Tamil Nadu',
    },
    {
      id: '1',
      name: 'Startup Summit',
      rating: 9.3,
      latitude: 12.9716,
      longitude: 77.5946,
      address: 'Lalbagh Road, Bengaluru, Karnataka',
    },
    {
      id: '2',
      name: 'Design Expo',
      rating: 9.0,
      latitude: 19.076,
      longitude: 72.8777,
      address: 'Bandra Kurla Complex, Mumbai, Maharashtra',
    },
    {
      id: '3',
      name: 'Art Fest',
      rating: 8.8,
      latitude: 28.6139,
      longitude: 77.209,
      address: 'India Gate, New Delhi',
    },
    {
      id: '4',
      name: 'Music Carnival',
      rating: 9.6,
      latitude: 17.385,
      longitude: 78.4867,
      address: 'Necklace Road, Hyderabad, Telangana',
    },
    {
      id: '5',
      name: 'Book Fair',
      rating: 9.1,
      latitude: 11.0168,
      longitude: 76.9558,
      address: 'Gandhipuram, Coimbatore, Tamil Nadu',
    },
    {
      id: '6',
      name: 'Food Expo',
      rating: 9.4,
      latitude: 9.9252,
      longitude: 78.1198,
      address: 'Anna Nagar, Madurai, Tamil Nadu',
    },
    {
      id: '7',
      name: 'Gaming Conclave',
      rating: 9.2,
      latitude: 10.7905,
      longitude: 78.7047,
      address: 'Trichy Convention Center, Trichy, Tamil Nadu',
    },
  ];

  const handleEventPress = useCallback((item: any) => {
    console.log("Selected Event:", item);
    navigation.navigate('EventDetails', { eventId: item.id });
  }, [navigation])

  return {
    eventListDummyData, navigation,
    handleEventPress
  }
}

export default useEventListViewModal;
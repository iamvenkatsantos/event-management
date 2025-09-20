import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../navigation/main";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { getCurrentLocation, getLocationStatus, requestLocationPermission } from "../../../redux/locationSlice";
import { Alert } from "react-native";

const useEventListViewModal = () => {
  const navigation: NavigationProp<"EventList"> = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { 
    currentLocation, 
    loading: locationLoading, 
    error: locationError, 
    permissionGranted,
    locationServicesEnabled,
    permissionStatus,
    isInitialized
  } = useSelector((state: RootState) => state.location);

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

  // Function to request location permission with user-friendly dialog
  const requestLocationWithPermission = useCallback(() => {
    Alert.alert(
      'Location Access',
      'To show you nearby events and improve your experience, this app would like to access your location.',
      [
        {
          text: 'Not Now',
          style: 'cancel',
          onPress: () => {
            console.log('User declined location permission');
          }
        },
        {
          text: 'Allow Location',
          onPress: async () => {
            try {
              const granted = await dispatch(requestLocationPermission()).unwrap();
              if (granted) {
                // Permission granted, get location
                dispatch(getCurrentLocation(true));
              } else {
                console.log('Location permission denied by user');
              }
            } catch (error) {
              console.error('Error requesting location permission:', error);
            }
          }
        }
      ]
    );
  }, [dispatch]);

  // Initialize location on component mount
  useEffect(() => {
    const initializeLocation = async () => {
      try {
        // Skip if already initialized
        if (isInitialized && currentLocation) {
          console.log('Location already initialized:', currentLocation);
          return;
        }

        // Get comprehensive location status first
        const locationStatus = await dispatch(getLocationStatus()).unwrap();
        console.log('Location status:', locationStatus);
        
        if (locationStatus.permissionGranted && locationStatus.locationServicesEnabled) {
          // Everything is ready, get current location
          dispatch(getCurrentLocation(true)); // with address
        } else if (!locationStatus.locationServicesEnabled) {
          // Location services are disabled
          console.log('Location services disabled on device');
        } else if (locationStatus.permissionStatus === 'denied' && locationStatus.canRequest) {
          // Permission was denied but can be requested again
          setTimeout(() => {
            requestLocationWithPermission();
          }, 2000); // Wait 2 seconds before showing permission dialog
        } else if (locationStatus.permissionStatus === 'blocked') {
          // Permission is blocked, can't request again
          console.log('Location permission blocked');
        }
      } catch (error) {
        console.error('Error initializing location:', error);
      }
    };

    // Only initialize once
    if (!isInitialized) {
      initializeLocation();
    }
  }, [dispatch, isInitialized, currentLocation, requestLocationWithPermission]);

  const handleEventPress = useCallback((item: any) => {
    console.log("Selected Event:", item);
    navigation.navigate('EventDetails', { eventId: item.id });
  }, [navigation]);

  const handleLocationRefresh = useCallback(async () => {
    try {
      // Check if permission is granted first
      if (permissionGranted) {
        dispatch(getCurrentLocation(true));
      } else {
        // Permission not granted, ask user
        requestLocationWithPermission();
      }
    } catch (error) {
      console.error('Error refreshing location:', error);
    }
  }, [dispatch, permissionGranted, requestLocationWithPermission]);

  const getLocationDisplayText = useCallback(() => {
    if (locationLoading) {
      return 'Getting location...';
    }
    
    if (locationError) {
      return 'Location unavailable';
    }
    
    if (currentLocation?.address) {
      // Extract city from address or show short form
      const addressParts = currentLocation.address.split(',');
      if (addressParts.length > 1) {
        return addressParts[0].trim(); // Show first part (usually locality)
      }
      return currentLocation.address;
    }
    
    if (currentLocation) {
      return `${currentLocation.latitude.toFixed(4)}, ${currentLocation.longitude.toFixed(4)}`;
    }
    
    return 'Tap to enable location';
  }, [currentLocation, locationLoading, locationError]);

  return {
    eventListDummyData, 
    navigation,
    handleEventPress,
    currentLocation,
    locationLoading,
    locationError,
    permissionGranted,
    handleLocationRefresh,
    getLocationDisplayText,
  }
}

export default useEventListViewModal;
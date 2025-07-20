// src/screens/MapScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { EventMapNavigationProp, NavigationProp } from '../../../navigation/main';
import AppBarHeader from '../../../components/appbarheader';
import { useNavigation } from '@react-navigation/native';
import Text from '../../../components/text';

const MapScreen = (props: EventMapNavigationProp) => {

  const navigation: NavigationProp<"EventMap"> = useNavigation();

  const [markerPosition, setMarkerPosition] = useState<{ latitude: number; longitude: number } | null>(null);


  const mapRef = React.useRef<MapView>(null);



  useEffect(() => {
    const selectedEvent = props.route?.params?.selectedEvent;
    if (
      selectedEvent &&
      typeof selectedEvent.latitude === 'number' &&
      typeof selectedEvent.longitude === 'number'
    ) {
      const region = {
        latitude: selectedEvent.latitude,
        longitude: selectedEvent.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      };

      setMarkerPosition({ latitude: region.latitude, longitude: region.longitude });

      // Animate to new region smoothly
      if (mapRef.current) {
        mapRef.current.animateToRegion(region, 1000);
      }
    } else {
      console.warn('Invalid selectedEvent:', selectedEvent);
    }
  }, [props.route?.params.selectedEvent]);

  if (!markerPosition) {
    return (
      <View style={styles.container}>
        <AppBarHeader navigation={navigation} title="Event Map" showBack showMenu={false} />
        <Text>Loading event location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppBarHeader navigation={navigation} title='Event Map' showBack showMenu={false} />

      <MapView
        ref={mapRef}
        style={styles.mapStyle}
        initialRegion={{
          latitude: markerPosition.latitude,
          longitude: markerPosition.longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}>
        <Marker
          coordinate={markerPosition}
          pinColor="red"
          title={props.route?.params?.selectedEvent.name ?? "Event Name"}
          description={props.route?.params?.selectedEvent.name ?? "No address provided"}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    flex: 1,
  }
});

export default MapScreen;
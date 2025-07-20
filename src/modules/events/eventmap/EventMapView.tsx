// src/screens/MapScreen.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { EventMapNavigationProp, NavigationProp } from '../../../navigation/main';
import AppBarHeader from '../../../components/appbarheader';
import { useNavigation } from '@react-navigation/native';

const MapScreen = (props: EventMapNavigationProp) => {

  const navigation: NavigationProp<"EventMap"> = useNavigation();

  const [mapRegion, setMapRegion] = React.useState({
    latitude: 28.6139,
    longitude: 77.209,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  });

  const { selectedEvent } = props.route?.params;

  const { address, name } = selectedEvent;

  const mapRef = React.useRef<MapView>(null);

  useEffect(() => {
    return () => {
      setMapRegion({
        latitude: 28.6139,
        longitude: 77.209,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      })
    }
  }, []);


  useEffect(() => {
    if (props.route.params.selectedEvent?.latitude && props.route.params.selectedEvent?.longitude) {
      const newRegion = {
        latitude: selectedEvent.latitude,
        longitude: selectedEvent.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      };
      setMapRegion(newRegion);
      mapRef.current?.animateToRegion(newRegion, 1000); // smooth transition
    }
  }, [props.route.params, selectedEvent.latitude, selectedEvent.longitude]);

  return (
    <View style={styles.container}>
      <AppBarHeader navigation={navigation} title='Event Map' showBack showMenu={false} />
      {selectedEvent &&
        (
          <MapView
            key={selectedEvent?.id ? `${mapRegion.latitude}-${mapRegion.longitude}` : "map_key"}
            ref={mapRef} style={styles.mapStyle} region={mapRegion}>
            <Marker
              coordinate={{ latitude: mapRegion.latitude, longitude: mapRegion.longitude }}
              pinColor="red"
              title={name ?? "Event Name"}
              description={address ?? "No address provided"}
            />
          </MapView>
        )
      }
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
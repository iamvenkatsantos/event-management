// src/screens/MapScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { UrlTile, Marker } from 'react-native-maps';
import { EventMapNavigationProp } from '../../../navigation/main';

const MapScreen = (props: EventMapNavigationProp) => {
  const { selectedEvent } = props.route?.params;

  const { address, latitude, longitude, name } = selectedEvent;
  console.log("MapScreen selectedEvent:", selectedEvent);

  if (latitude !== undefined && longitude !== undefined) {
    return (

      <View style={styles.container}>
        <MapView
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: 13.0843,
            longitude: 80.2705,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <UrlTile
            urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maximumZ={19}
            flipY={false}
          />
          <Marker
            coordinate={{
              latitude,
              longitude,
            }}
            title={name ?? "Event Name"}
            description={address ?? "No address provided"}
          />
        </MapView>
      </View>
    );
  } else {
    return null
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
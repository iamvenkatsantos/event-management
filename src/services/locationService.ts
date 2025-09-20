import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import { check, request, PERMISSIONS, RESULTS, Permission } from 'react-native-permissions';

export interface LocationData {
  latitude: number;
  longitude: number;
  accuracy?: number;
  address?: string;
}

export interface LocationServiceResult {
  success: boolean;
  location?: LocationData;
  error?: string;
  permissionStatus?: 'granted' | 'denied' | 'blocked' | 'unavailable';
  locationServicesEnabled?: boolean;
}

export interface LocationStatus {
  permissionGranted: boolean;
  locationServicesEnabled: boolean;
  canRequest: boolean;
  permissionStatus: 'granted' | 'denied' | 'blocked' | 'unavailable';
}

class LocationService {
  private watchId: number | null = null;

  /**
   * Get the appropriate permission for the current platform
   */
  private getLocationPermission(): Permission {
    if (Platform.OS === 'ios') {
      return PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    } else {
      return PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    }
  }

  /**
   * Request location permission from the user
   */
  async requestLocationPermission(): Promise<boolean> {
    try {
      const permission = this.getLocationPermission();
      const result = await request(permission);
      
      switch (result) {
        case RESULTS.GRANTED:
          console.log('Location permission granted');
          return true;
        case RESULTS.DENIED:
          console.log('Location permission denied');
          return false;
        case RESULTS.BLOCKED:
          console.log('Location permission blocked');
          Alert.alert(
            'Location Permission',
            'Location access is blocked. Please enable it in Settings to see nearby events.',
            [{ text: 'OK' }]
          );
          return false;
        default:
          return false;
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
      return false;
    }
  }

  /**
   * Check if location permission is granted
   */
  async hasLocationPermission(): Promise<boolean> {
    try {
      const permission = this.getLocationPermission();
      const result = await check(permission);
      return result === RESULTS.GRANTED;
    } catch (error) {
      console.error('Error checking location permission:', error);
      return false;
    }
  }

  /**
   * Get detailed permission status
   */
  async getPermissionStatus(): Promise<'granted' | 'denied' | 'blocked' | 'unavailable'> {
    try {
      const permission = this.getLocationPermission();
      const result = await check(permission);
      
      switch (result) {
        case RESULTS.GRANTED:
          return 'granted';
        case RESULTS.DENIED:
          return 'denied';
        case RESULTS.BLOCKED:
          return 'blocked';
        case RESULTS.UNAVAILABLE:
        default:
          return 'unavailable';
      }
    } catch (error) {
      console.error('Error getting permission status:', error);
      return 'unavailable';
    }
  }

  /**
   * Check if location services are enabled on the device
   */
  async isLocationServicesEnabled(): Promise<boolean> {
    return new Promise((resolve) => {
      try {
        // For Android, we can check if location services are enabled
        if (Platform.OS === 'android') {
          // This is a simple check - in production you might want to use a more robust method
          Geolocation.getCurrentPosition(
            () => resolve(true),
            (error) => {
              if (error.code === 2) { // POSITION_UNAVAILABLE typically means location services are off
                resolve(false);
              } else {
                resolve(true); // Other errors don't necessarily mean location services are disabled
              }
            },
            { timeout: 5000, maximumAge: 0 }
          );
        } else {
          // For iOS, assume location services are available if we can check permissions
          resolve(true);
        }
      } catch (error) {
        console.error('Error checking location services:', error);
        resolve(false);
      }
    });
  }

  /**
   * Get comprehensive location status
   */
  async getLocationStatus(): Promise<LocationStatus> {
    try {
      const [permissionStatus, locationServicesEnabled] = await Promise.all([
        this.getPermissionStatus(),
        this.isLocationServicesEnabled()
      ]);

      return {
        permissionGranted: permissionStatus === 'granted',
        locationServicesEnabled,
        canRequest: permissionStatus === 'denied', // Can only request if denied, not if blocked
        permissionStatus
      };
    } catch (error) {
      console.error('Error getting location status:', error);
      return {
        permissionGranted: false,
        locationServicesEnabled: false,
        canRequest: false,
        permissionStatus: 'unavailable'
      };
    }
  }

  /**
   * Get current location
   */
  async getCurrentLocation(): Promise<LocationServiceResult> {
    return new Promise(async (resolve) => {
      try {
        const hasPermission = await this.hasLocationPermission();
        
        if (!hasPermission) {
          const permissionGranted = await this.requestLocationPermission();
          if (!permissionGranted) {
            resolve({
              success: false,
              error: 'Location permission denied'
            });
            return;
          }
        }

        const config = {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          forceRequestLocation: true,
          forceLocationManager: false,
          showLocationDialog: true,
        };

        Geolocation.getCurrentPosition(
          (position) => {
            const location: LocationData = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
            };

            console.log('Current location obtained:', location);
            resolve({
              success: true,
              location
            });
          },
          (error) => {
            console.error('Error getting location:', error);
            let errorMessage = 'Failed to get location';
            
            switch (error.code) {
              case 1: // PERMISSION_DENIED
                errorMessage = 'Location permission denied';
                break;
              case 2: // POSITION_UNAVAILABLE
                errorMessage = 'Location unavailable';
                break;
              case 3: // TIMEOUT
                errorMessage = 'Location request timeout';
                break;
              default:
                errorMessage = error.message || 'Unknown location error';
            }

            resolve({
              success: false,
              error: errorMessage
            });
          },
          config
        );
      } catch (error) {
        console.error('Unexpected error in getCurrentLocation:', error);
        resolve({
          success: false,
          error: 'Unexpected location error'
        });
      }
    });
  }

  /**
   * Get address from coordinates using reverse geocoding
   * This is a simple implementation - in production you might want to use
   * Google Maps Geocoding API or similar service
   */
  async reverseGeocode(latitude: number, longitude: number): Promise<string> {
    try {
      // Simple approach: try to use a free geocoding service or generate a readable location
      // For demo purposes, we'll generate a simple location based on coordinates
      const lat = parseFloat(latitude.toFixed(4));
      const lng = parseFloat(longitude.toFixed(4));
      
      // Very basic region detection based on coordinates (for demo)
      let region = 'Unknown Location';
      
      if (lat >= 6 && lat <= 38 && lng >= 68 && lng <= 98) {
        // India region approximation
        if (lat >= 28 && lat <= 30 && lng >= 76 && lng <= 78) region = 'Delhi, India';
        else if (lat >= 18.5 && lat <= 19.5 && lng >= 72.5 && lng <= 73.5) region = 'Mumbai, India';
        else if (lat >= 12.5 && lat <= 13.5 && lng >= 77 && lng <= 78) region = 'Bangalore, India';
        else if (lat >= 12.5 && lat <= 13.5 && lng >= 80 && lng <= 81) region = 'Chennai, India';
        else if (lat >= 17 && lat <= 18 && lng >= 78 && lng <= 79) region = 'Hyderabad, India';
        else region = 'India';
      } else if (lat >= 25 && lat <= 49 && lng >= -125 && lng <= -66) {
        region = 'United States';
      } else if (lat >= 49 && lat <= 83 && lng >= -141 && lng <= -52) {
        region = 'Canada';
      } else if (lat >= 35 && lat <= 71 && lng >= -10 && lng <= 70) {
        region = 'Europe';
      }
      
      return region;
    } catch (error) {
      console.error('Error reverse geocoding:', error);
      return `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
    }
  }

  /**
   * Get current location with address
   */
  async getCurrentLocationWithAddress(): Promise<LocationServiceResult> {
    const locationResult = await this.getCurrentLocation();
    
    if (locationResult.success && locationResult.location) {
      try {
        const address = await this.reverseGeocode(
          locationResult.location.latitude,
          locationResult.location.longitude
        );
        
        return {
          success: true,
          location: {
            ...locationResult.location,
            address
          }
        };
      } catch (error) {
        console.error('Error getting address:', error);
        // Return location without address if geocoding fails
        return locationResult;
      }
    }
    
    return locationResult;
  }

  /**
   * Watch location changes (for real-time updates)
   */
  watchLocation(
    onLocationChange: (location: LocationData) => void,
    onError: (error: string) => void
  ): void {
    this.stopWatchingLocation(); // Stop any existing watch

    const config = {
      enableHighAccuracy: true,
      distanceFilter: 100, // Update every 100 meters
      interval: 30000, // Update every 30 seconds
      fastestInterval: 10000, // Fastest update every 10 seconds
    };

    this.watchId = Geolocation.watchPosition(
      (position) => {
        const location: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        };
        onLocationChange(location);
      },
      (error) => {
        console.error('Error watching location:', error);
        onError(error.message);
      },
      config
    );
  }

  /**
   * Stop watching location changes
   */
  stopWatchingLocation(): void {
    if (this.watchId !== null) {
      Geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }

  /**
   * Calculate distance between two coordinates (in kilometers)
   */
  calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) *
        Math.cos(this.toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return Math.round(distance * 100) / 100; // Round to 2 decimal places
  }

  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}

export default new LocationService();

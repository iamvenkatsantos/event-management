import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import locationService, { LocationData, LocationServiceResult, LocationStatus } from '../services/locationService';

export interface LocationState {
  currentLocation: LocationData | null;
  loading: boolean;
  error: string | null;
  permissionGranted: boolean;
  locationServicesEnabled: boolean;
  permissionStatus: 'granted' | 'denied' | 'blocked' | 'unavailable' | 'unknown';
  lastUpdated: string | null;
  isInitialized: boolean;
}

const initialState: LocationState = {
  currentLocation: null,
  loading: false,
  error: null,
  permissionGranted: false,
  locationServicesEnabled: false,
  permissionStatus: 'unknown',
  lastUpdated: null,
  isInitialized: false,
};

// Async thunks for location operations
export const getCurrentLocation = createAsyncThunk(
  'location/getCurrentLocation',
  async (withAddress: boolean = true, { rejectWithValue }) => {
    try {
      let result: LocationServiceResult;
      
      if (withAddress) {
        result = await locationService.getCurrentLocationWithAddress();
      } else {
        result = await locationService.getCurrentLocation();
      }

      if (result.success && result.location) {
        return {
          location: result.location,
          timestamp: new Date().toISOString()
        };
      } else {
        return rejectWithValue(result.error || 'Failed to get location');
      }
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

export const checkLocationPermission = createAsyncThunk(
  'location/checkPermission',
  async (_, { rejectWithValue }) => {
    try {
      const hasPermission = await locationService.hasLocationPermission();
      return hasPermission;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

export const requestLocationPermission = createAsyncThunk(
  'location/requestPermission',
  async (_, { rejectWithValue }) => {
    try {
      const granted = await locationService.requestLocationPermission();
      return granted;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

export const getLocationStatus = createAsyncThunk(
  'location/getLocationStatus',
  async (_, { rejectWithValue }) => {
    try {
      const status = await locationService.getLocationStatus();
      return status;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearLocation: (state) => {
      state.currentLocation = null;
      state.lastUpdated = null;
      state.error = null;
    },
    setLocation: (state, action: PayloadAction<LocationData>) => {
      state.currentLocation = action.payload;
      state.lastUpdated = new Date().toISOString();
      state.error = null;
    },
    updateLocationAddress: (state, action: PayloadAction<string>) => {
      if (state.currentLocation) {
        state.currentLocation.address = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    // Get current location
    builder
      .addCase(getCurrentLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.currentLocation = action.payload.location;
        state.lastUpdated = action.payload.timestamp;
        state.error = null;
        state.permissionGranted = true;
      })
      .addCase(getCurrentLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        
        // If permission-related error, update permission status
        const errorMessage = action.payload as string;
        if (errorMessage.includes('permission')) {
          state.permissionGranted = false;
        }
      });

    // Check location permission
    builder
      .addCase(checkLocationPermission.fulfilled, (state, action) => {
        state.permissionGranted = action.payload;
      })
      .addCase(checkLocationPermission.rejected, (state, action) => {
        state.permissionGranted = false;
        state.error = action.payload as string;
      });

    // Request location permission
    builder
      .addCase(requestLocationPermission.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestLocationPermission.fulfilled, (state, action) => {
        state.loading = false;
        state.permissionGranted = action.payload;
        state.error = null;
      })
      .addCase(requestLocationPermission.rejected, (state, action) => {
        state.loading = false;
        state.permissionGranted = false;
        state.error = action.payload as string;
      });

    // Get location status
    builder
      .addCase(getLocationStatus.fulfilled, (state, action) => {
        state.permissionGranted = action.payload.permissionGranted;
        state.locationServicesEnabled = action.payload.locationServicesEnabled;
        state.permissionStatus = action.payload.permissionStatus;
        state.isInitialized = true;
      })
      .addCase(getLocationStatus.rejected, (state, action) => {
        state.permissionGranted = false;
        state.locationServicesEnabled = false;
        state.permissionStatus = 'unavailable';
        state.error = action.payload as string;
        state.isInitialized = true;
      });
  },
});

export const { 
  clearError, 
  clearLocation, 
  setLocation, 
  updateLocationAddress 
} = locationSlice.actions;

export default locationSlice.reducer;

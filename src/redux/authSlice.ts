import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import socialAuthService, { SocialUser } from '../services/socialAuthService';

export interface AuthState {
  isAuthenticated: boolean;
  user: SocialUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Async thunks for social login
export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const result = await socialAuthService.signInWithGoogle();
      if (result.success && result.user) {
        return result.user;
      } else {
        return rejectWithValue(result.error || 'Google login failed');
      }
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);


export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { getState }) => {
    const state = getState() as { auth: AuthState };
    const user = state.auth.user;
    
    if (user?.provider === 'google') {
      await socialAuthService.signOutGoogle();
    }
    
    return null;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setUser: (state, action: PayloadAction<SocialUser | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    updateGuestInfo: (state, action: PayloadAction<{ email: string; phone: string }>) => {
      if (state.user && state.user.provider === 'guest') {
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
      }
    },
  },
  extraReducers: (builder) => {
    // Google login
    builder
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload as string;
      });

    // Logout
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Logout failed';
      });
  },
});

export const { clearError, setUser, updateGuestInfo } = authSlice.actions;
export default authSlice.reducer;

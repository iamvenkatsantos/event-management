export interface IColorPalette {
  primary: string;
  primaryContainer: string;
  secondary: string;
  secondaryContainer: string;
  tertiary: string;
  tertiaryContainer: string;
  surface: string;
  surfaceVariant: string;
  surfaceDisabled: string;
  background: string;
  error: string;
  errorContainer: string;
  onPrimary: string;
  onPrimaryContainer: string;
  onSecondary: string;
  onSecondaryContainer: string;
  onTertiary: string;
  onTertiaryContainer: string;
  onSurface: string;
  onSurfaceVariant: string;
  onSurfaceDisabled: string;
  onError: string;
  onErrorContainer: string;
  onBackground: string;
  outline: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  backdrop: string;
}

const paletts = {
  ThemeColor: <IColorPalette>{
    primary: '#6C5CE7', // Modern purple
    primaryContainer: '#F8F7FF',
    secondary: '#FF6B6B', // Coral accent
    secondaryContainer: '#FFF0F0',
    tertiary: '#4ECDC4', // Teal accent
    tertiaryContainer: '#F0FFFE',
    surface: '#FFFFFF',
    surfaceVariant: '#F8F9FB',
    surfaceDisabled: '#E8E9ED',
    background: '#FAFBFC', // Slightly off-white
    error: '#FF5252',
    errorContainer: '#FFEBEE',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#2D1B69',
    onSecondary: '#FFFFFF',
    onSecondaryContainer: '#5D1A1A',
    onTertiary: '#FFFFFF',
    onTertiaryContainer: '#0F3A37',
    onSurface: '#2C3E50', // Dark blue-gray for text
    onSurfaceVariant: '#64748B', // Lighter blue-gray
    onSurfaceDisabled: '#94A3B8',
    onError: '#FFFFFF',
    onErrorContainer: '#B71C1C',
    onBackground: '#1E293B', // Rich dark for primary text
    outline: '#E2E8F0',
    inverseSurface: '#1E293B',
    inverseOnSurface: '#F8FAFC',
    inversePrimary: '#A78BFA',
    backdrop: 'rgba(30, 41, 59, 0.4)',
  },
};

interface ICustomPaletts {
  linkTextColor: string;
}

export const customPaletts: ICustomPaletts = {
  linkTextColor: 'rgba(38, 163, 241, 1)',
};

export default paletts;

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
    primary: '#667EEA', // Modern gradient-friendly purple-blue
    primaryContainer: '#F7F9FF',
    secondary: '#764BA2', // Deep purple complement
    secondaryContainer: '#F5F3FF',
    tertiary: '#F093FB', // Bright pink accent
    tertiaryContainer: '#FEF7FF',
    surface: '#FFFFFF',
    surfaceVariant: '#F8FAFE',
    surfaceDisabled: '#E8EBF0',
    background: '#FAFBFF', // Pure, clean background
    error: '#EF4444',
    errorContainer: '#FEF2F2',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#1E1B4B',
    onSecondary: '#FFFFFF',
    onSecondaryContainer: '#2D1B69',
    onTertiary: '#FFFFFF',
    onTertiaryContainer: '#701A75',
    onSurface: '#0F172A', // Rich, readable dark text
    onSurfaceVariant: '#475569', // Balanced contrast
    onSurfaceDisabled: '#94A3B8',
    onError: '#FFFFFF',
    onErrorContainer: '#DC2626',
    onBackground: '#020617', // Deep, crisp text
    outline: '#E2E8F0',
    inverseSurface: '#0F172A',
    inverseOnSurface: '#F8FAFC',
    inversePrimary: '#A5B4FC',
    backdrop: 'rgba(15, 23, 42, 0.4)',
  },
};

interface ICustomPaletts {
  linkTextColor: string;
  gradients: {
    primary: string[];
    secondary: string[];
    tertiary: string[];
    success: string[];
    warm: string[];
    surface: string[];
  };
  shadows: {
    primary: string;
    secondary: string;
    elevation: {
      small: string;
      medium: string;
      large: string;
    };
  };
  success: string;
  warning: string;
  info: string;
}

export const customPaletts: ICustomPaletts = {
  linkTextColor: '#667EEA',
  gradients: {
    primary: ['#667EEA', '#764BA2'], // Purple-blue to deep purple
    secondary: ['#F093FB', '#F5576C'], // Pink to red gradient
    tertiary: ['#4FACFE', '#00F2FE'], // Blue to cyan
    success: ['#11998E', '#38EF7D'], // Teal to green
    warm: ['#FA709A', '#FEE140'], // Pink to yellow
    surface: ['#FFFFFF', '#F8FAFE'], // Light surface gradient
  },
  shadows: {
    primary: 'rgba(102, 126, 234, 0.3)',
    secondary: 'rgba(118, 75, 162, 0.3)',
    elevation: {
      small: 'rgba(15, 23, 42, 0.08)',
      medium: 'rgba(15, 23, 42, 0.12)',
      large: 'rgba(15, 23, 42, 0.16)',
    },
  },
  success: '#10B981',
  warning: '#F59E0B',
  info: '#3B82F6',
};

export default paletts;

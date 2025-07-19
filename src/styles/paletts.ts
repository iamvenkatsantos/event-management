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
    primary: '#417BFF',
    primaryContainer: 'rgb(208, 235, 251)',
    secondary: 'rgba(255, 255, 227, 1)',
    secondaryContainer: 'rgba(255, 255, 227, 1)',
    tertiary: '#000000',
    tertiaryContainer: '#000000',
    surface: 'rgba(248, 248, 248, 1)',
    surfaceVariant: 'rgba(240,240,240,1)',
    surfaceDisabled: 'rgba(230, 230, 230, 1)',
    background: 'rgba(255, 255, 255, 1)',
    error: 'rgba(245, 67, 40, 1)',
    errorContainer: 'rgba(255, 198, 198, 1)',
    onPrimary: 'rgba(255, 255, 255, 1)',
    onPrimaryContainer: 'rgba(0, 0, 0, 1)',
    onSecondary: 'rgba(195, 195, 195, 1)',
    onSecondaryContainer: 'rgba(0, 0, 0, 1)',
    onTertiary: 'rgba(132, 132, 132, 1)',
    onTertiaryContainer: 'rgba(175, 175, 175, 1)',
    onSurface: 'rgba(116, 116, 116, 1)',
    onSurfaceVariant: 'rgba(195, 195, 195, 1)',
    onSurfaceDisabled: 'rgba(132, 132, 132, 0.5)',
    onError: 'rgba(2, 2, 2, 1)',
    onErrorContainer: 'rgba(2, 2, 2, 1)',
    onBackground: 'rgba(0, 0, 0, 1)',
    outline: 'rgba(213, 213, 213, 1)',
    inverseSurface: '#000000',
    inverseOnSurface: '#000000',
    inversePrimary: '#000000',
    backdrop: 'rgba(0, 0, 0, 0.2)',
  },
};

interface ICustomPaletts {
  linkTextColor: string;
}

export const customPaletts: ICustomPaletts = {
  linkTextColor: 'rgba(38, 163, 241, 1)',
};

export default paletts;

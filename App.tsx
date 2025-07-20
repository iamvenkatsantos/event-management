import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';

import AppLoader from './src/components/loader';
import ToastHandler from './src/components/toast';
import AppNavigator from './src/navigation/main';

import { store } from './src/redux/store';

import './src/common/global';
import Translation from './src/translation';

function App(): React.JSX.Element {
  useEffect(() => {
    Translation.initializeTranslation();
  }, []);

  return (
    <ReduxProvider store={store}>
      <StatusBar barStyle="default" />
      <AppNavigator />
      <AppLoader />
      <ToastHandler />
    </ReduxProvider>
  );
}

export default App;

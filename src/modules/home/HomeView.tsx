import React from 'react';
import Text from '../../components/text';

import useHomeViewModal from './useHomeViewModal';
import AppScreen from '../../components/appscreen';

export default function HomeView() {

  const { navigation } = useHomeViewModal();

  return (
    <AppScreen title={translate('home_screen')} showMenu showBack={false} navigation={navigation}  >
      <Text>Hi {translate('home_screen')}</Text>
    </AppScreen>
  );
}

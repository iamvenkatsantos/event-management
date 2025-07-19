import React from 'react';
import { View } from 'react-native';

import Text from '../../../components/text';

import useLoadingViewModal from './useLoadingViewModal';

export default function LoadingView() {

  const { } = useLoadingViewModal();

  return (
    <View>
      <Text>Hi Good Moring,loading </Text>
    </View>
  );
}

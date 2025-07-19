import React from 'react';
import { View } from 'react-native';

import Text from '../../../components/text';

import useLoginViewModal from './useLoginViewModal';

export default function LoginView() {

  const { } = useLoginViewModal();

  return (
    <View>
      <Text>Hi Good Moring,Login </Text>
    </View>
  );
}

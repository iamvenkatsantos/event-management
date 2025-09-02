import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../navigation/main';
import { colors } from '../../../styles';

const PaymentSuccessView = () => {
  const navigation: NavigationProp<'PaymentSuccess'> = useNavigation();

  const handleContinue = () => {
    // Navigate back to event list
    navigation.navigate('EventList');
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.onBackground,
        textAlign: 'center',
        marginBottom: 40,
      }}>
        {translate('paid_successful')}
      </Text>
      
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 25,
          marginTop: 40,
        }}
        onPress={handleContinue}
      >
        <Text style={{
          color: colors.onPrimary,
          fontSize: 16,
          fontWeight: '600',
        }}>
          {translate('continue')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccessView;

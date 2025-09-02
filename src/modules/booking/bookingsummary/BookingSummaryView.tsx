import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBarHeader from '../../../components/appbarheader';
import { NavigationProp } from '../../../navigation/main';
import { colors } from '../../../styles';

const BookingSummaryView = () => {
  const navigation: NavigationProp<'BookingSummary'> = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppBarHeader navigation={navigation} title="Booking Summary" showBack showMenu={false} />
      
      <ScrollView style={{ padding: 20 }}>
        <View style={{
          backgroundColor: colors.surface,
          borderRadius: 15,
          padding: 20,
          marginBottom: 20,
        }}>
          <View style={{ height: 100, backgroundColor: colors.surfaceVariant, borderRadius: 10, marginBottom: 15 }} />
          
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.onBackground,
            textAlign: 'center',
            marginBottom: 10,
          }}>
            Event Name
          </Text>
          
          <Text style={{
            fontSize: 14,
            color: colors.onSurface,
            textAlign: 'center',
            marginBottom: 20,
          }}>
            Time and Date
          </Text>
          
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: colors.outline,
          }}>
            <Text style={{ fontSize: 16, color: colors.onBackground }}>Premium</Text>
            <Text style={{ fontSize: 16, color: colors.onBackground }}>1</Text>
          </View>
          
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: colors.outline,
          }}>
            <Text style={{ fontSize: 16, color: colors.onBackground }}>Gold</Text>
            <Text style={{ fontSize: 16, color: colors.onBackground }}>1</Text>
          </View>
          
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
            marginTop: 10,
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.onBackground }}>Total</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.onBackground }}>$150</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookingSummaryView;

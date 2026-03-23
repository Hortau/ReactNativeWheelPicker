/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Platform,
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {SystemBars} from 'react-native-edge-to-edge';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  WheelPicker,
  TimePicker,
  DatePicker,
} from '@hortau/react-native-wheel-picker-android';

const weekdays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
];

const App: () => JSX.Element = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [, setTime] = useState(() => new Date());
  const [, setDate] = useState(() => new Date());
  return (
    <SafeAreaView>
      <SystemBars />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.weekdays}>{weekdays[selectedItem]}</Text>
        <WheelPicker
          onItemSelected={(index: any) => setSelectedItem(index)}
          data={weekdays}
        />
        <TimePicker
          initPosition={0}
          style={styles.picker}
          onTimeSelected={(selectedTime: any) => {
            setTime(selectedTime);
          }}
        />
        <View style={styles.divider} />
        <DatePicker
          initPosition={0}
          style={styles.picker}
          mode={'date'}
          onDateSelected={(selectedDate: any) => setDate(selectedDate)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
  },
  picker: {
    width: Platform.OS === 'ios' ? 'auto' : 90,
    height: 200,
  },
  weekdays: {
    padding: 5,
  },
});

export default App;

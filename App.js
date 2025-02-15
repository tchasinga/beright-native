import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todoscreens from './src/screen/Todoscreens';
import * as Updates from 'expo-updates';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export default function App() {
 
  return (
    <View>
     <Todoscreens />
      <StatusBar style="auto" />
    </View>
  );
}



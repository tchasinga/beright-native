import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todoscreens from './src/screen/Todoscreens';

export default function App() {
  return (
    <View>
     <Todoscreens />
      <StatusBar style="auto" />
    </View>
  );
}



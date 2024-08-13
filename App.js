import {Text, View, Image , StyleSheet, SafeAreaView} from 'react-native';
import Todoscreens from './src/screen/Todoscreens';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
    <>
    <StatusBar style='auto'/>
     <View>
      <Todoscreens/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
import {Text, View, Image , StyleSheet, SafeAreaView} from 'react-native';
import Todoscreens from './src/screen/Todoscreens';
import DefaultUi from './src/Components/DefaultUi.js';

export default function App() {
  return (
    <View>
      <Todoscreens/>
      <DefaultUi/>
    </View>
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
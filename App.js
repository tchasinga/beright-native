import {Text, View, Image , StyleSheet, SafeAreaView} from 'react-native';
import Todoscreens from './src/screen/Todoscreens';

export default function App() {
  return (
    <View>
      <Todoscreens/>
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
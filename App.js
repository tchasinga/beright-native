import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImgOne from './assets/images/pexelslisettkruusimae.jpg';
import Todoscreens from './src/screen/Todoscreens';

export default function App() {
  return (
    <View style={styles.container}>
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
  image: {
    width: "100%",
    height: 100
  },
  texting: {
    color: '#121313',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: "3%"
  },
});

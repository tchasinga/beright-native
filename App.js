import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImgOne from './assets/adaptive-icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={ImgOne} style={styles.image} />
      <Text style={styles.texting}>This is my main App...</Text>
      <StatusBar style="auto" />
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
    width: 200,
    height: 200,
  },
  texting: {
    color: '#60efff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

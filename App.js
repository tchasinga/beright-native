import {Text, View, Image , StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>New design is added now </Text>
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
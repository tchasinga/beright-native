import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todoscreens from './src/screen/Todoscreens';
import * as Updates from 'expo-updates';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export default function App() {
 
useEffect(() => {
  async function checkForUpdates() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert('Update available', 'Restart the app to apply the latest update.', [
          { text: 'Restart now', onPress: () => Updates.reloadAsync() },
          { text: 'Later', style: 'cancel' }
        ]);
      }
    } catch (e) {
      console.error(e);
    }
  }

  checkForUpdates();
}, []);

  return (
    <View>
     <Todoscreens />
      <StatusBar style="auto" />
    </View>
  );
}



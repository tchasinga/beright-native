import { StyleSheet, Text, View , SafeAreaView, TextInput} from 'react-native'
import React from 'react'
import Global from '../Global/Global'


const Todoscreens = () => {
  return (
    <SafeAreaView style={Global.androidSafeArea}>
      <View style={Global.AddingMargin}>
        <Text>Todo Screens !!</Text>
        <TextInput style={Global.input}  placeholder="Add Todo" />
      </View>
    </SafeAreaView>
  )
}

export default Todoscreens

const styles = StyleSheet.create({})
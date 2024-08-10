import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Global from '../Global/Global';

const AsiwajuData = [
  {
    id: 1,
    name: "Asiwaju learning",
  },
  {
    id: 2,
    name: "Tchasinga the person",
  }
];

const Todoscreens = () => {
  
  const renderTodos = ({ item, index }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={Global.androidSafeArea}>
      <View style={Global.AddingMargin}>
        <Text>Todo Screens !!</Text>
        <TextInput style={Global.input} placeholder="Add Todo" />
        <TouchableOpacity style={Global.ButionBtn}>
          <Text>Add Todo</Text>
        </TouchableOpacity>

        {/* Data viewer... */}
        <FlatList data={AsiwajuData} renderItem={renderTodos} />
      </View>
    </SafeAreaView>
  );
};

export default Todoscreens;
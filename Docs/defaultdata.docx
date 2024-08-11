import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Global from '../Global/Global';
import { IconButton } from 'react-native-paper';
import DefaultUi from '../Components/DefaultUi';

const Todoscreens = () => {
  // Initialize the state
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [edit, setEdit] = useState(null);

  // Handle editing a todo item
  const handlerEditTodoList = (todo) => {
    setEdit(todo);
    setTodo(todo.name);
  };

  // Render data for Todo...
  const renderTodos = ({ item, index }) => {
    return (
      <View style={Global.designResult}>
        <Text style={Global.Texter}>{item.name}</Text>
        <IconButton icon="pencil" color="red" size={20} onPress={() => handlerEditTodoList(item)} />
        <IconButton icon="delete" color="red" size={20} onPress={() => handDeleteTodo(item.id)} />
      </View>
    ); 
  };

  // Add a todo item
  const handAddTodo = () => {
    if (todo.trim()) {
      setTodoList([...todolist, { id: Date.now().toString(), name: todo }]);
      setTodo("");
    }
  };

  // Update a todo item
  const handAddTodoUpdate = () => {
    if (todo.trim()) {
      const updatedTodo = todolist.map((item) => {
        if (item.id === edit.id) {
          return { ...item, name: todo };
        }
        return item;
      });
      setTodoList(updatedTodo);
      setEdit(null);
      setTodo("");
    }
  };

  // Delete a todo item
  const handDeleteTodo = (id) => {
    const newTodo = todolist.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };

  return (
    <SafeAreaView style={Global.androidSafeArea}>
      <View style={Global.AddingMargin}>
        <Text>Todo Screens !!</Text>
        <TextInput 
          style={Global.input} 
          placeholder="Add Todo" 
          value={todo} 
          onChangeText={(userText) => setTodo(userText)} 
        />
        
        {
          edit ? (
            <TouchableOpacity style={Global.ButionBtn} onPress={handAddTodoUpdate}>
              <Text>Update Todo</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={Global.ButionBtn} onPress={handAddTodo}>
              <Text>Add Todo</Text>
            </TouchableOpacity>
          )
        }

        {/* Data viewer... */}
        <FlatList data={todolist} renderItem={renderTodos} keyExtractor={(item) => item.id} />

        {/* Check if todo list is empty */}
        {todolist.length === 0 && (
          <View>
            <DefaultUi />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Todoscreens;

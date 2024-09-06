import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from 'react-native-paper';
import DefaultUi from '../Components/DefaultUi';
import * as Notifications from 'expo-notifications';
import Global from '../Global/Global';

const Todoscreens = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [edit, setEdit] = useState(null);

  // Animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Load todos from AsyncStorage
  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem('todos');
      if (storedTodos) {
        setTodoList(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error('Failed to load todos from storage:', error);
    }
  };

  // Save todos to AsyncStorage
  const saveTodos = async (todos) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Failed to save todos to storage:', error);
    }
  };

  // Handle editing a todo item
  const handlerEditTodoList = (todo) => {
    setEdit(todo);
    setTodo(todo.name);
  };

  // Render data for Todo...
  const renderTodos = ({ item }) => (
    <Animated.View style={[Global.designResult, { opacity: fadeAnim }]}>
      <Text style={Global.Texter}>{item.name}</Text>
      <Text style={Global.dateText}>{new Date(item.date).toLocaleString()}</Text>
      <IconButton icon="pencil" color="red" size={20} onPress={() => handlerEditTodoList(item)} />
      <IconButton icon="delete" color="red" size={20} onPress={() => handDeleteTodo(item.id)} />
    </Animated.View>
  );

  // Add a todo item
  const handAddTodo = () => {
    if (todo.trim()) {
      const newTodoList = [...todolist, { id: Date.now().toString(), name: todo, date: new Date() }];
      setTodoList(newTodoList);
      saveTodos(newTodoList);
      setTodo("");
      scheduleNotification(todo);
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
      saveTodos(updatedTodo);
      setEdit(null);
      setTodo("");
    }
  };

  // Delete a todo item
  const handDeleteTodo = (id) => {
    const newTodo = todolist.filter((item) => item.id !== id);
    setTodoList(newTodo);
    saveTodos(newTodo);
  };

  // Schedule a notification
  const scheduleNotification = async (todo) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Todo Added",
        body: `Your todo "${todo}" has been added!`,
      },
      trigger: { seconds: 1 }, // Adjust this as needed
    });
  };


  useEffect(() => {
    loadTodos();
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={Global.androidSafeArea}>
      <View style={Global.header}>
        <Text style={Global.headerText}>Manager Todos</Text>
      </View>
      <View style={Global.AddingMargin}>
        <TextInput 
          style={Global.input} 
          placeholder="Add Todo" 
          value={todo} 
          onChangeText={(userText) => setTodo(userText)} 
        />
        {
          edit ? (
            <TouchableOpacity style={Global.ButionBtn} onPress={handAddTodoUpdate}>
              <Text style={Global.buttonText}>Update Todo</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={Global.ButionBtn} onPress={handAddTodo}>
              <Text style={Global.buttonText}>Add Todo</Text>
            </TouchableOpacity>
          )
        }
        <FlatList data={todolist} renderItem={renderTodos} keyExtractor={(item) => item.id} />
        {todolist.length === 0 && (
          <DefaultUi />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Todoscreens;

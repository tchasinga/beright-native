import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton, Checkbox, Button } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';
import Global from '../Global/Global';
import { Picker } from '@react-native-picker/picker';
import DefaultUi from '../Components/DefaultUi';

const Todoscreens = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [edit, setEdit] = useState(null);
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Load todos from AsyncStorage
  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem('todos');
      if (storedTodos) {
        setTodoList(JSON.parse(storedTodos));
        setFilteredTodoList(JSON.parse(storedTodos));
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
    setPriority(todo.priority);
    setDueDate(new Date(todo.dueDate));
  };

  // Render data for Todo...
  const renderTodos = ({ item }) => (
    <Animated.View style={[Global.designResult, { opacity: fadeAnim }]}>
      <View style={{flex: 1}}>
        <Text style={Global.Texter}>{item.name}</Text>
        <Text style={Global.dateText}>Due: {new Date(item.dueDate).toLocaleString()}</Text>
        <Text style={Global.priorityText}>Priority: {item.priority}</Text>
      </View>
      <IconButton icon="pencil" color="blue" size={20} onPress={() => handlerEditTodoList(item)} />
      <IconButton icon="delete" color="red" size={20} onPress={() => handDeleteTodo(item.id)} />
    </Animated.View>
  );

  // Add a todo item
  const handAddTodo = () => {
    if (todo.trim()) {
      const newTodoList = [...todolist, { id: Date.now().toString(), name: todo, priority, dueDate, date: new Date() }];
      setTodoList(newTodoList);
      setFilteredTodoList(newTodoList);
      saveTodos(newTodoList);
      setTodo("");
      setPriority("low");
      setDueDate(new Date());
      scheduleNotification(todo, dueDate);
    }
  };

  // Update a todo item
  const handAddTodoUpdate = () => {
    if (todo.trim()) {
      const updatedTodo = todolist.map((item) => {
        if (item.id === edit.id) {
          return { ...item, name: todo, priority, dueDate };
        }
        return item;
      });
      setTodoList(updatedTodo);
      setFilteredTodoList(updatedTodo);
      saveTodos(updatedTodo);
      setEdit(null);
      setTodo("");
      setPriority("low");
      setDueDate(new Date());
    }
  };

  // Delete a todo item
  const handDeleteTodo = (id) => {
    const newTodo = todolist.filter((item) => item.id !== id);
    setTodoList(newTodo);
    setFilteredTodoList(newTodo);
    saveTodos(newTodo);
  };

  // Schedule a notification
  const scheduleNotification = async (todo, dueDate) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Todo Reminder",
        body: `Your todo "${todo}" is due soon!`,
      },
      trigger: dueDate,
    });
  };

  // Handle date change
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dueDate;
    setShowDatePicker(false);
    setDueDate(currentDate);
  };

  // Handle search query change
  const onSearchChange = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filteredList = todolist.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredTodoList(filteredList);
    } else {
      setFilteredTodoList(todolist);
    }
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
        <Text style={Global.counterText}>Total Todos: {todolist.length}</Text>
      </View>
      <View style={Global.AddingMargin}>
        <TextInput 
          style={Global.input} 
          placeholder="Add Todo" 
          value={todo} 
          onChangeText={(userText) => setTodo(userText)} 
        />
        <Picker
          selectedValue={priority}
          onValueChange={(itemValue) => setPriority(itemValue)}
          style={Global.picker}
        >
          <Picker.Item label="Low Priority" value="low" />
          <Picker.Item label="Medium Priority" value="medium" />
          <Picker.Item label="High Priority" value="high" />
        </Picker>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={Global.datePickerButton}>
          <Text style={Global.datePickerText}>{dueDate.toLocaleString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={dueDate}
            mode="datetime"
            display="default"
            onChange={onDateChange}
          />
        )}
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
        <TextInput
          style={Global.searchInput}
          placeholder="Search Todos"
          value={searchQuery}
          onChangeText={onSearchChange}
        />
        <FlatList data={filteredTodoList} renderItem={renderTodos} keyExtractor={(item) => item.id} />
        {filteredTodoList.length === 0 && (
          <DefaultUi />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Todoscreens;
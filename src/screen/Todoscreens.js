import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Animated, Modal, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';
import Global from '../Global/Global';

const Todoscreens = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [edit, setEdit] = useState(null);
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [priority, setPriority] = useState("Low");
  const [modalVisible, setModalVisible] = useState(false);
  const [label, setLabel] = useState("");
  const [subtasks, setSubtasks] = useState([]);
  const [subtask, setSubtask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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
    setDueDate(new Date(todo.date));
    setPriority(todo.priority);
    setLabel(todo.label || "");
    setSubtasks(todo.subtasks || []);
    setModalVisible(true);
  };

  // Render data for Todo...
  const renderTodos = ({ item }) => (
    <Animated.View style={[Global.designResult, { opacity: fadeAnim }]}>
      <View style={Global.todoHeader}>
        <Text style={Global.dateText}>{new Date(item.date).toLocaleString()}</Text>
        <Text style={Global.priorityText}>{item.priority}</Text>
        <Text style={Global.labelText}>{item.label}</Text>
      </View>
      <View style={Global.todoBody}>
        <Text style={Global.Texter}>{item.name}</Text>
        <View style={Global.subtasksContainer}>
          {item.subtasks && item.subtasks.map(sub => (
            <Text key={sub.id} style={Global.subtaskText}>- {sub.name}</Text>
          ))}
        </View>
        <View style={Global.todoActions}>
          <IconButton icon="pencil" color="blue" size={20} onPress={() => handlerEditTodoList(item)} />
          <IconButton icon="delete" color="red" size={20} onPress={() => handDeleteTodo(item.id)} />
        </View>
      </View>
    </Animated.View>
  );

  // Add a todo item
  const handAddTodo = () => {
    if (todo.trim()) {
      const newTodoList = [...todolist, { id: Date.now().toString(), name: todo, date: dueDate, priority, label, subtasks }];
      setTodoList(newTodoList);
      saveTodos(newTodoList);
      setTodo("");
      setDueDate(new Date());
      setPriority("Low");
      setLabel("");
      setSubtasks([]);
      setModalVisible(false);
      scheduleNotification(todo, dueDate);
    }
  };

  // Update a todo item
  const handAddTodoUpdate = () => {
    if (todo.trim()) {
      const updatedTodo = todolist.map((item) => {
        if (item.id === edit.id) {
          return { ...item, name: todo, date: dueDate, priority, label, subtasks };
        }
        return item;
      });
      setTodoList(updatedTodo);
      saveTodos(updatedTodo);
      setEdit(null);
      setTodo("");
      setDueDate(new Date());
      setPriority("Low");
      setLabel("");
      setSubtasks([]);
      setModalVisible(false);
    }
  };

  // Delete a todo item
  const handDeleteTodo = (id) => {
    const newTodo = todolist.filter((item) => item.id !== id);
    setTodoList(newTodo);
    saveTodos(newTodo);
  };

  // Add a subtask
  const handAddSubtask = () => {
    if (subtask.trim()) {
      const newSubtasks = [...subtasks, { id: Date.now().toString(), name: subtask }];
      setSubtasks(newSubtasks);
      setSubtask("");
    }
  };

  // Schedule a notification
  const scheduleNotification = async (todo, date) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Todo Reminder",
        body: `Your todo "${todo}" is due!`,
      },
      trigger: { date },
    });
  };

  // Filter todos based on search query
  const filteredTodos = todolist.filter(todo =>
    todo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <Text style={Global.headerText}>Manage Todos</Text>
        <Text style={Global.headerText}>Total Todos: {todolist.length}</Text>
      </View>
      <View style={Global.AddingMargin}>
        <TextInput 
          style={Global.input} 
          placeholder="Search Todos" 
          value={searchQuery} 
          onChangeText={(text) => setSearchQuery(text)} 
        />
        <TouchableOpacity style={Global.ButionBtn} onPress={() => setModalVisible(true)}>
          <Text style={Global.buttonText}>Add Todo</Text>
        </TouchableOpacity>
        <FlatList data={filteredTodos} renderItem={renderTodos} keyExtractor={(item) => item.id} />
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ScrollView contentContainerStyle={Global.modalView}>
          <TextInput 
            style={Global.input} 
            placeholder="Add Todo" 
            value={todo} 
            onChangeText={(userText) => setTodo(userText)} 
          />
          <TextInput 
            style={Global.input} 
            placeholder="Label" 
            value={label} 
            onChangeText={(text) => setLabel(text)} 
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={Global.datePickerText}>Due Date: {dueDate.toLocaleString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={dueDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  setDueDate(selectedDate);
                }
              }}
            />
          )}
          <View style={Global.priorityContainer}>
            <Text style={Global.priorityLabel}>Priority:</Text>
            <TouchableOpacity style={Global.priorityButton} onPress={() => setPriority("Low")}>
              <Text style={[Global.priorityText, priority === "Low" && Global.selectedPriority]}>Low</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Global.priorityButton} onPress={() => setPriority("Medium")}>
              <Text style={[Global.priorityText, priority === "Medium" && Global.selectedPriority]}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Global.priorityButton} onPress={() => setPriority("High")}>
              <Text style={[Global.priorityText, priority === "High" && Global.selectedPriority]}>High</Text>
            </TouchableOpacity>
          </View>
          <TextInput 
            style={Global.input} 
            placeholder="Add Subtask" 
            value={subtask} 
            onChangeText={(text) => setSubtask(text)} 
            onSubmitEditing={handAddSubtask}
          />
          <View style={Global.subtasksContainer}>
            {subtasks.map(sub => (
              <Text key={sub.id} style={Global.subtaskText}>- {sub.name}</Text>
            ))}
          </View>
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
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

export default Todoscreens;
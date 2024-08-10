import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, {useState} from 'react';
import Global from '../Global/Global';
import { IconButton } from 'react-native-paper';

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

  // Initiliaze the state
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([])
  
  // Render data for Todo...
  const renderTodos = ({ item, index }) => {
    return (
      <View style={Global.designResult}>
        <Text style={Global.Texter}>{item.name}</Text>
        <IconButton icon="pencil" color="red" size={20} />
        <IconButton icon="delete" color="red" size={20}  onPress={() => handDeleteTodo(item.id)}/>
      </View>
    ); 
  };

  // Adding a todo list,
  const handAddTodo = () => {
    setTodoList([...todolist, {id: Date.now().toString(), name: todo}]);
    setTodo("");
  };
 
  // Deleting a todo list,
  const handDeleteTodo = (id) => {
    const newTodo = todolist.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };
  return (
    <SafeAreaView style={Global.androidSafeArea}>
      <View style={Global.AddingMargin}>
        <Text>Todo Screens !!</Text>
        <TextInput style={Global.input} placeholder="Add Todo" value={todo} onChangeText={(userText) => setTodo(userText)}/>
        <TouchableOpacity style={Global.ButionBtn} onPress={() => handAddTodo()}>
          <Text>Add Todo</Text>
        </TouchableOpacity>

        {/* Data viewer... */}
        <FlatList data={todolist } renderItem={renderTodos}/>
      </View>
    </SafeAreaView>
  );
};

export default Todoscreens;
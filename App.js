import React , { useState } from 'react'; 
import {Text , View, StyleSheet , FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import Sandbox from "./components/sandbox";

export default function App(){
 const [todos, setTodos] = useState([
   {text : 'Eggs', key: '1'},
   {text : 'Milk', key: '2'},
   {text : 'Chocalate', key: '3'}
 ]);
 

 const pressHandler = (key)=>{
   setTodos((prevTodos) => {
     return prevTodos.filter(todo => todo.key != key);
   });
 }
 
 const submitHandler = (text) => {

   if(text.length > 3){
     setTodos((prevTodos) => {
     return[
       {text : text, key: Math.random().toString() },
       ...prevTodos
     ];

   })
   }
   else{
     Alert.alert("ERROR!","U should atleast enter 3 char!",[
       {text : "Understood", onPress: () => console.log("Alert Closed!")}
     ]);
   }
   
 }
 
  return(
    //<Sandbox />
  <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss();
    console.log("dismissed keyboard")
  }}>
    <View style={styles.container}>
      <Header />
      <View style = {styles.content}>
        <AddTodo submitHandler = {submitHandler}/>
        <View style = {styles.list}>
          <FlatList
            data = {todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        
        </View>
      </View>

    </View>
  </TouchableWithoutFeedback> 
  );

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "white",
      },
  content:{
    flex:1,
    padding:40,
  
    
  },
  list:{
    flex:1,
    marginTop: 20,
    
    
  }
});

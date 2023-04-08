import { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[textInput, setTextInput] = useState('');
  const[listOfTodos, setListOfTodos] = useState([]);

  function handleChange(e){
    setTextInput(e);
  }
  function addTodo(){
    console.log(textInput);
    setListOfTodos((currTodo) => [...currTodo, textInput]);
    console.log(listOfTodos);
  }

  function delTodo(){
    console.log("del");
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='enter todo' onChangeText={handleChange}/>
      <Button title="Add" onPress={addTodo}></Button>
      {/* scrollview is great if there is limited amount of data because it loads everything all at once*/}
      <Text>Added Pointers:</Text>
      <Pressable onPress={delTodo}>
      {listOfTodos.map(res=>{return <Text>{res}</Text>})}       
      </Pressable>
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
});

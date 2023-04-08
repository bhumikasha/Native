import { useState } from 'react';
import { Button, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[textInput, setTextInput] = useState();
  const[listOfTodos, setListOfTodos] = useState([]);
  const [visible, setVisible] = useState(false);
  const [rand, setRand] = useState(0);

  function handleChange(e){
    setTextInput(e);
  }

  function addGoalHandlder() {
    setVisible(true);
  }

  function addTodo(){
    const min = 1;
    const max = 100;
    setRand(min + Math.random() * (max - min));
    setListOfTodos((currTodo) => [...currTodo, {text: textInput, id: rand}]);
  }

  function delTodo(id){
    setListOfTodos((currTodo) => {return currTodo.filter(updatedList => (updatedList.id !== id ))});
  }

  function back() {
    setVisible(false);
  }

  return (
    <View style={styles.buttonstyle} >
      <Button title="Add New TODO" color="#fff644" onPress={addGoalHandlder} />
      <Modal visible={visible} animationType='slide'><View style={styles.container}>
        <TextInput placeholder='enter todo' onChangeText={handleChange}/>
        <Button title="Add" onPress={addTodo} />
        <Button title='Back' onPress={back} />
        {/* scrollview is great if there is limited amount of data because it loads everything all at once*/}
        <Text>Added Pointers:</Text>
        {listOfTodos.map(res=>{ 
          return (
            <Pressable android_ripple={{color: '#fff644'}} onPress={delTodo.bind(this, res.id)}>
              <Text key={res.id}>{res.text}</Text>
            </Pressable>
          )
        })}    
        </View>
      </Modal>
      <Image style={styles.image} source={require('./assets/images/mainPageImg.jpg')}/>
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
  buttonstyle: {
    padding: 50,
    marginTop: 150,
  },
  image: {
    width: 300,
    height: 400
  }
});

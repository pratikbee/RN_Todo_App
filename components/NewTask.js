import React,{useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    Image,
    Pressable

}

from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo} from '../actions/todoAction/todoActions';


const NewTask=()=>
{   const [todoValue, setTodoValue] = useState('');
const dispatch = useDispatch();
const data = useSelector(state => state);
const todos = data.todos.todos;
const addTodo = () => {
if (todos && !todos.includes(todoValue) && todoValue!='') {
dispatch(AddTodo(todoValue));
setTodoValue('');
} else {
alert(`${todoValue} Already added in Todo List or todo is empty`);
}
};
    
    return (
       <View style={{flex:1,backgroundColor:'blue'}}>
          <View style={{backgroundColor:'blue',height:30,justifyContent:'center',margin:wp('5%')}}><Text style={{fontWeight:'600',color:'white'}}>What is to be done?</Text></View>
          <View style={{backgroundColor:'blue',height:30,justifyContent:'center',margin:wp('5%'),marginRight:wp('15%')}}><TextInput placeholder='Enter Task Here' placeholderTextColor='white' onChangeText={setTodoValue} value={todoValue} style={{borderBottomColor:'white',borderBottomWidth:2,fontWeight:'bold',color:'white'}}/></View>
          <View style={{backgroundColor:'blue',marginTop:hp('60%'),height:40,flexDirection:'row',justifyContent:'flex-end',marginRight:wp('5%')}}><Pressable onPress={addTodo}><Image style={{}} source={require('/Users/ambin04957/Desktop/TODO_IOS/todoios/Icons/Tick.png')}/></Pressable></View>
           </View>
           )
}

export default NewTask;
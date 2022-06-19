import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../actions/todoAction/todoActions';
import {styles} from './TodoStyles';
import {
Text,
View,
TextInput,
Button,
FlatList,
TouchableOpacity,
} from 'react-native';
const Todo = () => {
const [todoValue, setTodoValue] = useState('');
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
const removeTodo = item => {
const todoIndex = todos.indexOf(item);
if (todoIndex > -1) {
dispatch(RemoveTodo(item));
} else {
alert(`${todoValue} is not in the Todo List`);
}
};
const renderTodoList = () => {
return (
<FlatList
data={todos}
renderItem={({item}) => (
<View style={styles.todoView}>
<View style={styles.todoList}>
<Text>{item}</Text>
</View>
<TouchableOpacity
style={styles.removeTodo}
onPress={() => removeTodo(item)}>
<Text> X </Text>
</TouchableOpacity>
</View>
)}
/>
);
};
return (
<View style={styles.main}>
<Text>
List of Todos :
</Text>
{renderTodoList()}
</View>
);
};
export default Todo;



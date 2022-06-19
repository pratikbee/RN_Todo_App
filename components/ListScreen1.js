import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    Pressable
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Todo  from './ListOfTodos';
import { NavigationContainer } from '@react-navigation/native';


const ListScreen1 = (props) => {

  
  

    return (<SafeAreaView><View style={{backgroundColor:'blue',height:hp('7%'),justifyContent:'center'}}><Image source={require('/Users/ambin04957/Desktop/TODO_IOS/todoios/Icons/Tick.png')}/></View>
    <Todo/>
    <View style={{backgroundColor:'lightblue',height:hp('7%'),marginBottom:10,justifyContent:'flex-end',flexDirection:'row'}}><Pressable onPress={()=>props.navigation.navigate('New task')}><Image source={require('/Users/ambin04957/Desktop/TODO_IOS/todoios/Icons/AddCircle.png')}/></Pressable></View></SafeAreaView>)
    }


 


    export default ListScreen1;
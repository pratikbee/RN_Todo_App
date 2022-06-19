
import React from 'react';
import { View,Text

}
from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Login from './components/Login';
import ListScreen1 from './components/ListScreen1';
import NewTask from './components/NewTask';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
const store=createStore(rootReducer,applyMiddleware(logger));

const App=()=>{

  const Stack=createNativeStackNavigator()
     
   return ( <Provider store={store}>
   <NavigationContainer>
     <Stack.Navigator initialRouteName='login' >
     <Stack.Screen  options ={{headerShown:false}}name='login' component={Login}/>
     <Stack.Screen options={{headerShown:false}} name='listscreen' component={ListScreen1}/>
      <Stack.Screen name={'New task'} component={NewTask}></Stack.Screen> 
       
       
     
         
       </Stack.Navigator>
 
 
   </NavigationContainer>
   </Provider>)
 }
 
 
 export default App;

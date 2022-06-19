import React, { useState } from 'react';
import { SafeAreaView ,View,Text,Button, TextInput, Pressable} from 'react-native';
import InputContainer from './InputContainer'


const Login=(props)=>

 {        
    return(
        <View style={{backgroundColor:'#F0BABA', flex:1,flexDirection:'column'}}>
        <SafeAreaView style={{backgroundColor:'white',}}/>
        <View style={{marginTop:200,marginLeft:40}}>
        <InputContainer name='User Id' onChangeText={(val)=>{setUSERID(val)}}/></View>
        <View style={{marginTop:50,marginLeft:40}}>
        <InputContainer  name='Password' onChangeText={(val)=>{setPASSWORD(val)}}/></View>
        <View style={{ marginTop:50,marginLeft:40 , backgroundColor:'blue',borderRadius:10,width:300,height:40}} ><Button title='Login' onPress={()=>props.navigation.navigate('listscreen')}/></View>
        
 
        <View></View>

        <View style={{flexDirection:'row',marginLeft:40,marginTop:40}}>
            <View style={{marginLeft:30}}><Pressable onPress={()=>{alert('password')}}><Text>Forgot password</Text></Pressable></View>
            <View style={{marginLeft:30}}><Text>|</Text></View>
            <View style={{marginLeft:30}}><Pressable onPress={()=>props.navigation.navigate('register')}><Text>Register</Text></Pressable></View>



        </View>
        
        
        </View>
        
    
        
       
        
    );
}

export default Login;
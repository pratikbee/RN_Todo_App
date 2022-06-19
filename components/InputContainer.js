import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { TextInput,View } from 'react-native';



const InputContainer=(props)=>
{
    return(
        <View style={{backgroundColor:'lightblue',borderRadius:10,width:300,height:40}} ><TextInput name={{1:'Username',2:'Password'}} style={{textAlign:'center',padding:10,color:'black'}}  placeholder={props.name}/></View>
    )
}


export default InputContainer;
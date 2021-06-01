import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {StyleSheet,Text,TouchableOpacity} from 'react-native'

interface CButtonProps{
  title:string;
  onPress:()=>void;
}

const CButton  = (props:CButtonProps)=>{
  return(
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop:32,
    backgroundColor:'#B0D057'
  },
  title:{
    color:'#fff',
    fontSize:16
  }
})

export {CButton }
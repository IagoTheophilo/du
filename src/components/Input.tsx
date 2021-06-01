import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  StyleSheetProperties,
  TouchableOpacity
} from 'react-native'
import Icon from "react-native-vector-icons/Feather"

export interface InputProps {
  label: string;
  placeholder: string;
  icon: string;
  value: string;
  onChangeText: (value:string) => void;
  password?:boolean
}

const Input = (props: InputProps) => {

  const [visible,setVisible] = useState(false)

  function handleVisible(){
    setVisible(!visible)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.content}>
        <View style={styles.input}>
          <Icon name={props.icon} size={18} color="#646464" />
          <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            autoCapitalize={'none'}
            style={styles.textInput}
            value={props.value}
            secureTextEntry={props.password && !visible}
          />
        </View>
        {props.password &&
          <TouchableOpacity
            onPress={handleVisible}
          >

            <Icon name={visible?"eye":"eye-off"} size={18} color="#646464" />
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%'
  },
  label: {
    fontSize: 12,
    color: '#C5C7C7',
  },
  content: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    borderWidth: 0.5,
    marginTop: 7,
    borderColor: '#C7C7C7'
  },
  textInput: {
    paddingHorizontal: 10
  },
  input:{
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
  }
})

export { Input }
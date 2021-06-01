import React, { useState } from 'react'
import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Button,
  SafeAreaView,
  Alert
} from 'react-native'

import { Header } from '../components/Header'

import { CButton } from '../components/Button'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from '../components/Input'
import { api } from '../services/api'
import { useNavigation } from '@react-navigation/native'
import { Modal } from '../components/Modal'


const PasswordRemember = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')


  function handleLogin() {
    navigation.navigate('SignIn')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={{ flex: 1 }}>
        <Header login />
        <Modal margin>


          <Text style={{ fontSize: 26, color: '#707070' }}>Redefinir senha</Text>
          <Text style={{ fontSize: 14, color: '#A6A6A6' }}>Insira o e-mail e enviaremos um e-mail com instruções para redefinir sua senha.</Text>
          <Input label="Email" placeholder="Digite seu email" icon="mail" onChangeText={(value) => setEmail(value)} value={email} />

          <CButton title={"Criar"} onPress={() => { }} />
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "stretch",
  },
  imageBackground: {
    height: 211,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginHorizontal: "100%",
  },
  margin: {
    justifyContent: 'flex-start',
    marginTop: -60,
    marginBottom: 60
  },
  content: {
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 35,
    padding: 19,
    borderRadius: 21,
    // marginTop: -211,

    elevation: 4,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  text: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    color: "#A6A6A6",
    fontSize: 12
  },
  textTwo: {
    color: "#087A4A",
    fontSize: 12
  },
  forget: {
    marginTop: 10,
    marginBottom: 32
  },
  ouView: {
    marginVertical: 15,
    width: "100%",
    alignItems: 'center',
  },
  ou: {
    fontSize: 10,
    color: "#A6A6A6",
  },
  social: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  img: {
    width: 37,
    height: 37
  },
  login: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 25,
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 35,
    marginLeft: 25,
    borderRadius: 5,
    borderColor: '#fff'

  }
})

export { PasswordRemember }
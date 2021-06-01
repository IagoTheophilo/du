import React, { useEffect, useState } from 'react'
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
  Alert,
} from 'react-native'
import { Header } from '../components/Header'

import { CButton } from '../components/Button'
import { Input } from '../components/Input'
import { api } from '../services/api'
import { useNavigation } from '@react-navigation/native'
import { Modal } from '../components/Modal'


const SignUp = () => {
  const navigation = useNavigation()

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [validation, setValidation] = useState(false)

  function handleSingIn() {

    Alert.alert("Criado")
  }

  function handleLogin() {
    navigation.navigate('SignIn')
  }

  useEffect(() => {
    if (password !== passwordConfirm && passwordConfirm) {
      setValidation(false)
      return
    }
    setValidation(true)

  }, [passwordConfirm, password])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={{ flex: 1 }}>
        <Header login />
        <Modal margin>
          {/* <Card> */}
          <Text style={{ fontSize: 26, color: '#707070' }}> Criar conta</Text>
          <Input label="Nome" placeholder="Digite seu nome" icon="user" onChangeText={(value) => setUser(value)} value={user} />
          <Input label="Email" placeholder="Digite seu email" icon="mail" onChangeText={(value) => setEmail(value)} value={email} />
          <Input label="Senha" placeholder="Digite sua senha" icon="lock" password onChangeText={(value) => setPassword(value)} value={password} />

          <Input label="Confirme sua senha" placeholder="Repita sua senha" icon="lock" password onChangeText={(value) => setPasswordConfirm(value)} value={passwordConfirm} />
          {!validation && <Text style={{ color: 'red' }}>As senhas não são iguais</Text>}
          <CButton title={"Criar"} onPress={handleSingIn} />
          {/* </Card> */}
          <View style={styles.ouView}>
            <Text style={styles.ou}>Ou</Text>
          </View>
          <View style={styles.social}>
            <TouchableOpacity>
              <Image source={require('../assets/icon_google.png')} style={styles.img} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/facebook.png')} style={styles.img} />
            </TouchableOpacity>
          </View>
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

export { SignUp }
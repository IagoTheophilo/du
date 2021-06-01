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
import { CButton } from '../components/Button'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from '../components/Input'
import { api } from '../services/api'
import { useNavigation } from '@react-navigation/native'
import { Header } from '../components/Header'
import { Modal } from '../components/Modal'


const SignIn = () => {
  const navigation = useNavigation()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  async function handleAuthenticated() {
    // const perfil = await api.post("/login",
    //   {

    //     email: "gustavo.vieira@dubbox.com.br",
    //     password: "123456"
    //   }
    // )
    // navigation.navigate('Home')
  }

  function handlePassword() {
    navigation.navigate('PasswordRemember')
  }
  function handleSingUp() {
    navigation.navigate('SignUp')
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={{ flex: 1 }}>
        <Header />
        <Modal>
          <Input label="Email" placeholder="Digite seu email" icon="mail" onChangeText={(value) => setUser(value)} value={user} />
          <Input label="Senha" placeholder="Digite sua senha" icon="lock" password onChangeText={(value) => setPassword(value)} value={password} />
          <TouchableOpacity style={styles.forget} onPress={handlePassword}>
            <Text style={{ color: "#087A4A" }}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <CButton title={"Entrar"} onPress={handleAuthenticated} />
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
        <TouchableOpacity style={styles.text}
          onPress={handleSingUp}
        >
          <Text style={styles.textOne}>Sua primeira vez? </Text>
          <Text style={styles.textTwo}>Junte-se a nós</Text>
        </TouchableOpacity>
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
  }
})

export { SignIn }
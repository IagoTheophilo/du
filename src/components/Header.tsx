import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

interface CardProps {
  login?: boolean
}

const Header = ({ login }: CardProps) => {

  const navigation = useNavigation()

  function handleLogin() {
    navigation.navigate('SignIn')
  }

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../assets/bg_mobile_1.png")}
    >
      {login &&
        <TouchableOpacity style={styles.login} onPress={handleLogin} >
          <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>
      }
      <Image
        style={styles.image}
        source={require("../assets/logo_branca.png")}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 211,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginHorizontal: "100%",
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

export { Header }
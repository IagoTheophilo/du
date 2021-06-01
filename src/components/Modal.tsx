import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

const Modal = ({children,margin}:any) => {
  return (
        <View style={[styles.margin,margin && styles.marginbottom]}>
          <View style={styles.content}>
            {children}
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  margin: {
    justifyContent: 'flex-start',
    marginTop: -60,
  },
  marginbottom:{
    marginBottom: 60
  },
  content: {
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 35,
    padding: 19,
    borderRadius: 21,

    elevation: 4,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
})

export { Modal }
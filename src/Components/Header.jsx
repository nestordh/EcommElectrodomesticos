import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colores } from '../Global/Colores'

const Header = () => {
  return (
    <View  style = { styles.containerHeader } >
         <Text style = { styles.text } >Mis Productos </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader:{
        height: '10%',
        backgroundColor: colores.Light,
        justifyContent: 'center',
        alignItems:'center'
    },
    text:{
        fontSize: 25,
        fontFamily: 'Lobster',
    }
})
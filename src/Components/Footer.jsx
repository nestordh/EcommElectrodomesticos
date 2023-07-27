import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colores } from '../Global/Colores'

const Footer = () => {
  return (
    <View style = { styles.containerFooter}>
      <Text style = {styles.textFooter } > Derechos reservados. CoderHouse. Heredia Nestor 2023 </Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    containerFooter:{
        backgroundColor: colores.Light,
        justifyContent: "center",
        alignItems: "center"
    },
    textFooter:{
        fontSize: 10,
        fontFamily: 'Lobster',
    }

})
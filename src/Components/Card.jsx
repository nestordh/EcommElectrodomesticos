import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colores } from '../Global/Colores'

const Card = ( { children, additionalStyle =[] } ) => {
  return (

    <View style = { [ styles.cardContainer, additionalStyle ] }>

        {children}

    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        width: 250,
        height: 50,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        borderWidth: 2,
        borderColor: "black",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colores.plata,
        marginVertical: 10,
        borderRadius: 8,
}
})
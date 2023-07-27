import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colores } from '../Global/Colores';

const Search = ( { onSearch, error = "" } ) => {
    
    const [ keyword, setKeyword ] = useState("")
    const { width,} = useWindowDimensions()

    const onErase = () => {
          setKeyword("")
          onSearch("")
          }
        
  return (
    
    <View style = { width > 350 ? styles.container : styles.containerSm } >
        
        <TextInput style = { styles.input} 
                    placeholder='Search...'
                    value={keyword}
                    onChangeText={setKeyword} />

        <Pressable onPress={()=>onSearch(keyword)}>
             
             <FontAwesome name = "search" size = { 24 } color = "black" />
        
        </Pressable>
        
        <Pressable onPress = { onErase } >
           
            <FontAwesome5 name = "eraser" size = { 24 } color = "black" />
      
        </Pressable>
      
        { error ?
            <Text>
                {error}
            </Text>
        : null }
   </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingLeft : 15,
        borderWidth:2,
        borderColor: colores.greensuave,
        borderRadius: 10,
        width: "auto",
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: colores.Light,
        borderRadius: 10,
    },
    containerSm: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
    },
})
import React, { useState } from 'react'
import { Pressable, Text, TextInput, View, useWindowDimensions } from 'react-native'

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../Assets/Styles/Styles';


/** componente Buscador de ItemListContainer 
 * @param onSearch Devolucion de llamada cuando se busca
 * @param error muestra error
 */

const Search = ( { onSearch, error = "" } ) => {
    
    const [ keyword, setKeyword ] = useState("")
    const { width } = useWindowDimensions()
    const onErase = () => {
          setKeyword("")
          onSearch("")
          }
        
  return (
    
    <View style = { width > 350 ? styles.containerSearch : styles.containerSmSearch } >
        
        <TextInput style = { styles.inputSearch} 
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
            <Text> {error} </Text>
        : null }
   </View>
  )
}

export default Search
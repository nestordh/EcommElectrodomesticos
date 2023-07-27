import { Pressable, StyleSheet, Text, View, useWindowDimensions} from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../Features/Market/marketSlice'

const CategoryItem = ( { item, navigation } ) => {
 
  const { width } = useWindowDimensions ()
  const dispatch = useDispatch()
  const onSelectCategory = ( ) => {
        dispatch(setCategorySelected(item))
        navigation.navigate ( 'ItemListCategory', { category: item } )
  }

  return (

    <View style = { styles.scrollView } >
         
      <Pressable onPress = { onSelectCategory } >
        
            <Card additionalStyle = { styles.additionalStyle } >
                  <Text style = { styles.textCategory } > { item } </Text>
            </Card>
      
      </Pressable>
    
     </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 22,
        fontFamily: 'Noto-Sans',
    },
    scrollView:{
      width:'100%', 
      alignItems:"center"
    },
    additionalStyle:{ 
      borderRadius: 15
    },
})
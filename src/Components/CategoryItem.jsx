import { Pressable, Text, View, useWindowDimensions} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

import { setCategorySelected } from '../Features/Market/marketSlice'
import Card from './Card'
import { styles } from '../Assets/Styles/Styles'


/**
 * estilos
 * @param   
 * @returns 
 */

const CategoryItem = ( {
    item,
    navigation 
  } ) => {
 
  const { width } = useWindowDimensions()
  
  const dispatch = useDispatch()
  
  const onSelectCategory = () => {
        dispatch(setCategorySelected(item))
        navigation.navigate('ItemListCategory', { category: item } )
  }

  return (

    <View style = { styles.containerCategoryItem } >  

      <Pressable onPress = { onSelectCategory } >
        
            <Card additionalStyle = { styles.additionalStyle } >
                  
                  <Text style = { styles.textCategoryItem } > { item } </Text>
            
            </Card>
      
      </Pressable>
    
    </View>
  )
}

export default CategoryItem

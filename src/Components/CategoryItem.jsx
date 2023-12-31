import { Pressable, Text, View, useWindowDimensions} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

import { setCategorySelected } from '../Features/Market/marketSlice'
import Card from './Card'
import { styles } from '../Assets/Styles/Styles'

/** estilos scroll view
 * @param   
 * @returns 
 */

const CategoryItem = ( {navigation, item } ) => {
 
  const { width } = useWindowDimensions()
  const dispatch = useDispatch()
  const onSelectCategory = () => {
        dispatch(setCategorySelected(item))
        navigation.navigate('ItemListCategory', {category: item}) }

  return (

    <View style = { styles.containerCategoryItem } >  

      <Pressable onPress = { onSelectCategory } >
            <Card additionalStyle = { styles.additionalStyleCat } >
                <Text style = { styles.textCategoryItem } > { item } </Text>
            </Card>
      </Pressable>
    
    </View>
  )
}

export default CategoryItem

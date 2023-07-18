import { Pressable, StyleSheet, Text, View, useWindowDimensions} from 'react-native'
import React from 'react'
import Card from './Card'


const CategoryItem = ( { item, navigation } ) => {
 
  const { width } = useWindowDimensions ()
  
  return (
    <View style = { styles.scrollView } >
    {/* <View style = { { width: width, alignItems: 'center' } }> */}
      
      <Pressable onPress = { () => navigation.navigate ('ItemListCategory', { category: item } ) } >
        
            <Card additionalStyle = { styles.additionalStyle }>
       
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
    wrapper: {
      width: '100%',
    },
})
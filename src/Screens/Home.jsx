import { FlatList, StyleSheet, View } from 'react-native'
import { colores } from '../Global/Colores'
import React from 'react'
import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'

const Home = ( { navigation } ) => {
    return (
      <View style = { styles.container } >

          <Counter/>  

          <FlatList
              data = { categories}
              keyExtractor = { category => category }
              renderItem = { ( { item } ) => <CategoryItem item = { item } navigation = { navigation } /> }
              showsVerticalScrollIndicator = { false }
          />
      
      </View>
    )
  }

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colores.marina,
        alignItems: "center",
    }
})
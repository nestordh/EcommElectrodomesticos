import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { colores } from '../Global/Colores'
import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'

const Home = ({
    setCategorySelected
  }) => {
    return (
      <View style = { styles.container } >
          <FlatList
              data = { categories}
              keyExtractor = { category => category }
              renderItem = { ( { item } ) => CategoryItem ( { item, setCategorySelected } ) }
              showsVerticalScrollIndicator = { false }
          />
      </View>
    )
  }

export default Home

const styles = StyleSheet.create({
    container:{
        height: '86%',
        backgroundColor: colores.marina,
        alignItems: "center",
    }
})
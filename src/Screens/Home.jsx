import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

import { colores } from '../Assets/Colors/Colores'
import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'
import { useGetCategoriesQuery } from '../Services/shopServices'
/**
 * 
 * @param {*} param0 
 * @returns 
 */

const Home = ( { navigation } ) => {

    const {data: categories, isLoading, isError} = useGetCategoriesQuery()

    return (
      <View style = { styles.container } >

          {/* <Counter/>   */}

          <FlatList
              data = { categories}
              keyExtractor = { category => category }
              renderItem = { ( { item } ) => <CategoryItem item = { item } navigation = { navigation } /> }
              showsVerticalScrollIndicator = { false }
              showsHorizontalScrollIndicator = {false}
              contentContainerStyle = {styles.wrapper}
            //   horizontal={true}  
              style={styles.flatlist}
          />
      
      </View>
    )
  }

export default Home

const styles = StyleSheet.create({
    wrapper: {
        gap: 20,
    },
    container:{
        flex: 1,
        backgroundColor: colores.marina,
        alignItems: "center",
    },
    flatlist: {
        width: '80%'
    },  
})
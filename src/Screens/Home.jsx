import { FlatList, View } from 'react-native'
import React from 'react'

import CategoryItem from '../Components/CategoryItem'
import { useGetCategoriesQuery } from '../Services/shopServices'
import { styles } from '../Assets/Styles/Styles'

/**
 * Pantalla de la tienda
 * @param {*} param0 
 * @returns categorias
 */

const Home = ( { 
    navigation,
    
     } ) => {

    const {data: categories, isLoading, isError} = useGetCategoriesQuery()

    return (
      <View style = { styles.containerHome } >

          <FlatList
              style={styles.flatlistHome}
              data = { categories}
              keyExtractor = { category => category }
              renderItem = {({item}) => <CategoryItem item = {item} navigation = {navigation}/>}
              showsVerticalScrollIndicator = { false }
              showsHorizontalScrollIndicator = {false}
              contentContainerStyle = {styles.wrapperHome}
          />
      
      </View>
    )
  }

export default Home

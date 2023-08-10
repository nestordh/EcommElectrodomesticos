import { FlatList, StyleSheet, View } from 'react-native'
import { colores } from '../Global/Colores'
import React from 'react'
import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'
import { useGetCategoriesQuery } from '../Services/shopServices'


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
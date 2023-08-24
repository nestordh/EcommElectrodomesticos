import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../Components/ProductItem'
import { colores } from '../Global/Colores'
import Search from '../Components/Search'
import { useGetProductsByCategoryQuery } from '../Services/shopServices'

/**
 * 
 * @param {*} param0 
 * @returns 
 */

const ItemListCategory = ( { navigation, route } ) => {
  
  const { category } = route.params
  const categorySelected = useSelector ( state => state.marketReducer.value.categorySelected )
  const { data: productsSelected, isLoading, isError } = useGetProductsByCategoryQuery ( categorySelected )
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState ("")
  const [keywordError, setKeywordError] = useState ("")

  useEffect(()=> {
    if (productsSelected) {
      const productsFiltered = productsSelected.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
      setProducts(productsFiltered)
    
  }}, [productsSelected, keyword])
    
  const onSearch = (input) => {
  const expression = /^[a-zA-Z0-9\ ]*$/
  const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
      }else {
        setKeywordError("Solo letras y números")
      }
  }  

  return (
    <View style = { styles.container } >
        <Search
                onSearch = { onSearch }
                error = { keywordError }
                goBack = { () => navigation.goBack() } />
       
        <FlatList
              data = { products }
              keyExtractor = { product => product.id }
              renderItem = {({item}) =>        
                           <ProductItem 
                                item = { item } 
                                navigation = { navigation } /> 
                           }
       
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colores.marina,
        alignItems: 'center',
        paddingTop:10,
       
    },
  } )
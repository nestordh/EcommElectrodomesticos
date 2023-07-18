import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem'
import { colores } from '../Global/Colores'
import Search from '../Components/Search'
import productsRaw from '../Data/products.json' 

const ItemListCategory = ( { navigation, route } ) => {

  const {category} = route.params
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState ("")
  const [keywordError, setKeywordError] = useState ("")


  useEffect(()=> {
    const productsFiltered = productsRaw.filter
                           ( product => product.category === category 
                          && product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))  
    
    setProducts(productsFiltered)

  }, [ keyword, category])

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
            renderItem = { ( { item } ) => 
                   <ProductItem 
                        item = { item } 
                        navigation = { navigation } /> }
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
         height: '90%',
        backgroundColor: colores.marina,
        alignItems: 'center'
    }
} )
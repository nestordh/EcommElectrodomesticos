import { FlatList, Text, View } from 'react-native'
import React from 'react'
import OrderData from "../Data/orders.json"
import OrderItem from '../Components/OrderItem'
import { useSelector } from 'react-redux'
import { styles } from '../Assets/Styles/Styles'
import AddButton from '../Components/AddButton'

/**
 * 
 * @param {*} param0 
 * @returns 
 */


const OrderScreen = ({navigation}) => {
  const { items: cartData, total, updatedAt, verify } = useSelector(state => state.orderReducer);

  return (
      <View>
        {
        verify ?
        (
            <OrderItem  order={cartData} 
                        total={total} 
                        updatedAt={updatedAt}  /> 
        ) 
        : 
            <View style={styles.containerOrderScreen}>
                <Text style={styles.textOrderScreen}> Aun no tiene una compra realizada</Text> 
                <AddButton title="Ir a la tienda"
                           onPress={() => navigation.navigate("Home") } />
                           
            </View>
        } 
      </View>
  )
}

export default OrderScreen



// {/* onPress={Home} /> */}
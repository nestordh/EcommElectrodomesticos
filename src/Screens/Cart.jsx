import { FlatList, Pressable, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from '../Components/CartItem';
import { usePostCartMutation } from '../Services/shopServices';
import { addOrderItem } from "../Features/Order/orderSlice";
import { removeFullCart } from '../Features/Cart/cartSlice'
import AddButton from "../Components/AddButton";
import { styles } from '../Assets/Styles/Styles';

/**
 * carrito de compra
 */

const Cart = ({ navigation }) => {

    const { items: CartData, total, user, updatedAt, orderId }= useSelector(state => state.cartReducer.value)
    const { localId } = useSelector(state => state.userReducer.value)
    const dispatch = useDispatch();
    const [triggerPostCart, result ] = usePostCartMutation()
    const onConfirm = () => {
          triggerPostCart({items: CartData, total, user, updatedAt, orderId})
          dispatch(addOrderItem({ items: CartData, total, updatedAt, verify: true}))
          dispatch(removeFullCart())
          }
          
    useEffect(() => {
            if (result.isSuccess) {
            dispatch(removeFullCart())
            }
        }, [result])

   return (
        <View>

        {CartData.length !== 0 
        ?
        (
            <>
                <FlatList 
                    data= {CartData}
                    keyExtractor={cartItem => cartItem.id}
                    renderItem={({ item }) => {
                        return ( <CartItem cartItem={item} /> )}} />
                    
                <View>
                    <View>
                        <Text style={styles.titleButtonCart}> Total  </Text>
                        <Text>  $ {parseFloat(total).toFixed(2)} </Text>
                    </View>
                    
                    <View>
                        <Pressable onPress={onConfirm} >
                             <Text style={styles.text1Cart} > Confirmar compra </Text>
                        </Pressable>
                    </View>

                    
                </View>
            </>
        ) 
        : 
            <View> 
                    <Text style={styles.textCartScreen}> Su carrito esta vacio </Text>
                    <AddButton title="Ir a la tienda"
                            //    onPress={() => navigation.navigate('Home')}
                               onPress={onConfirm}                               
                               />
            </View> 
        }
    </View>
   )
}   
export default Cart
import { FlatList, Pressable, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

import CartItem from '../Components/CartItem';
import { usePostCartMutation } from '../Services/shopServices';
import { styles } from '../Assets/Styles/Styles';


/**
 * carrito de compra
 */

const Cart = () => {
    const {items: CartData, total, updatedAt, user } = useSelector(state => state.cartReducer.value)
    const [triggerPostCart, result ] = usePostCartMutation()
    const onConfirm = ( ) => { triggerPostCart({items: CartData, total, user, updatedAt }) }
        
    return (
    <View style={styles.containerCart }>
        
        <FlatList
            data={CartData}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> {
                return (
                    <CartItem cartItem = {item} />
                )
            }}
        />

        <View>
                <View style={styles.totalContainer1Cart}>
                
                    <Text style={styles.textCart} > Valor total: $   {total} </Text>

                    <Pressable onPress={onConfirm} >

                        <Text style={styles.text1Cart} > Confirmar compra </Text>
                        
                    </Pressable>

                </View>
        </View>
   
    </View>
  )
}

export default Cart
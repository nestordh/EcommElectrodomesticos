import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CartItem';
import { colores } from '../Global/Colores';
import { useSelector } from 'react-redux';
import { usePostCartMutation } from '../Services/shopServices';

const Cart = () => {
    const {items: CartData, total, updatedAt, user } = useSelector(state => state.cartReducer.value)
    const [triggerPostCart, result ] = usePostCartMutation()
    const onConfirm = ( ) => { triggerPostCart({items: CartData, total, user, updatedAt }) }
    console.log(result);
    
    return (
    <View style={styles.container}>
        
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
                {/* <View style={styles.totalContainer}>
                    
                    <Text style={styles.text} >  
                    Cantidad Productos: {ProdTot} </Text>
                
                </View> */}

                <View style={styles.totalContainer1}>
                
                    <Text style={styles.text} > Valor total: $ { total} </Text>

                    <Pressable onPress={onConfirm} >

                        <Text style={styles.text1} > Confirmar compra </Text>
                        
                    </Pressable>

                </View>
        </View>
   
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colores.fondo,
        height: "100%",
    },
    // totalContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    totalContainer1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: "Noto-Sans",
        padding: 10
      },
    text1: {
        fontSize: 20,
        fontFamily: "Noto-Sans",
        padding: 10,
        margin:10,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: colores.Light,

    },
})
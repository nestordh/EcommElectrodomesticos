import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons"
import { useDispatch } from "react-redux";

import { styles } from "../Assets/Styles/Styles";
import { removeCartItem } from "../Features/Cart/cartSlice";

/**
 * @param {*} param0 
 * @returns 
 */

const CartItem = ({cartItem}) => {
    
    const dispatch = useDispatch();
    
    return (
        <View style={styles.containerCardItem} onPress={() => {}}>
            
            <View style={styles.textContainerCardItem}>
               
                <Text style={styles.textCardItem}> {cartItem.title} </Text>
                <Text style = {styles.text2CardItem}> (Cantidad:  {cartItem.quantity}) </Text>
                <Text style={styles.text2CardItem}> {cartItem.brand}</Text>
                <Text style={styles.text2CardItem}> Precio x unidad:  ${cartItem.price}</Text>
            
            </View>
               
            <View style={styles.containerImagesCartItem}>
                <View style={styles.imageCartItem}>
                    <Image source={{ uri: cartItem.images[0] }}
                            style={styles.image1CartItem}
                            resizeMode="cover"
                         />
                </View>
                
                <View style={styles.iconsCartItem}>
                    <Pressable onPress={() => dispatch(removeCartItem(cartItem.id))}>
                         <Entypo name="trash"
                                 size={30}
                                 color="orange" />
                    </Pressable>
                </View>
            </View>    
            
        </View>
    );
};

export default CartItem     
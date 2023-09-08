import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons"
import {Feather } from "@expo/vector-icons"

import { styles } from "../Assets/Styles/Styles";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../Features/Cart/cartSlice";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

const CartItem = ({ cartItem }) => {
    
    console.log(cartItem);

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
                    <Feather name="x-circle"
                             size={20} 
                             color="gray" />
                    </Pressable>
                </View>
            </View>    
            <Entypo name="trash" size={30} color="green" />
        </View>
    );
};

export default CartItem     
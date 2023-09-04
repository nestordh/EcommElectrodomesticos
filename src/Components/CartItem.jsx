import { Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import { styles } from "../Assets/Styles/Styles";

const CartItem = ({ cartItem }) => {
         
    return (
        
        <View style={styles.containerCardItem} onPress={() => {}}>
            
            <View style={styles.textContainerCardItem}>
               
                <Text style={styles.textCardItem}> {cartItem.title} </Text>
                <Text style = {styles.text2CardItem}> (Cantidad:  {cartItem.quantity}) </Text>
                <Text style={styles.text2CardItem}> {cartItem.brand}</Text>
                <Text style={styles.text2CardItem}> Precio x unidad:  ${cartItem.price}</Text>
            
            </View>
           
            <Entypo name="trash" size={30} color="green" />
       
        </View>
    );
};

export default CartItem;
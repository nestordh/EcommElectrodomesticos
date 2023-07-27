import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colores } from "../Global/Colores";
import { Entypo } from "@expo/vector-icons";

const CartItem = ({ cartItem }) => {
    console.log(cartItem);
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}> {cartItem.title} </Text>
                <Text style = {styles.text2}> (Cantidad:  {cartItem.quantity}) </Text>
                <Text style={styles.text2}> {cartItem.brand}</Text>
                <Text style={styles.text2}> Precio x unidad:  ${cartItem.price}</Text>
            </View>
            <Entypo name="trash" size={30} color="green" />
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colores.Light,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Lobster",
        fontSize: 19,
        color: "green",
    },
    text2: {
        fontFamily: "Noto-sans",
        fontSize: 14,
        color: "gray",
    },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colores } from "../Global/Colores";

const OrderItem = ({ order }) => {
    const total = order.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0 );

    return (
        <View style={styles.card} onPress={() => {}}>
        
            <View style={styles.textContainer}>
        
                <Text style={styles.text}>
                    {new Date(order.createdAt).toLocaleString()}
                </Text>
        
                <Text style = { styles.text2 } > Cant: 01 </Text>
        
                <Text style = { styles.text2 } > $ { total } </Text>
        
            </View>
            
            <Feather name="search" size={30} color="black" />
        
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colores.caqui,
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
        fontSize: 17,
        color: "black",
    },
    text2: {
        fontFamily: "Lobster",
        fontSize: 19,
        color: colores.green,
    },
});

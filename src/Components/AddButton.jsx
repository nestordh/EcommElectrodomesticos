import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colores } from "../Assets/Colors/Colores";

const AddButton = ({
    title = "",
    onPress = () => {},
    color = colores.caqui,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: "" }}
            
                onPress={onPress}>
           
            <Text style={styles.text}> {title} </Text>

        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        borderWidth: 1,
        backgroundColor: colores.green,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    text: {
        fontFamily: "Noto-Sans",
        fontSize: 18,
        color: colores.marina,
    },
});

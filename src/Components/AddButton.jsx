import { Pressable, Text } from "react-native";
import React from "react";

import { styles } from "../Assets/Styles/Styles";

/**
 * Formato de boton 
 * @param {*} param0 
 * @returns boton
 */

const AddButton = ({
        title = "",
        onPress = () => {},
    }) => {
    return (
        <Pressable style={styles.buttonAddButton} 
                   onPress={onPress}>
           
            <Text style={styles.textAddButton}> {title} </Text>

        </Pressable>
    );
};

export default AddButton;
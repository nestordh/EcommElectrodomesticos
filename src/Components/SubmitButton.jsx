import { Pressable, Text } from "react-native";
import React from "react";

import { styles } from "../Assets/Styles/Styles";

/** 
 * @param {*} param0 
 * @returns 
 */

const SubmitButton = ({ onPress, title }) => {
    return (
        
        <Pressable style={styles.buttonSubmitButton}
                   onPress={onPress} >
            
            <Text style={styles.textSubmitButton}> {title} </Text>

        </Pressable>
    );
};

export default SubmitButton;

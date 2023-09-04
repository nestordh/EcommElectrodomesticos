import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { styles } from "../Assets/Styles/Styles";

const AddressItem = ({ location, navigation }) => {

    const onChangeLocation = () => {
        navigation.navigate('Location Selector')
    }

    return (
        <View style={styles.containerAdressItem} onPress={() => {}}>
            
            <View style={styles.textContainerAddressItem}>
                
                <Text style={styles.textAddressItem}> {location.address} </Text>
            
            </View>
            
            <Pressable onPress={onChangeLocation}>
            
                <Entypo name="location" size={30} color="black">
            
                    <Text style={styles.text2AddresItem}> Cambiar </Text>
            
                </Entypo>
            
            </Pressable>
        
        </View>
    );
};

export default AddressItem;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AddButton from "../Components/AddButton";
import AddressItem from '../Components/AddressItem';
import { useGetUserLocationQuery } from "../Services/shopServices";
import { colores } from "../Global/Colores";

const ListAddress = ({ navigation }) => {
    const { location, localId } = useSelector((state) => state.userReducer.value);
    const {data: userLocationQuery, isError, isLoading} = useGetUserLocationQuery(localId)

    return location?.latitude || userLocationQuery ? (
       
        <AddressItem 
            location={location.latitude ? location : userLocationQuery} 
            navigation={navigation} 
        />
    
        ) : (
    
    <View style = {styles.container}>
    
            <Text style={styles.text}> No hay ubicacion </Text>
            <Text style={styles.text}> Seleccionar ubicacion actual </Text>
    
            <AddButton
                title="Elegir ubicacion"
                onPress={() => navigation.navigate("Location Selector")} />
        </View>
    );
};

export default ListAddress;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colores.Light,
        width: "100%",
        height:"100%",
        // padding: 20,

    },
    text: {
        paddingVertical: 20,
        fontFamily: 'Noto-Sans',
        fontSize: 20
    }
});

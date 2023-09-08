import { Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AddButton from "../Components/AddButton";
import AddressItem from '../Components/AddressItem';
import { useGetUserLocationQuery } from "../Services/shopServices";
import { styles } from "../Assets/Styles/Styles";

const ListAddress = ({ navigation }) => {
    const { location, localId } = useSelector((state) => state.userReducer.value);
    const {data: userLocationQuery, isError, isLoading} = useGetUserLocationQuery(localId)

    return location?.latitude || userLocationQuery
        ?
        (
            <AddressItem 
                location={location.latitude ? location : userLocationQuery} 
                navigation={navigation}  />
        )
        :
        (
            <View style = {styles.containerListAddress}>
                <Text style={styles.textListAddress}> No hay ubicacion </Text>
                <Text style={styles.textListAddress}> Seleccionar ubicacion actual </Text>
    
                <AddButton
                    title="Elegir ubicacion"
                    onPress={() => navigation.navigate("Location Selector")} />
            </View>
        );
};

export default ListAddress;
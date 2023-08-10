import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { usePostUserLocationMutation } from "../Services/shopServices";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../Features/User/userSlice";
import { colores } from "../Global/Colores";
import AddButton from "../Components/AddButton";
import MapPreview from "../Components/MapPreview";
import { mapa_api_key } from "../Database/firebaseConfig";
import * as Location from "expo-location";

const LocationSelector = ({ navigation }) => {

    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [error, setError] = useState("");
    const [address, setAddress] = useState("");
    const [triggerPostUserLocation, resultPostUserLocation] = usePostUserLocationMutation()
    const {localId} = useSelector(state => state.userReducer.value)
    const dispatch = useDispatch()
    console.log(location);
    const onConfirmAddress = () => {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address
        }

        dispatch(setUserLocation(
            locationFormatted
        ))

        triggerPostUserLocation({
            location: locationFormatted,
            localId
        })

        navigation.goBack()
    }
    
    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    setError("No hay permiso al acceso");
                    return;
                }
                let location = await Location.getCurrentPositionAsync({});
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });
                
            } catch (error) {
                console.log(error.message);
                setError(error.message)
            }
        })()
    }, [] )

    
    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${mapa_api_key}`;
                    
                    const response = await fetch(url_reverse_geocode);
                    const data = await response.json();
                    console.dir(data);
                    
                    setAddress(data.results[0].formatted_address);
                }
            } catch (error) {
                setError(error.message);
            }
        })();
    }, [location]);

    return (
        <View style={styles.container}>
            
            <Text style = {styles.text} > Mi Ubicación </Text>
            
            {location ? (
            
                <>
                    <Text style = {styles.text} >Lat: {location.latitude}, long: {location.longitude}. </Text>
                    
                    <MapPreview location={location} />
                    
                    <Text style={styles.address}> Ubicacion Actúal: {address} 
                    </Text>
                    
                    <AddButton
                        onPress={onConfirmAddress}
                        title="Confirmar Ubicacion"
                    />
                </>

            ) : (
                
                <>
                    <View style={styles.noLocationContainer}>
                       
                        <Text>{error}</Text>
                
                    </View>
                </>
            
            )}
            
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    text: {
        paddingTop: 20,
        fontFamily: 'Noto-Sans',
        fontSize: 18
    },
    noLocationContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colores.Light,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    address: {
        padding: 10,
        fontFamily: "Noto-Sans",
        fontSize: 16,
    },
});

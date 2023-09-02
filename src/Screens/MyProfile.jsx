import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AddButton from "../Components/AddButton";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/shopServices";
import * as ImagePicker from 'expo-image-picker'

const MyProfile = ({navigation}) => {
    // const {profileImage, imageCamera} = useSelector(state => state.authReducer.value);

    const {localId, profileImage} = useSelector(state => state.userReducer.value)

    const {data: image} = useGetProfileImageQuery(localId)

    console.log(image);

    const cameraImage = image?.image

    const launchCamera = async () => { navigation.navigate('Image Selector') };
    // const launchCamera = async () => { navigation.navigate('Seleccionar imagen') };

    const launchLocation = async () => { navigation.navigate('List Address') };

    console.log(profileImage);

    return (
        <View style={styles.container}>
            {profileImage || cameraImage  ? (
            
            <Image
                    source={{uri: profileImage || cameraImage}}
                    style={styles.image}
                    resizeMode="cover"
                />
            
                ) : (
            
                <Image
                    source={require("../Assets/Images/imageperfil.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            
            )}

            <AddButton onPress={launchCamera} title="Agregar foto" />
            
            <AddButton onPress={launchLocation} title="Ubicación" />

        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});

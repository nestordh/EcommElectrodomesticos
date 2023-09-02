import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import AddButton from "../Components/AddButton";
import { colores } from "../Assets/Colors/Colores";
import { usePostProfileImageMutation } from "../Services/shopServices";
import { useDispatch, useSelector } from "react-redux";
import { saveImage } from "../Features/User/userSlice";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation();
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.userReducer.value);
    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            return false;
        }
        return true;
    };
    const pickImage = async () => {

        const isCameraOk = await verifyCameraPermissions();

        if (isCameraOk) {
           
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            console.log(result.assets);

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
    };

    const confirmImage = async () => {
        try {
           
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status === "granted") {
                console.log("Only valid on emulators and physical devices");
                
                const response = await MediaLibrary.createAssetAsync(image);
                // console.log(response.uri);
                
                triggerSaveImage({
                    image: response.uri,
                    localId: localId,
                });
                
                dispatch(saveImage(response.uri));
            }
        } catch (error) {
            console.log(error);
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <AddButton title = "Tomar otra foto" onPress={pickImage} />
                    <AddButton title = "Confirmar Foto" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>No hay foto para mostrar...</Text>
                    </View>
                    <AddButton title="Tomar una Foto" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colores.green,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

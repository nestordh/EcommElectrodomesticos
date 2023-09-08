import React, { useState } from "react";
import { Image, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";

import AddButton from "../Components/AddButton";
import { usePostProfileImageMutation } from "../Services/shopServices";
import { saveImage } from "../Features/User/userSlice";
import { styles } from "../Assets/Styles/Styles";

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
        <View style={styles.containerImageSelector}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.imageImageSelector} />
                    <AddButton title = "Tomar otra foto" onPress={pickImage} />
                    <AddButton title = "Confirmar Foto" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainerImageSelector}>
                        <Text style={styles.text1ImageSelector}>No hay foto para mostrar...</Text>
                        <Text style={styles.text2ImageSelector}> Aqui va a ir su foto de perfil</Text>
                    </View>
                    <AddButton title="Tomar una Foto" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;
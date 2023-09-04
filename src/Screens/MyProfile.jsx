import { Image, View } from "react-native";
import React from "react";
import AddButton from "../Components/AddButton";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/shopServices";
import * as ImagePicker from 'expo-image-picker'
import { styles } from "../Assets/Styles/Styles";


const MyProfile = ({navigation}) => {
    // const {profileImage, imageCamera} = useSelector(state => state.authReducer.value);

    const {localId, profileImage} = useSelector(state => state.userReducer.value)

    const {data: image} = useGetProfileImageQuery(localId)

    const cameraImage = image?.image

    const launchCamera = async () => { navigation.navigate('Image Selector') };
    
    const launchLocation = async () => { navigation.navigate('List Address') };

    return (
        <View style={styles.containerMyProf}>
            {profileImage || cameraImage  ? (
            
            <Image
                    source={{uri: profileImage || cameraImage}}
                    style={styles.imageMyProf}
                    resizeMode="cover"
                />
            
                ) : (
            
                <Image
                    source={require("../Assets/Images/imageperfil.png")}
                    style={styles.imageMyProf}
                    resizeMode="cover"
                />
            
            )}

            <AddButton onPress={launchCamera} title="Agregar foto" />
            
            <AddButton onPress={launchLocation} title="Ubicación" />

        </View>
    );
};

export default MyProfile;

// const styles = StyleSheet.create({
//     containerMyProf: {
//         padding: 10,
//         gap: 15,
//         alignItems: "center",
//         justifyContent: "flex-start",
//     },
//     imageMyProf: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//     },
// });

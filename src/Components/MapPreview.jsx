import { Image, StyleSheet, View } from "react-native";
import React from "react";

import { mapa_api_key } from "../Database/firebaseConfig";
import { styles } from "../Assets/Styles/Styles";

const MapPreview = ({ location }) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=300x300&maptype=roadmap&markers=color:red%7Clabel:Me%7C${location.latitude},${location.longitude}&key=${mapa_api_key}`;

    return (

        <View style={styles.mapPreview}>
        
            <Image style = {styles.mapImage} source = {{ uri: mapPreviewUrl }} />
        
        </View>
    );
};

export default MapPreview;


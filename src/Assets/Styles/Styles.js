import { StyleSheet, StatusBar, Platform } from "react-native"
import { colores } from "../../Global/Colores"


/**
 * Todos los estilos
 */

export const styles = StyleSheet.create({
    
    containerNav: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    
        mainSignUp: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },
        containerSignUp: {
            width: "90%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colores.greensuave,
            gap: 15,
            paddingVertical: 20,
            borderRadius: 10,
            margin:10
        },
        titleSignUp: {
            fontSize: 22,
            fontFamily: "Noto-Sans",
        },
        subSignUp: {
            fontSize: 14,
            fontFamily: "Noto-Sans",
            color: "black",
        },
        subLinkSignUp: {
            fontSize: 26,
            fontFamily: "Noto-Sans",
            color: "blue",
        },
    
})
import { StyleSheet, StatusBar, Platform } from "react-native"
import { colores } from "../Colors/Colores"


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
    
        
            containerItemDetail: {
                height:580,
                borderRadius: 8,
                padding: 20,
                paddingLeft: 10,
                margin: 15,
                borderWidth: 2,
                borderColor: "gray",
                alignItems:"center",
            },
            mainContainerItemDetail: {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: 10,
            },
            mainContainerLandscapeItemDetail: {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: 10,
          },
            imageItemDetail: {
                width: 300,
                height: 250,
            },
            textContainerItemDetail: {
              flexDirection: 'column'
            },
            textItemDetail:{
                fontSize: 20,
            },
      
        

})
import { StyleSheet, StatusBar, Platform } from "react-native"
import { colores, colores1 } from "../Colors/Colores"



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
    wrapperHome: {
        gap: 20,
    },
    containerHome:{
        flex: 1,
        backgroundColor: colores.marina,
        alignItems: "center",
    },
    flatlistHome: {
        width: '90%',
        // borderRightWidth: "#322654",
    },  
    flatlistHome1: {
        width: '90%',
        borderRightWidth: "#322654",
    },  


    containerCart: {
        justifyContent: 'space-between',
        flex: 2,
        backgroundColor: colores.fondo,
        height: "100%",
    },
    totalContainer1Cart: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCart: {
        fontSize: 20,
        fontFamily: "Noto-Sans",
        padding: 30,
        bottom:20,
      },
    text1Cart: {
        fontSize: 20,
        fontFamily: "Noto-Sans",
        padding: 10,
        //flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center',
        margin:10,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: colores.Light,
    }, 

    containerHeader: {
        backgroundColor: colores.fondo,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        position: "relative",
    
      },
      textHeader: {
        fontSize: 25,
        fontFamily: "Lobster",
      },
      backHeader: {
        position: "absolute",
        right: 30,
        top: "20%",
      },
      exitHeader: {
        position: "absolute",
        left: 30,
        top: "20%",
      },
      tabBarNav: {
        backgroundColor: colores1.iconLight,
        shadowColor: 'black',
        height: 55,
        
    },

    containerMyProf: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    imageMyProf: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    containerCardItem: {
        height: 100,
        backgroundColor: colores.fondo,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    textContainerCardItem: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    textCardItem: {
        fontFamily: "Lobster",
        fontSize: 19,
        color: "green",
    },
    text2CardItem: {
        fontFamily: "Noto-Sans",
        fontSize: 14,
        color: "gray",
    },

    mapPreview: {
        justifyContent: "center",
        alignItems: "center",
    },
    mapImage: {
        width: 300,
        height: 300,
    }, 
  
    containerItemListCategory: {
        height: '100%',
        backgroundColor: colores.marina,
        alignItems: 'center',
        paddingTop:10,
    }, 
    
    containerCounter: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        backgroundColor: colores.Light,
        padding: 8,
        marginTop: 10,
        borderRadius: 20,
    },
    buttonsContainerCounter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        width: "80%"
    },
    button1Counter: {
        padding: 5,
        backgroundColor: colores.greensuave,
        borderRadius: 50,
    },
    buttonText1Counter: {
            fontSize: 26,
    },
    span1Counter: {
        // backgroundColor: colores.plata,
        width: "40%",
        padding: 10,
        textAlign: "center",
        fontSize: 18,
        borderColor: colores.greensuave,
        borderWidth: 1,
        borderRadius: 10,
        margin:10,
    },
    buttonsContainer2Counter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        width: "80%"
    },
    button2Counter: {
        padding: 5,
        backgroundColor: colores.greensuave,
    },
    buttonText2Counter: {
        fontSize: 15,
        fontFamily: "Noto-Sans",
    },
    spanInputCounter: {
        backgroundColor: colores.plata,
        width: "90%",
        padding: 7,
        textAlign: "center",
        fontSize: 15,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
    },
    button3Counter: {
        padding: 5,
        backgroundColor: colores.greensuave,
        width: "80%",
        alignItems: "center",
        borderRadius:10,
    },
    buttonText3Counter: {
        fontSize: 16,
        fontFamily: "Noto-Sans",
    },
    
    ContainerCard: {
        width: 250,
        height: 50,
        shadowColor: "#000",
        shadowOffset:{
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.9,
        elevation: 18,
        borderWidth: 2,
        borderColor: "black",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colores.plata,
        marginVertical: 10,
        borderRadius: 15,
    }, 

    containerAdressItem: {
        height: 100,
        backgroundColor: colores.green,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainerAddressItem: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    textAddressItem: {
        fontFamily: "Noto-Sans",
        fontSize: 17,
        color: "black",
    },
    text2AddresItem: {
        fontFamily: "Noto-Sans",
        fontSize: 19,
        color: colores.marina,
    },

    textCategoryItem: {
        fontSize: 22,
        fontFamily: 'Noto-Sans',
    },
    containerCategoryItem:{
      width:'100%', 
      alignItems:"center"
    },
    additionalStyle:{ 
      borderRadius: 15
    },
})
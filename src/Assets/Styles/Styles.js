import { StyleSheet, StatusBar, Platform } from "react-native";
import { colores, col1, col2 } from "../Colors/Colores";

/**
 * Todos los estilos
 */

export const styles = StyleSheet.create({
  //AddButton
  buttonAddButton: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: col1.sec_iconLight,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  textAddButton: {
    fontFamily: "Noto-Sans",
    fontSize: 18,
    color: "black",
  },

//AdressItem
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



  //Card
  ContainerCard: {
    width: 250,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.9,
    elevation: 18,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: col1.sec_iconLight,
    marginVertical: 10,
    borderRadius: 15,
  },


//CardItem
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
  containerImagesCartItem: {
    color: "violet",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: col1.buttomLight,
    borderRadius: 15,
    padding: 10
  },


  //Cart
  containerCart: {
    justifyContent: "space-between",
    flex: 2,
    backgroundColor: col1.firt_backLight,
    height: "100%",
  },
  totalContainer1Cart: {
    justifyContent: "space-between",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textCart: {
    fontSize: 20,
    fontFamily: "Noto-Sans",
    padding: 30,
    bottom: 20,
  },
  text1Cart: {
    fontSize: 20,
    fontFamily: "Noto-Sans",
    padding: 10,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: col1.firt_backLight,
  },


//CategoryItem
textCategoryItem: {
    fontSize: 22,
    fontFamily: "Noto-Sans",
  },
  containerCategoryItem: {
    width: "100%",
    alignItems: "center",
  },
  additionalStyleCat: {
    borderRadius: 15,
  },


  //Counter
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
    width: "80%",
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
    margin: 10,
  },
  buttonsContainer2Counter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: "80%",
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
    borderRadius: 10,
  },
  buttonText3Counter: {
    fontSize: 16,
    fontFamily: "Noto-Sans",
  },

//Footer
containerFooter:{
    backgroundColor: colores.Light,
    justifyContent: "center",
    alignItems: "center"
},
textFooter:{
    fontSize: 10,
    fontFamily: 'Lobster',
},

//Header
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

  //Home
  wrapperHome: {
    gap: 20,
  },
  containerHome: {
    flex: 1,
    backgroundColor: col1.sec_icon,
    alignItems: "center",
  },
  flatlistHome: {
    width: "90%",
    // borderRightWidth: "#322654",
  },
  flatlistHome1: {
    width: "90%",
    borderRightWidth: "#322654",
  },

//ImageSelector
containerImageSelector: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 30,
    marginTop: 30,
  },
  imageImageSelector: {
    width: 300,
    height: 300,
    borderColor: col1.dark,
  },
  noPhotoContainerImageSelector: {
    width: 300,
    height: 300,
    borderWidth: 3,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text1ImageSelector: {
    padding: 20,
    fontFamily: "Lobster",
  },
  text2ImageSelector: {
    padding: 20,
    color: "gray",
  },


//InputForm
containerInputForm: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  subtitleInputForm: {
    width: "90%",
    fontSize: 16,
    fontFamily: "Noto-Sans",
  },
  errorInputForm: {
    fontSize: 16,
    color: "red",
    fontFamily: "Noto-Sans",
    fontStyle: "italic",
  },
  inputForm: {
    width: "90%",
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: colores.caqui,
    padding: 2,
    fontFamily: "Noto-Sans",
    fontSize: 14,
  },


  //ItemDetail
  containerItemDetail: {
    height: 580,
    borderRadius: 8,
    padding: 20,
    paddingLeft: 10,
    margin: 15,
    borderWidth: 2,
    borderColor: "gray",
    alignItems: "center",
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
    flexDirection: "column",
  },
  textItemDetail: {
    fontSize: 20,
  },
  pressItemDetail :{
    width: "80%",
    borderWidth: 1,
    backgroundColor: col1.sec_iconLight,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },

//ItemListCategory
containerItemListCategory: {
    height: "100%",
    backgroundColor: colores.marina,
    alignItems: "center",
    paddingTop: 10,
  },
  

//ListAddress
containerListAddress: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: col1.firt_backLight,
    width: "100%",
    height: "100%",
  },
  textListAddress: {
    paddingVertical: 20,
    fontFamily: "Noto-Sans",
    fontSize: 20,
  },

//LocationSelector
containerLocationSelector: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textLocationSelector: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
    color: col1.firt_backLight,
    fontFamily: "Noto-Sans",
  },
  noLocationContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: col1.firt_back,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addressLocationSelector: {
    padding: 20,
    fontSize: 18,
    color: col1.buttomLight,
    fontFamily: "Noto-Sans",
  },

//LoginScreen
mainLoginScreen: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerLoginScreen: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colores.Light,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  titleLoginScreen: {
    fontSize: 22,
    fontFamily: "Noto-Sans",
  },
  subLoginScreen: {
    fontSize: 14,
    color: "black",
  },
  subLinkLoginScreen: {
    fontSize: 14,
    color: "blue",
  },


  //MiProfile
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


  //navigator
  containerNavigator: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

//orderItem
containerCardOrderItem: {
    height: 100,
    backgroundColor: colores.caqui,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainerOrderItem: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textOrderItem: {
    fontFamily: "Lobster",
    fontSize: 17,
    color: "black",
  },
  text2OrderItem: {
    fontFamily: "Lobster",
    fontSize: 19,
    color: colores.green,
  },
  imageOrderItem: {
    color: "YellowBox",
  
  },

//OrderScreen 
containerOrderScreen: {
    
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    padding:50,
},
textOrderScreen: {
    fontFamily:"Noto-Sans",
    fontSize: 15,
    color:"gray",
    gap:30,

},

  //ProductItem
  imageProductItem: {
    height: 100,
    width: "75%",
    borderRadius: 8,
    padding: 20,
    backgroundColor: colores.fondo,
    paddingLeft: 10,
  },
  additionalStylesCardProductItem: {
    flexDirection: "row",
    height: 120,
    justifyContent: "space-between",
    padding: 10,
  },
  textCategoryProductItem: {
    width: "60%",
    fontSize: 22,
  },
  textCategorySmProductItem: {
    width: "60%",
    fontSize: 15,
  },


//Search
containerSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingLeft : 15,
    borderWidth:2,
    borderColor: colores.greensuave,
    borderRadius: 10,
    width: "auto",
},
inputSearch: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colores.Light,
    borderRadius: 10,
},
containerSmSearch: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
},


  //SignUp
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
    backgroundColor: col1.third_light,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
    margin: 10,
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

//SubmitButton
buttonSubmitButton: {
    backgroundColor: colores.greensuave,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: '60%'
},
textSubmitButton: {
    color: colores.Light,
    fontSize: 22
},

  //TabNavigator
  tabBarNav: {
    backgroundColor: col1.sec_iconLight,
    shadowColor: "black",
    height: 45,
  },
  itemTabNav: {},


  
  
  





  
  
  



  



  

  
});

import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colores } from "../Global/Colores";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ route, navigation }) => {
  let title;
  if (route.name === "Home") title = "Home";
  if (route.name === "ItemListCategory") title = route.params.category;
  if (route.name === "Detail") title = route.params.title;

  return (
    <View style={styles.containerHeader}>
      
      <Text style={styles.text}>{title}</Text>
        {route.name !== "Home" ? (
        
          <Pressable style={styles.pressable}
                     onPress={() => navigation.goBack()} >
          
             <AntDesign name="back" size={24} color="black" />
          
          </Pressable>
      
      ) : null}
   
    </View>

    // <View  style = { styles.containerHeader } >
    //      <Text style = { styles.text } > Mis Productos </Text>
    // </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: colores.Light,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  text: {
    fontSize: 25,
    fontFamily: "Lobster",
  },
  pressable: {
    position: "absolute",
    right: 30,
    top: "50%",
},
});

import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colores } from "../Global/Colores";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Features/User/userSlice";
import { SimpleLineIcons } from "@expo/vector-icons";
import { deleteSession } from "../SQLite";


const Header = ({ route, navigation }) => {
  
  let title;
  if (route.name === "Home") title = "Home";
  else if (route.name === "ItemListCategory") title = route.params.category
  else if (route.name === "Detail") title = route.params.title
  else title = route.name;

    const dispatch = useDispatch();
    const {email, localId} = useSelector((state) => state.userReducer.value);

    const onSignout = async () => { 
      try{
          //debugger
          console.log("Borrando sesion...");
          const response = await deleteSession(localId)
          console.log("Session borrada: ")
          console.log(response)
          dispatch(signOut());
      } catch (error) {
          console.log('Error al cerrar la sesion:')
          console.log(error.message);
      }
    }

  return (
    <View style={styles.containerHeader}>
      
      <Text style={styles.text}> {title} </Text>
        
        {navigation.canGoBack() ? (
        
          <Pressable style={styles.back}
                     onPress={() => navigation.goBack()} >

              <AntDesign name="back" size= {25} color="black" />
              <Text> Volver </Text>

          </Pressable>  

      ) : null}
   
      {email ? (
                <Pressable
                    style={styles.exit}
                   // onPress={() => dispatch(signOut())} >
                    onPress={onSignout} >
                   
                  <SimpleLineIcons name="logout" size={25} color="black" />
                  <Text> Salir </Text>
                
                </Pressable>

            ) : null}

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: colores.fondo,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    position: "relative",

  },
  text: {
    fontSize: 25,
    fontFamily: "Lobster",
  },
  back: {
    position: "absolute",
    right: 30,
    top: "20%",
  },
  exit: {
    position: "absolute",
    left: 30,
    top: "20%",
  },

});

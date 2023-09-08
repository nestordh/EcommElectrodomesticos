import { Text, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { SimpleLineIcons } from "@expo/vector-icons";

import { signOut } from "../Features/User/userSlice";
import { deleteSession } from "../SQLite";
import { styles } from "../Assets/Styles/Styles";

/**
 * 
 * @param {*} param0 
 * @returns 
 */


const Header = ({ 
              route,
              navigation
              }) => {
  
  let title;
  if (route.name === "Home") title = "Home";
  else if (route.name === "ItemListCategory") title = route.params.category
  else if (route.name === "Detail") title = route.params.title
  else title = route.name;

    const dispatch = useDispatch();
    const {email, localId} = useSelector((state) => state.userReducer.value);

console.log(email);

    const onSignOut = async () => { 
      try{
          const response = await deleteSession(localId)
          dispatch(signOut());
      } catch (error) {
          ('Error al cerrar la sesion:')
        }
    }

  return (
    <View style={styles.containerHeader}>
      
      <Text style={styles.textHeader}> {title} </Text>
        
        {navigation.canGoBack() 
        //route.name !== ("SignUp" || "Login" ||"Home")
          ?
          ( <Pressable style={styles.backHeader}
                       onPress={() => navigation.goBack()} >
                      <AntDesign name="back" size= {25} color="black" />
                      <Text> Volver </Text>
            </Pressable>  
          )   
          : null
        }
        { email
          ?
          (
            <Pressable style={styles.exitHeader}
                       onPress={onSignOut}  >
                      <SimpleLineIcons name="logout" size={25} color="black" />
                      <Text> Salir </Text>
             </Pressable>
          )
          : null}
    </View>
  );
};

export default Header;

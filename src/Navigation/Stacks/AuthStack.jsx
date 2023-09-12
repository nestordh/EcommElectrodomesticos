import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Header from '../../Components/Header'
import LoginScreen from "../../Screens/LoginScreen";
import SignUpScreen from "../../Screens/SignUpScreen"
 /**
  * 
  */


const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={({ route,
                             navigation
                            }) => ({
                header: () => {
                    return <Header route = {route} navigation = {navigation}/>;
                },
            })} 
        >
            <Stack.Screen name = "SignUp" component = {SignUpScreen} />
           
            <Stack.Screen name = "Login" component = {LoginScreen} />

        </Stack.Navigator>
    );
};

export default AuthStack;
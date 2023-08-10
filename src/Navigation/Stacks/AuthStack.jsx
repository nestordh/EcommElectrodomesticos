import React from "react";
import Header from '../../Components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from "../../Screens/LoginScreen";
import SignUpScreen from "../../Screens/SignUpScreen"


const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
       
        <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route = {route} navigation = {navigation}/>;
                },
            })} 
        >
           
            <Stack.Screen name = "Login" component = {LoginScreen} />

            <Stack.Screen name = "SignUp" component = {SignUpScreen} />

        </Stack.Navigator>
    );
};

export default AuthStack;
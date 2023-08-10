import React from "react";
import Header from '../../Components/Header'
import Cart from "../../Screens/Cart";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions = { ( { route, navigation } ) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >
            <Stack.Screen name = "Carrito de compras"  component = { Cart } />

        </Stack.Navigator>
    );
};

export default CartStack;
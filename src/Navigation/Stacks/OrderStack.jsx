import React from "react";
import Header from '../../Components/Header'
import OrderScreen from "../../Screens/OrderScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const OrderStack = () => {
  return (
    
    <Stack.Navigator
          initialRouteName = "OrderScreen"
          screenOptions = { ( { route, navigation } ) => ( {
            header: () => {
              return <Header route={route} navigation={navigation}/> ;
            },
          })}>

          <Stack.Screen name = "Ordenes de compra" component={OrderScreen} />
     
      </Stack.Navigator>
  
  );
};

export default OrderStack;
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ItemDetail from '../../Screens/ItemDetail'
import ItemListCategory from '../../Screens/ItemListCategory'
import Home from "../../Screens/Home";
import Header from '../../Components/Header'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
 
  return (
      <Stack.Navigator
        initialRouteName = "Home"
        screenOptions = {({ route,
                            navigation
                        }) => ({
                 header: () => {
                       return <Header route={route} navigation={navigation} />;
          },
        })}
      >
          <Stack.Screen name="Tienda" component={Home} />
     
          <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
     
          <Stack.Screen name="Detail" component={ItemDetail} />
    
      </Stack.Navigator>
    );
};

export default ShopStack;



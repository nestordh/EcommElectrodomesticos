import { StyleSheet, SafeAreaView, StatusBar, View, Platform  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colores } from '../Global/Colores'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import Footer from '../Components/Footer'
import ShopStack from './Stacks/ShopStack'
import CartStack from './Stacks/CartStack'
import OrderStack from './Stacks/OrderStack';


const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
   
   <SafeAreaView style = { styles.container }> 
      
      <NavigationContainer>
            
            <Tab.Navigator
                screenOptions = { {
                  headerShown: false,
                  tabBarStyle: styles.tabBar,
                } }
                >
                <Tab.Screen
                name = 'Tienda'
                component = { ShopStack }
                options = { {
                  tabBarIcon: ( { focused } ) => {
                    return (
                      <View>
                          <Entypo name = "shopping-basket" size = {35} color = { focused ? "green" : colores.greensuave} />
                      </View>
                    )
                  }
                }}
                />

                <Tab.Screen
                  name = 'Carrito'
                  component = { CartStack }
                  options = { {
                    tabBarIcon: ( { focused } ) => {
                      return (
                        <View>
                          <FontAwesome name="cart-plus" size={35} color = { focused ? "green" : colores.greensuave} />
                        </View>
                      )
                    }
                    }}
                />

                <Tab.Screen
                  name = 'Orden'
                  component = {OrderStack}
                  options = { {
                    tabBarIcon : ( { focused } ) => {
                      return (
                        <View>
                          <MaterialCommunityIcons name="order-bool-descending-variant" size={35} color={ focused ? "green" : colores.greensuave} />
                        </View>
                      )
                    }
                    }}
                />
                
            </Tab.Navigator>

           <Footer/>
      
      </NavigationContainer>
   
    </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  tabBar: {
    backgroundColor: colores.Light,
    shadowColor: 'black',
    height:'6%',
   }
})
import { View } from 'react-native'
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import ShopStack from '../Stacks/ShopStack'
import CartStack from '../Stacks/CartStack'
import OrderStack from '../Stacks/OrderStack';
import MyProfileStack from '../Stacks/MyProfileStack';
import { colores } from '../../Assets/Colors/Colores';
import { styles } from '../../Assets/Styles/Styles';

/**
 * TabNavigator de Navigator
 * @returns los tabs de la pantalla
 */

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarNav,
      }}
    >
    <Tab.Screen
      name="Shop"
      component={ShopStack}
      options={{
            tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Entypo
                      name="shopping-basket"
                      size={35}
                      color={focused ? "green" : colores.greensuave}
                    />
                  </View>
              );
            },
        }}
      />

    <Tab.Screen
      name="Carrito"
      component={CartStack}
      options={{
          tabBarIcon: ({ focused }) => {
             return (
                <View>
                  <FontAwesome
                    name="cart-plus"
                    size={35}
                    color={focused ? "green" : colores.greensuave}
                  />
                </View>
              );
          },
        }}
      />

    <Tab.Screen
      name="Ordenes"
      component={OrderStack}
      options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <MaterialCommunityIcons
                  name="order-bool-descending-variant"
                  size={35}
                  color={focused ? "green" : colores.greensuave}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.itemTabNav}>
                <Ionicons
                  name="person-circle-outline"
                  size={35}
                  color={focused ? "green" : colores.greensuave}
                />
              </View>
            );
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

import { StyleSheet, SafeAreaView, StatusBar, View, Platform  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colores } from '../Global/Colores'
// import { Entypo } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import ShopStack from './Stacks/ShopStack'
import CartStack from './Stacks/CartStack'
import OrderStack from './Stacks/OrderStack';
import AuthStack from './Stacks/AuthStack';
import MyProfileStack from './Stacks/MyProfileStack';
import { useDispatch, useSelector } from 'react-redux';
import { getSession } from '../SQLite';
import { setUser } from '../Features/User/userSlice';


const Tab = createBottomTabNavigator()

const Navigator = () => {

  const {email, localId} = useSelector((state) => state.userReducer.value);

  const dispatch = useDispatch()

  //Get stored sessions
  useEffect( () => {
      (async () => {
          try {
              console.log('Getting session...');
              const session = await getSession()
              console.log('Sesion: ');
              console.log(session);
              if (session?.rows.length) {
                  const user = session.rows._array[0]
                  dispatch(setUser(user))
              }
          } catch (error) {
              console.log('Error getting session');
              console.log(error.message);
          }
      })()
  }, [])



  return (
   
   <SafeAreaView style = { styles.container } > 
      
      <NavigationContainer>
            {
              email ?
              // true ?
            
            <Tab.Navigator
                screenOptions = { {
                  headerShown: false,
                  // tabBarShowLabel: false,
                  tabBarStyle: styles.tabBar,
                } }
              >
               
                <Tab.Screen
                name = 'Shop'
                component = { ShopStack }
                options = { {
                  tabBarIcon: ( { focused } ) => {
                    return (
                      <View>
                          <Entypo name = "shopping-basket" size = {35} color = { focused ? "green" : colores.greensuave} />
                      </View>
                    )
                  }
                }} />

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
                    }} />

                <Tab.Screen
                  name = 'Ordenes'
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

                <Tab.Screen
                    name="Perfil"
                    component={MyProfileStack}
                    options= {{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={styles.item}>
                                    <Ionicons name="person-circle-outline" size={24} color={ focused ? "green" : colores.greensuave } />
                                </View>
                            );
                        },
                    }}
                    /> 
            
            </Tab.Navigator>

            :
            
            <AuthStack/>
                
                }
       
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
    backgroundColor: colores.fondo,
    shadowColor: 'black',
    // height:'6%',
    height: 60,

   }
})
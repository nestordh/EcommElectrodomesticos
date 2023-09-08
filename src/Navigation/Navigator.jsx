import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react'

import AuthStack from './Stacks/AuthStack';
import { getSession } from '../SQLite';
import { setUser } from '../Features/User/userSlice';
import TabNavigator from './Tabs/TabNavigator';
import { styles } from '../Assets/Styles/Styles';

/**
 * 
 * @returns 
 */

const Navigator = () => {
  const {email} = useSelector((state) => state.userReducer.value);
  const dispatch = useDispatch()
  
  useEffect( () => {
      (async () => {
          try {
            console.log("recibir sesion")
              const session = await getSession()
            console.log("Sesion: ");
            console.log(session);
              if (session?.rows.length) {
                  const user = session.rows._array[0]
                  dispatch(setUser(user))
              }
          } catch (error) {
              console.log("Error al recibir el ingreso");
              console.log(error.message);
          }
        })()
  }, [])

  return (
    <SafeAreaView style={styles.containerNavigator} > 
      
      <NavigationContainer>
      
            { email ? (<TabNavigator/>) : ( <AuthStack/> ) }
            {/* { true ? <TabNavigator/> : <AuthStack/> } */}
      
      </NavigationContainer>
    
    </SafeAreaView>
  )
}

export default Navigator

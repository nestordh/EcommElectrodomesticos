import { View } from 'react-native'
import React from 'react'
import { styles } from '../Assets/Styles/Styles'

const Card = ( { children, additionalStyle = [] } ) => {
  return (

    <View style = { [ styles.ContainerCard, additionalStyle ] }>

        {children}

    </View>
  )
}

export default Card
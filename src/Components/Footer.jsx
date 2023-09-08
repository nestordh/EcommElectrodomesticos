import { Text, View } from 'react-native'
import React from 'react'

import { styles } from '../Assets/Styles/Styles'

const Footer = () => {
  return (
   
    <View style = { styles.containerFooter}>
    
      <Text style = {styles.textFooter } > Derechos reservados. CoderHouse. Heredia Nestor 2023 </Text>
   
    </View>
  )
}

export default Footer
import {Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { styles } from '../Assets/Styles/Styles';

const InputForm = ({
    label, 
    onChange, 
    error = "",
    isSecure = false
}) => {
    
    const [input, setInput] = useState("");
    
    const onChangeText = (text) => {
          setInput(text)
          onChange(text)
    }
  
    return (
        <View style={styles.containerInputForm}>
                <Text style={styles.subtitleInputForm}> {label} </Text>
                <TextInput style ={styles.inputForm}
                           value={input}
                           onChangeText={onChangeText}
                           secureTextEntry={isSecure} />
                { error 
                ? 
                <Text style = {styles.errorInputForm}> 
                    {error}
                </Text>
                :
                null  }
        </View>
  )
}

export default InputForm
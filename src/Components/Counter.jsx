import { Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incrementByAmount, reset} from "../Features/Counter/counterSlice";
import { styles } from "../Assets/Styles/Styles";

const Counter = () => {
    
    const [inputToAdd, setInputToAdd] = useState('0');
    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.value )

    return (
        <View style={styles.containerCounter}>
           
            <View style = { styles.buttonsContainerCounter} >
                <Pressable style = { styles.button1Counter }
                           onPress = {() => dispatch(decrement ())} >
                           <Text style = { styles.buttonText1Counter } > - </Text>

                </Pressable>
                
                <Text style = { styles.span1Counter } > { count } </Text>
                <Pressable style = { styles.button1Counter }
                           onPress = {() => dispatch ( increment())}  >
                           <Text style={styles.buttonText1Counter}> + </Text>
                </Pressable>
            </View>
            
            <View style={styles.buttonsContainer2Counter}>
                <TextInput
                    placeholder = "Cant a aumentar "
                    style = { styles.spanInputCounter }
                    onChangeText = { setInputToAdd }
                    value = { inputToAdd.toString() } />
        
                <Pressable 
                    style={styles.button2Counter}
                    onPress={()=> dispatch (incrementByAmount (Number(inputToAdd)))} >
                    <Text style={styles.buttonText2Counter} > Agregar </Text>
                </Pressable>
            </View>
            
            <Pressable 
                style={styles.button3Counter}
                onPress={()=> dispatch(reset())} >
                <Text style={styles.buttonText3Counter}>  Borrar  </Text>
            </Pressable>
        
        </View>
    );
};

export default Counter;
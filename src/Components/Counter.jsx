import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colores } from "../Global/Colores";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, reset} from "../Features/Counter/counterSlice";

const Counter = () => {
    
    const [inputToAdd, setInputToAdd] = useState(0);

    const dispatch = useDispatch()

    const count = useSelector(state => state.counterReducer.value)

    return (
        <View style={styles.container}>
           
            <View style = { styles.buttonsContainer} >
                <Pressable style = { styles.button1 }
                    onPress = { () => dispatch(decrement () ) }
                >
                        <Text style = { styles.buttonText1 } > - </Text>
                </Pressable>
                
                <Text style = { styles.span1 } > { count } </Text>
                <Pressable style = { styles.button1 }
                     onPress = { () => dispatch ( increment() ) }
                >
        
                        <Text style={styles.buttonText1}> + </Text>
                </Pressable>
            </View>
            
            <View style={styles.buttonsContainer2}>
                <TextInput
                    placeholder = "Cant a sumar "
                    style = { styles.spanInput }
                    onChangeText = { setInputToAdd }
                    value = { inputToAdd } />
        
                <Pressable 
                    style={styles.button2}
                    onPress={()=> dispatch (incrementByAmount ( Number (inputToAdd) ) ) } >
                    <Text style={styles.buttonText2} > Agregar </Text>
                </Pressable>
            </View>
            
            <Pressable 
                style={styles.button3}
                onPress={()=> dispatch(reset())} >
                <Text style={styles.buttonText3}>  Borrar  </Text>
            </Pressable>
        
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        backgroundColor: colores.Light,
        padding: 8,
        marginTop: 10,
        borderRadius: 20,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        width: "80%"
    },
    
    
    button1: {
        padding: 5,
        backgroundColor: colores.greensuave,
        borderRadius: 50,
    },
    buttonText1: {
            fontSize: 26,
    },
    span1: {
        // backgroundColor: colores.plata,
        width: "40%",
        padding: 10,
        textAlign: "center",
        fontSize: 18,
        borderColor: colores.greensuave,
        borderWidth: 1,
        borderRadius: 10,
        margin:10,

    },
    
    
    buttonsContainer2: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        width: "80%"
    },
    button2: {
        padding: 5,
        backgroundColor: colores.greensuave,

    },
    buttonText2: {
        fontSize: 15,
        fontFamily: "Noto-Sans",
    },
    spanInput: {
        backgroundColor: colores.plata,
        width: "90%",
        padding: 7,
        textAlign: "center",
        fontSize: 15,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
    },
    
    

    button3: {
        padding: 5,
        backgroundColor: colores.greensuave,
        width: "80%",
        alignItems: "center",
        borderRadius:10,
    },
    buttonText3: {
        fontSize: 16,
        fontFamily: "Noto-Sans",
    },
});

import { Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "../Features/User/userSlice";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useSignUpMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail }  from "../Validations/auth"
import { styles } from "../Assets/Styles/Styles";
import { basLogo1 } from "../Assets/Images/basLogo1.jpg"
 
/**
  * 
  * @param {*} param0 
  * @returns 
  */

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignUp, result] = useSignUpMutation()
    const dispatch = useDispatch()

    useEffect(()=> {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                    localId: result.data.localId,
                    profileImage: "",
                    location: {
                        latitude: "",
                        longitude: "",
                        },
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        try {
            const isValidVariableEmail = isValidEmail(email)
            const isCorrectPassword = isAtLeastSixCharacters(password)
            const isRepeatedPasswordCorrect = password === confirmPassword

            if (isValidVariableEmail && isCorrectPassword && isRepeatedPasswordCorrect) {
                const request = {
                    email,
                    password,
                    returnSecureToken: true
                }
                triggerSignUp(request)
            }

            if (!isValidVariableEmail) setErrorMail ('El E-mail no es correcto')
            else setErrorMail('')
            
            if (!isCorrectPassword) setErrorPassword ('Contraseña con minimo de 6 caracteres')
            else setErrorPassword('')
            
            if (!isRepeatedPasswordCorrect) setErrorConfirmPassword ('Las contraseñas deben coincidir')
            else setErrorConfirmPassword('')

        } catch (err) {
            ('mal direccion')
            }
    };

    return (
        <View style={styles.mainSignUp}>

            <View>
                <Image 
                    source={{basLogo1}}
                    style={styles.imageSignUp}
                    resizeMode="contain"
                    />   
            </View>
             

            <View style={styles.containerSignUp} >
                <Text style={styles.subSignUp}> Ya tienes una cuenta? </Text>
                
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLinkSignUp}> Iniciar sesion </Text>
                </Pressable>
            </View>

            <View style={styles.containerSignUp}>
        
                <Text style={styles.titleSignUp}> Registrarse </Text>

                <InputForm label={"E-mail"}
                           onChange={setEmail}
                           error={errorMail} />
                
                <InputForm label={"password"}
                           onChange={setPassword}
                           error={errorPassword}
                           isSecure={true} /> 

                <InputForm label={"Confirmar password"}
                           onChange={setConfirmPassword}
                           error={errorConfirmPassword}
                           isSecure={true} />

                <SubmitButton style={styles.subLinkSignUp}
                              title="Entrar" 
                              onPress={onSubmit} /> 
            
            </View>
        </View>
    );
};

export default SignUpScreen;

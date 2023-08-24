import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colores } from "../Global/Colores";
import { useSignUpMutation } from "../Services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { isAtLeastSixCharacters, isValidEmail }  from "../Validations/auth"
// import { setUser } from "../features/auth/authSlice";
// import { signupSchema } from "../validations/singupSchema";

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
            //Submit logic with validations
            const isValidVariableEmail = isValidEmail(email)
            //ver mensaje error
            const isCorrectPassword = isAtLeastSixCharacters(password)
            //ver mensaje error
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
            console.log("Catch error");
            console.log(err.message);
        }
    };

    return (
        <View style={styles.main}>

            <View style={styles.container} >
                <Text style={styles.sub}> Ya tienes una cuenta? </Text>
                
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}> Iniciar sesion </Text>
                </Pressable>

            </View>


            <View style={styles.container}>
        
                <Text style={styles.title}> Registrarse </Text>

                <InputForm label={"E-mail"} onChange={setEmail} error={errorMail} />
                
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true} /> 

                <InputForm
                    label={"Confirmar password"}
                    onChange={setConfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}  />

                <SubmitButton style={styles.subLink}
                     onPress={onSubmit} title="Entrar" />
            
            </View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colores.greensuave,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
        margin:10
    },
    title: {
        fontSize: 22,
        fontFamily: "Noto-Sans",
    },
    sub: {
        fontSize: 14,
        fontFamily: "Noto-Sans",
        color: "black",
    },
    subLink: {
        fontSize: 26,
        fontFamily: "Noto-Sans",
        color: "blue",
    },
});

import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colores } from "../Global/Colores";
import { useSignUpMutation } from "../Services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { isAtLeastSixCharacters, isValidEmail }  from "../Validations/auth"

const CheckInScreen = () => {
  return (

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
    
  
  )
}

export default CheckInScreen

const styles = StyleSheet.create({})
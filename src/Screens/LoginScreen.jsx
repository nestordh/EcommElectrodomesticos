import React, { useState, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useSignInMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { setUser } from "../Features/User/userSlice";
import { insertSession } from "../SQLite";
import { styles } from "../Assets/Styles/Styles";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const dispatch = useDispatch();
  const [triggerSignIn, resultSignIn] = useSignInMutation();
  
  const onSubmit = () => {
    const isValidVariableEmail = isValidEmail(email);
    const isCorrectPassword = isAtLeastSixCharacters(password);
    
    if (isValidVariableEmail && isCorrectPassword) {
      triggerSignIn({ email,
                      password, 
                      returnSecureToken: true,
      });
    }
    if (!isValidVariableEmail) setErrorEmail("Email no es correcto");
    else setErrorEmail("");
    if (!isCorrectPassword)
      setErrorPassword("La contraseña debe tener al menos 6 caracteres");
    else setErrorPassword("");
  };

console.log(resultSignIn)

  useEffect(() => {
    (async () => {
      try {
        if (resultSignIn.isSuccess) {
          const response = await insertSession({
                                idToken: resultSignIn.data.idToken,
                                localId: resultSignIn.data.localId,
                                email: resultSignIn.data.email,
                        });
          
                       dispatch ( setUser({
                                email: resultSignIn.data.email,
                                idToken: resultSignIn.data.idToken,
                                localId: resultSignIn.data.localId,
                                profileImage: "",
                                location: {
                                  latitude: "",
                                  longitude: "",
                                },
                              })
          );
        }
      } 
      catch (error) {
      }
    })();
  }, [resultSignIn]);

  return (
    <View style={styles.mainLoginScreen}>
      <View style={styles.containerLoginScreen}>
        
        <Text style={styles.titleLoginScreen}> Iniciar Sesion </Text>
        
        <InputForm
          label={"email"}
          onChange={(email) => setEmail(email)}
          error={errorEmail}
        />

        <InputForm
          label={"password"}
          onChange={(password) => setPassword(password)}
          error={errorPassword}
          isSecure={true}
        />

        <SubmitButton onPress={onSubmit}
                      title=" Entrar " />

        <Text style={styles.subLoginScreen}> No tienes una cuenta? </Text>

        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.subLinkLoginScreen}> Registrarse </Text>
        </Pressable>

      </View>
    </View>
  );
};

export default LoginScreen;
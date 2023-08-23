import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colores } from "../Global/Colores";
import { useSignInMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { insertSession } from "../SQLite";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const dispatch = useDispatch();
  const [triggerSignIn, resultSignIn] = useSignInMutation();
  const onSubmit = () => {
    const isValidVariableEmail = isValidEmail(email);
    //ver mensaje error
    const isCorrectPassword = isAtLeastSixCharacters(password);
    //ver mensaje error

    if (isValidVariableEmail && isCorrectPassword) {
      triggerSignIn({
        email,
        password,
        returnSecureToken: true,
      });
    }
    if (!isValidVariableEmail) setErrorEmail("Email no es correcto");
    else setErrorEmail("");
    if (!isCorrectPassword)
      setErrorPassword("Password must be at least 6 characters");
    else setErrorPassword("");
  };

  useEffect(() => {
    (async () => {
      try {
        if (resultSignIn.isSuccess) {
          console.log("inserting Session");

          const response = await insertSession({
            idToken: resultSignIn.data.idToken,
            localId: resultSignIn.data.localId,
            email: resultSignIn.data.email,
          });
          console.log("Session inserted: ");
          console.log(response);

          dispatch(
            setUser({
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
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [resultSignIn]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        
        <Text style={styles.title}> Iniciar Sesion </Text>

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

        <SubmitButton onPress={onSubmit} title=" Entrar " />

        <Text style={styles.sub}> No tienes una cuenta? </Text>

        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.subLink}> Registrarse </Text>
        </Pressable>

      </View>
    </View>
  );
};

export default LoginScreen;

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
    backgroundColor: colores.Light,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Noto-Sans",
  },
  sub: {
    fontSize: 14,
    color: "black",
  },
  subLink: {
    fontSize: 14,
    color: "blue",
  },
});

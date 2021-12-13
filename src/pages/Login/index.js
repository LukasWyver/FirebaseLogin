import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import LogoSvg from "./../../assets/logo.svg";
import GoogleLogoSvg from "./../../assets/googleLogo.svg";

import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import firebase from "../../Auth/firebaseConnection";

console.disableYellowBox = true;

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const navigation = useNavigation();

  function SignUp() {
    navigation.navigate("SignUp");
  }

  async function LoginWithEmail() {
    if (email !== "" && senha !== "") {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then((value) => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          alert("Ops deu algo errado!");
          return;
        });
      setEmail("");
      setSenha("");
      Keyboard.dismiss();
    } else {
      alert("preencha todos os campos primeiro!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ alignItems: "center" }}>
          <LogoSvg width={160} height={160} />
        </View>

        <View style={styles.headerButtonContainer}>
          <View>
            <TouchableOpacity>
              <Text style={[styles.textHeader, { color: "#f8774a" }]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={SignUp}>
              <Text style={styles.textHeader}>Inscrever-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.main}>
        <View>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Digite seu e-mail..."
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.textInput}
              value={senha}
              onChangeText={(number) => setSenha(number)}
              placeholder="Digite sua senha..."
              secureTextEntry={hidePass} //* esconde a senha quando digitada *//
              maxLength={6}
            />
            <TouchableOpacity
              style={styles.iconEye}
              onPress={() => setHidePass(!hidePass)}
            >
              <FontAwesome5
                name={hidePass ? "eye-slash" : "eye"}
                size={22}
                color="#ccc"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.textForgot}> esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.buttonLogin, { backgroundColor: "#f8774a" }]}
            onPress={LoginWithEmail}
          >
            <Text style={styles.textFooter}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>Ou</Text>
        <View>
          <TouchableOpacity
            style={[styles.buttonLogin, { backgroundColor: "#1877F2" }]}
          >
            <FontAwesome5 name="facebook" size={24} color="white" />
            <Text style={styles.textFooter}>Login com Facebook</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.buttonLogin, { backgroundColor: "#ffffff" }]}
          >
            <GoogleLogoSvg />
            <Text style={[styles.textFooter, { color: "rgba(0,0,0,0.6)" }]}>
              Login com Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  headerContainer: {
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    padding: "5%",
    elevation: 1,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  headerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    flexDirection: "column",
    padding: "5%",
    paddingBottom: "10%",
    paddingHorizontal: "10%",
    justifyContent: "space-between",
  },
  textInput: {
    backgroundColor: "#ffff",
    width: "100%",
    height: 48,
    padding: 8,
    paddingLeft: 12,
    borderRadius: 8,
    marginTop: 12,
    zIndex: 1,
  },
  iconEye: {
    zIndex: 2,
    marginLeft: "-12%",
    marginTop: "3%",
  },
  textForgot: {
    marginTop: 8,
    color: "#f8774a",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonLogin: {
    width: "100%",
    height: 48,
    marginTop: 12,
    backgroundColor: "#bcbaba",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: "15%",
    borderRadius: 25,
    elevation: 1,
  },
  textFooter: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

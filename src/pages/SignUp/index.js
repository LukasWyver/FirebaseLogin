import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

import LogoSvg from "./../../assets/logo.svg";
import FbLogoSvg from "../../assets/fbLogo.svg";
import GoogleLogoSvg from "./../../assets/googleLogo.svg";

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ alignItems: "center" }}>
          <LogoSvg width={160} height={160} />
        </View>

        <View style={styles.headerButtonContainer}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textHeader}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={SignUp}>
              <Text style={[styles.textHeader, { color: "#f8774a" }]}>
                Inscrever-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <Text style={styles.mainTitle}>Registrar</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.mainIcon}>
              <TouchableOpacity>
                <GoogleLogoSvg />
              </TouchableOpacity>
            </View>
            <View style={styles.mainIcon}>
              <TouchableOpacity>
                <FbLogoSvg />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.mainInput}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(name) => setName(name)}
            placeholder="Nome"
          />
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={(email) => setEmail(email)}
            placeholder="E-mai"
          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.textInput}
              value={password}
              onChangeText={(number) => setPassword(number)}
              placeholder="Digite sua senha..."
              keyboardType="numeric"
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

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.textInput}
              value={passwordConfirm}
              onChangeText={(number) => setPasswordConfirm(number)}
              placeholder="Confirme sua senha..."
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
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.buttonSignUp}>
            <Text style={styles.textButton}>Inscrever-se</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.textButtonLogin}>Já tem cadastro?</Text>
            <Text style={[styles.textButtonLogin, styles.textButtonLoginBold]}>
              Login
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
    marginVertical: "5%",
    paddingHorizontal: "10%",
  },
  mainHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f8774a",
  },
  mainIcon: {
    padding: 8,
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    elevation: 2,
  },
  textInput: {
    backgroundColor: "#ffff",
    height: 48,
    width: "100%",
    padding: 8,
    paddingLeft: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  iconEye: {
    zIndex: 2,
    marginLeft: "-12%",
    marginTop: "3%",
  },
  buttonSignUp: {
    height: 48,
    marginTop: 12,
    backgroundColor: "#f8774a",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
    borderRadius: 25,
    elevation: 1,
  },
  buttonLogin: {
    width: "30%",
    height: 48,
    marginTop: 12,
    marginLeft: 12,
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 8,
  },
  textButton: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  textButtonLogin: {
    color: "#bcbaba",
    fontSize: 16,
  },
  textButtonLoginBold: {
    fontWeight: "bold",
    paddingLeft: 4,
  },
});

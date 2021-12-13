import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import WelcomeSvg from "./../../assets/welcome.svg";

export default function Home({ route }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <WelcomeSvg style={styles.logo} />
      </View>

      <View style={styles.main}>
        <Text style={styles.title}>Bem Vindo {route.params?.name}!</Text>
        <Text style={styles.text}>
          Desbloqueie o mundo dos alimentos regulares e resgatados, configurando
          seu endereço de entrega.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>Selecione sua localização:</Text>

        <View style={styles.areaButton}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="search-location" size={24} color="#414141" />
            <Text style={styles.textButton}>Minha localização</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaButton}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="map-marker-alt" size={24} color="#414141" />
            <Text style={styles.textButton}>Definir local de entrega</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f8774a",
    paddingHorizontal: "10%",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: "5%",
    color: "#f2f2f2",
  },
  text: {
    fontSize: 18,
    color: "#e7e7e7",
    textAlign: "center",
  },
  footer: {
    flex: 1,
    width: "100%",
    marginBottom: "15%",
  },
  areaButton: {
    elevation: 2,
  },
  button: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    marginVertical: 8,
    padding: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFooter: {
    fontSize: 18,
    marginVertical: "5%",
    color: "#e7e7e7",
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f8774a",
    paddingLeft: 16,
  },
});

import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import React, { createContext, useContext, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Loginscreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await fetch("localhost:3000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        Alert.alert("failed");
        throw new Error("Login failed");
      }

      const data = await response.json();
      Alert.alert("LoggedIn");
      console.log(data);
      const token = data.token;

      await AsyncStorage.setItem("jsontoken", token);

      // Example: Navigate to a different screen after successful login
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error during login:", error.message);
      // Handle error, show alert, etc.
      Alert.alert(
        "Login Failed",
        "Please check your credentials and try again."
      );
    }
  };

  return (
    <>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <LottieView
            source={require("./Login.json")}
            autoPlay
            loop={true}
            speed={0.5}
            style={{
              height: 410,
              width: 310,
              alignItems: "center",
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 20,
              marginLeft: 20,
              marginBottom: 20,
            }}
          >
            Login
          </Text>

          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
            }}
          >
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={"red"}
              style={{
                marginRight: 10,
                paddingVertical: 3,
                marginLeft: 3,
                marginTop: 5,
              }}
            />

            <TextInput
              placeholder="Email id"
              value={email}
              style={{ flex: 1, paddingVertical: 3 }}
              keyboardType="email-address"
              onChange={(event) => setEmail(event.nativeEvent.text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              marginTop: 24,
            }}
          >
            <Ionicons
              name="ios-lock-closed-outline"
              size={22}
              color={"red"}
              style={{
                marginRight: 10,
                paddingVertical: 3,
                marginLeft: 3,
                marginTop: 5,
              }}
            />
            <TextInput
              placeholder="Password"
              style={{ flex: 1, paddingVertical: 3 }}
              secureTextEntry={true}
              value={password}
              onChange={(text) => setPassword(text.nativeEvent.text)}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Forgot");
              }}
              style={{ marginRight: 20, paddingTop: 10 }}
            >
              <Text>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => login()}
            style={{
              marginRight: 20,
              backgroundColor: "lightblue",
              marginTop: 30,
              borderWidth: 2,
              alignItems: "center",
              marginLeft: 20,
              paddingLeft: 0,
              borderRadius: 50,
            }}
          >
            <Text style={{ fontSize: 20 }}>Login</Text>
          </TouchableOpacity>

          <Text style={{ textAlign: "center", fontSize: 14, marginTop: 20 }}>
            OR
          </Text>
          <Text style={{ textAlign: "center", fontSize: 14, marginTop: 10 }}>
            Login Width
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => console.log("hello")}>
              <Image
                source={require("../../assets/images.jpg")}
                style={{ height: 33, width: 29 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("hello")}>
              <Image
                source={require("../../assets/download.jpg")}
                style={{ height: 33, width: 29 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 25, marginLeft: 20 }}>
            New To the App ?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.txt}> Register </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  txt: {
    marginTop: 10,
    marginLeft: 20,
    color: "purple",
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default Loginscreen;

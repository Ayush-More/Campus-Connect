import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
const SignupForm = ({ navigation }) => {
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Register = async () => {
    try {
      const Response = await fetch(
        "http://192.168.0.100:3000/api/v1/user/signup",
        {
          method: "POST",
          header: "application/json",
          body: JSON.stringify({
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          }),
        }
      );

      if (!Response.ok) {
        Alert.alert("Failed");
        console.log("failed");
      }

      const data = await response.json();
      Alert.alert("LoggedIn");
      console.log(data);
      const token = data.token;

      await AsyncStorage.setItem("jsontoken", token);

      // Example: Navigate to a different screen after successful login
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error during Signup:", error.message);
      // Handle error, show alert, etc.
      Alert.alert(
        "Signup Failed",
        "Please check your credentials and try again."
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.tt}>Signup</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          secureTextEntry
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
        <TouchableOpacity>
          <Button title="Sign Up" onPress={() => Register()} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 0,
          }}
        >
          <TouchableOpacity onPress={() => console.log("hello")}>
            <Image
              source={require("../../assets/images.jpg")}
              style={{ height: 43, width: 29, marginTop: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("hello")}>
            <Image
              source={require("../../assets/download.jpg")}
              style={{ height: 43, width: 29, marginTop: 20 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.txt}>
            {" "}
            Already Login? <Text style={{ color: "purple" }}>Sign In</Text>{" "}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 25,
    paddingHorizontal: 8,
  },
  tt: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  txt: {
    marginTop: 50,
  },
});

export default SignupForm;

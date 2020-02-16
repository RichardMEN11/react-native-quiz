import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  Dimensions
} from "react-native";

import { Input, Button } from "react-native-elements";
import axios from "axios";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpUser = async () => {
    const data = await axios.post("http://localhost:3000/user", {
      username,
      password,
      email
    });

    if (data.status === 201) {
      navigation.navigate("Login");
    } else {
      //TODO: Throw error
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Image source={require("../assets/images/astro.png")} />
        <Text style={styles.heading}>Werde Teil der Galaxy</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Username"
          leftIcon={
            <Image
              source={require("../assets/images/iconmonstr-user-5.png")}
              style={styles.icon}
            />
          }
          inputContainerStyle={styles.input}
          onChangeText={text => setUsername(text)}
        />
        <Input
          placeholder="E-Mail"
          leftIcon={
            <Image
              source={require("../assets/images/iconmonstr-email-1-green.png")}
              style={styles.icon}
            />
          }
          inputContainerStyle={[
            styles.input,
            {
              marginTop: 15
            }
          ]}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
        />
        <Input
          placeholder="Passwort"
          leftIcon={
            <Image
              source={require("../assets/images/iconmonstr-key-1-green.png")}
              style={styles.icon}
            />
          }
          inputContainerStyle={[
            styles.input,
            {
              marginTop: 15
            }
          ]}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Button
          buttonStyle={styles.button}
          title="Registrieren"
          onPress={() => {
            signUpUser();
          }}
        ></Button>
        <Text
          style={styles.register}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
};

SignUpScreen.navigationOptions = {
  title: "SignUp"
};

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height / 2
  },
  heading: {
    fontSize: 25,
    paddingTop: 40
  },
  inputContainer: {
    paddingLeft: 30,
    paddingRight: 30
  },
  input: {
    borderBottomColor: "#5A8C94"
  },
  icon: {
    marginRight: 15
  },
  passwordReset: {
    textAlign: "right",
    textDecorationLine: "underline",
    marginTop: 20
  },
  button: {
    backgroundColor: "#5A8C94",
    borderRadius: 27,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    padding: 15,
    marginBottom: 15,
    marginTop: 15,
    width: "100%",
    marginTop: 60
  },
  register: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 20
  }
});

export default SignUpScreen;

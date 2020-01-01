import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Input, Button } from "react-native-elements";

const SignUpScreen = ({ navigation }) => {
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
        />
        <Button
          buttonStyle={styles.button}
          title="Registrieren"
          onPress={() => {
            navigation.navigate("Home");
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

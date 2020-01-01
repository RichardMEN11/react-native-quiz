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

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Image source={require("../assets/images/rocket.png")} />
        <Text style={styles.heading}>Entdecke neue Welten</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="E-Mail"
          leftIcon={
            <Image
              source={require("../assets/images/iconmonstr-email-1.png")}
              style={styles.icon}
            />
          }
          inputContainerStyle={styles.input}
        />
        <Input
          placeholder="Passwort"
          leftIcon={
            <Image
              source={require("../assets/images/iconmonstr-key-1.png")}
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
        <Text
          style={styles.passwordReset}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Passwort vergessen?
        </Text>
        <Button
          buttonStyle={styles.button}
          title="Anmelden"
          onPress={() => {
            navigation.navigate("Home");
          }}
        ></Button>
        <Text
          style={styles.register}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Registrieren
        </Text>
      </View>
    </SafeAreaView>
  );
};

LoginScreen.navigationOptions = {
  title: "Login"
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
    borderBottomColor: "#CF0068"
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
    backgroundColor: "#CF0068",
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
    marginTop: 100
  },
  register: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 20
  }
});

export default LoginScreen;

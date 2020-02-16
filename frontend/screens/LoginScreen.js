import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  Dimensions
} from "react-native";

import { Input, Button, Overlay } from "react-native-elements";
import { emailRgx } from "../constants/regex";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const loginUser = async () => {
    try {
      const data = await axios.post("http://localhost:3000/user/signIn", {
        email,
        password
      });
      if (data.status === 201) {
        navigation.navigate("Home");
      }
    } catch (error) {
      setIsVisible(true);
    }
  };

  const tryAgain = () => {
    setEmail("");
    setPassword("");
    setIsVisible(false);
  };

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
          onChangeText={text => {
            setEmail(text);
          }}
          errorMessage={error}
          autoCapitalize="none"
          value={email}
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
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          value={password}
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
            loginUser();
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
        <Overlay
          isVisible={isVisible}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="red"
          width="auto"
          height="auto"
        >
          <Text>
            Leider ist beim Login ein Fehler aufgetreten, versuche es bitte
            erneut.
          </Text>
          <Button
            title="Erneut versuchen"
            buttonStyle={styles.simpleButton}
            onPress={() => {
              tryAgain();
            }}
          />
        </Overlay>
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
  },
  simpleButton: {
    backgroundColor: "rgba(255, 255, 255, .1)",
    marginTop: 10
  }
});

export default LoginScreen;

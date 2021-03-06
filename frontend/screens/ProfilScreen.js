import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Avatar, Button } from "react-native-elements";
import { connect } from "react-redux";
import ProgressBar from "../components/ProgressBar";
import axios from "axios";

const ProfilScreen = ({ navigation, userId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [wrongPercentage, setWrongPercentage] = useState(0);
  const [correctPercentage, setCorrectPercentage] = useState(0);
  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);
      setUser(response.data);
     
        setCorrectPercentage(
          Math.floor((user.correctAnswers / user.questionAnswered) * 100)
        );
        setWrongPercentage(Math.floor(100 - correctPercentage));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../assets/images/iconmonstr-angel-left-thin.png")}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <Avatar
          rounded
          title={user.username.charAt(0) + user.username.charAt(1)}
          size="large"
        />
        <Text style={styles.name}>{user.username}</Text>
        <Text style={styles.bold}>
          {user.gamesPlayed} Spiele - {user.questionAnswered} Fragen
        </Text>
      </View>
      <View style={styles.outerRow}>
        <View style={styles.card}>
          <View style={styles.innerRow}>
            <View style={styles.row}>
              <View style={styles.circle}></View>
              <Text style={styles.text}>Richtig</Text>
            </View>
            <Text style={styles.textWhite}>{correctPercentage}%</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.innerRow}>
            <View style={styles.row}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: "#FD5B99"
                  }
                ]}
              ></View>
              <Text style={styles.text}>Falsch</Text>
            </View>
            <Text style={styles.textWhite}>{wrongPercentage}%</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.center}>
          Kategorien (Anteil richtiger Antworten)
        </Text>
        <View style={styles.summary}>
          <View
            style={[
              styles.row,
              {
                marginBottom: 10
              }
            ]}
          >
            <Text>1. Kardiologie</Text>
            <Text>50%</Text>
          </View>
          <ProgressBar percentage="70%" />
          <View
            style={[
              styles.row,
              {
                marginBottom: 10
              }
            ]}
          >
            <Text>2. Kardiologie</Text>
            <Text>50%</Text>
          </View>
          <ProgressBar percentage="63%" />
          <View
            style={[
              styles.row,
              {
                marginBottom: 10
              }
            ]}
          >
            <Text>3. Kardiologie</Text>
            <Text>50%</Text>
          </View>
          <ProgressBar percentage="50%" />
        </View>
      </View>
      <Button
        title="Einstellungen"
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      ></Button>
    </SafeAreaView>
  );
};

ProfilScreen.navigationOptions = {
  title: "Profil"
};

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height / 4
  },
  name: {
    fontSize: 18,
    padding: 10
  },
  bold: {
    fontWeight: "bold"
  },
  outerRow: {
    backgroundColor: "#CF0068",
    width: "90%",
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
    paddingTop: 20
  },
  innerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%"
  },
  text: {
    paddingLeft: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  textWhite: {
    color: "#fff"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  card: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: 15
  },
  circle: {
    height: 30,
    width: 30,
    backgroundColor: "#C1DFDF",
    borderRadius: 20
  },
  center: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "bold"
  },
  summary: {
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20
  },
  button: {
    backgroundColor: "#fff",
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
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50
  },
  buttonText: {
    color: "#000"
  },
  arrow: {
    margin: 20
  }
});

const mapStateToProps = state => ({
  userId: state.questions.userId
});

export default connect(mapStateToProps)(ProfilScreen);

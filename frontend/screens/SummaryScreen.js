import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
  SafeAreaView
} from "react-native";

import { Button } from "react-native-elements";
import { connect } from "react-redux";
import axios from "axios";

 function SummaryScreen({ navigation, userId }) {
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    calculateSummary();
  }, []);

  const calculateSummary = () => {
    setCorrectAnswers(
      Math.floor(
        (navigation.state.params.points /
          navigation.state.params.numberOfQuestions) *
          100
      )
    );
    setWrongAnswers(Math.floor(100 - correctAnswers));
  };

  const updateUserData = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/user/${userId}`, {
        questionAnswered: navigation.state.params.numberOfQuestions,
        correctAnswers: navigation.state.params.points,
        wrongAnswers:
          navigation.state.params.numberOfQuestions -
          navigation.state.params.points
      });
      console.log(response);
    } catch (error) {}
  };
  return (
    <SafeAreaView>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Weiter so! </Text>
        <Text style={styles.subheading}>Das war schon sehr gut!</Text>
      </View>
      <Text style={styles.questions}>
        {navigation.state.params.numberOfQuestions} Fragen
      </Text>
      <View style={styles.outerRow}>
        <View style={styles.card}>
          <View style={styles.innerRow}>
            <View style={styles.row}>
              <View style={styles.circle}></View>
              <Text style={styles.text}>Richtig</Text>
            </View>
            <Text>{correctAnswers}%</Text>
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
            <Text>{wrongAnswers}%</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <ImageBackground
          source={require("../assets/images/Path.png")}
          style={styles.bottomImg}
        >
          <Button
            title="return home"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => {
              updateUserData();
              navigation.navigate("Home");
            }}
          ></Button>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height / 2.8
  },
  heading: {
    fontSize: 34,
    textAlign: "center",
    paddingBottom: 15
  },
  subheading: {
    fontSize: 16,
    textAlign: "center"
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
  outerRow: {
    backgroundColor: "#fff",
    width: "90%",
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  innerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%"
  },
  text: {
    paddingLeft: 20,
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  questions: {
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold"
  },
  bottom: {
    height: Dimensions.get("window").height / 2.2,
    flexDirection: "row",
    alignContent: "flex-end"
  },
  bottomImg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
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
    width: "100%"
  },
  buttonText: {
    color: "#000",
    fontSize: 20
  }
});

const mapStateToProps = state => ({
  userId: state.questions.userId
});

SummaryScreen.navigationOptions = {
  title: "Summary"
};

export default connect(mapStateToProps)(SummaryScreen)
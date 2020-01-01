import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
  SafeAreaView
} from "react-native";

import { Button } from "react-native-elements";

export default function SummaryScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Das war nicht schlecht</Text>
        <Text style={styles.subheading}>
          Wenn du weiter übst wirst du immer besser
        </Text>
      </View>
      <Text style={styles.questions}>5 Fragen</Text>
      <View style={styles.outerRow}>
        <View style={styles.card}>
          <View style={styles.innerRow}>
            <View style={styles.row}>
              <View style={styles.circle}></View>
              <Text style={styles.text}>Richtig</Text>
            </View>
            <Text>50%</Text>
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
            <Text>50%</Text>
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

SummaryScreen.navigationOptions = {
  title: "Summary"
};

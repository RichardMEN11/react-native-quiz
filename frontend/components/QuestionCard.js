import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";
const QuestionCard = ({ title, navigation, id }) => {
  const [isStarred, setIsStarred] = useState(false);
  return (
    <Card
      title={title}
      containerStyle={styles.container}
      image={require("../assets/images/card.jpg")}
      titleStyle={styles.title}
    >
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => {
            setIsStarred(!isStarred);
          }}
        >
          <Image
            source={
              isStarred
                ? require("../assets/icons/baseline_star_white_36pt_1x.png")
                : require("../assets/icons/baseline_star_border_white_36pt_1x.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        <Button
          title="Learn now"
          type="outline"
          buttonStyle={styles.button}
          titleStyle={styles.text}
          onPress={() =>
            navigation.navigate("Quiz", {
              title: title,
              id: id
            })
          }
        ></Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6F9C94",
    borderRadius: 10
  },
  title: {
    color: "#fff",
    padding: 5
  },
  button: {
    borderColor: "#fff",
    width: 150,
    borderWidth: 2
  },
  text: {
    color: "#fff"
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  }
});

export default QuestionCard;

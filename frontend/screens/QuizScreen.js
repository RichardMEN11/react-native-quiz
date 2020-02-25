import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
  ActivityIndicator
} from "react-native";

import { Button } from "react-native-elements";
import axios from "axios";
import { connect } from "react-redux";

function QuizScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [buttonAColor, setButtonAColor] = useState("#fff");
  const [buttonBColor, setButtonBColor] = useState("#fff");
  const [buttonCColor, setButtonCColor] = useState("#fff");
  const [buttonDColor, setButtonDColor] = useState("#fff");

  const [buttonClicked, setButtonClicked] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getQuestionsForQuiz();
  }, []);

  //fetching question on mount
  const getQuestionsForQuiz = async () => {
    try {
      const title = navigation.state.params.title;
      const url = `http://localhost:3000/question/collection/${title}`;

      const response = await axios.get(url);
      setQuestions(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // check if answer is correct and changing the corresponding button color
  const checkAnswer = answer => {
    if (answer === questions[questionNumber].correctAnswer) {
      switch (answer) {
        case "answerA":
          setButtonAColor("#00ff00");
          setPoints(points + 1);
          nextQuestion();
          break;
        case "answerB":
          setButtonBColor("#00ff00");
          setPoints(points + 1);
          nextQuestion();
          break;
        case "answerC":
          setButtonCColor("#00ff00");
          setPoints(points + 1);
          nextQuestion();
          break;
        case "answerD":
          setButtonDColor("#00ff00");
          setPoints(points + 1);
          nextQuestion();
          break;
        default:
          break;
      }
    } else {
      switch (answer) {
        case "answerA":
          setButtonAColor("#ff0000");
          showCorrectAnswer();
          break;
        case "answerB":
          setButtonBColor("#ff0000");
          showCorrectAnswer();
          break;
        case "answerC":
          setButtonCColor("#ff0000");
          showCorrectAnswer();
          break;
        case "answerD":
          setButtonDColor("#ff0000");
          showCorrectAnswer();
          break;
        default:
          break;
      }
    }
  };

  const showCorrectAnswer = () => {
    switch (questions[questionNumber].correctAnswer) {
      case "answerA":
        setButtonAColor("#00ff00");
        nextQuestion();
        break;
      case "answerB":
        setButtonBColor("#00ff00");
        nextQuestion();
        break;
      case "answerC":
        setButtonCColor("#00ff00");
        nextQuestion();
        break;
      case "answerD":
        setButtonDColor("#00ff00");
        nextQuestion();
        break;
      default:
        break;
    }
  };

  const nextQuestion = () => {
    setTimeout(() => {
      if (questionNumber < questions.length - 1) {
        setQuestionNumber(questionNumber + 1);
        gameReset();
      } else {
        navigation.navigate("Summary", {
          points,
          numberOfQuestions: questions.length
        });
      }
    }, 1000);
  };

  const gameReset = () => {
    setButtonClicked(false);
    setButtonAColor("#fff");
    setButtonBColor("#fff");
    setButtonCColor("#fff");
    setButtonDColor("#fff");
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <ImageBackground
        style={styles.top}
        source={require("../assets/images/background_quiz.png")}
      >
        <Text style={styles.question}>
          {questions[questionNumber].question}
        </Text>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <Button
          title={questions[questionNumber].answerA}
          buttonStyle={[
            styles.button,
            {
              backgroundColor: buttonAColor
            }
          ]}
          disabledStyle={[
            styles.button,
            {
              backgroundColor: buttonAColor
            }
          ]}
          titleStyle={styles.buttonText}
          disabled={buttonClicked}
          disabledTitleStyle={styles.buttonText}
          onPress={() => {
            setButtonClicked(true);
            setButtonAColor("#ff00ff");
            setTimeout(() => {
              checkAnswer("answerA");
            }, 1000);
          }}
        ></Button>
        <Button
          title={questions[questionNumber].answerB}
          disabled={buttonClicked}
          disabledTitleStyle={styles.buttonText}
          buttonStyle={[
            styles.button,
            {
              backgroundColor: buttonBColor
            }
          ]}
          disabledStyle={[
            styles.button,
            {
              backgroundColor: buttonBColor
            }
          ]}
          titleStyle={styles.buttonText}
          onPress={() => {
            setButtonClicked(true);
            setButtonBColor("#ff00ff");
            setTimeout(() => {
              checkAnswer("answerB");
            }, 1000);
          }}
        ></Button>
        <Button
          title={questions[questionNumber].answerC}
          disabled={buttonClicked}
          disabledTitleStyle={styles.buttonText}
          buttonStyle={[
            styles.button,
            {
              backgroundColor: buttonCColor
            }
          ]}
          disabledStyle={[
            styles.button,
            {
              backgroundColor: buttonCColor
            }
          ]}
          titleStyle={styles.buttonText}
          onPress={() => {
            setButtonClicked(true);
            setButtonCColor("#ff00ff");
            setTimeout(() => {
              checkAnswer("answerC");
            }, 1000);
          }}
        ></Button>
        <Button
          title={questions[questionNumber].answerD}
          disabled={buttonClicked}
          disabledTitleStyle={styles.buttonText}
          buttonStyle={[
            styles.button,
            {
              backgroundColor: buttonDColor
            }
          ]}
          disabledStyle={[
            styles.button,
            {
              backgroundColor: buttonDColor
            }
          ]}
          titleStyle={styles.buttonText}
          onPress={() => {
            setButtonClicked(true);
            setButtonDColor("#ff00ff");
            setTimeout(() => {
              checkAnswer("answerD");
            }, 1000);
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height / 2
  },
  question: {
    fontSize: 24,
    color: "#000",
    textAlign: "center",
    width: "80%"
  },
  buttonContainer: {
    flexDirection: "column",
    height: Dimensions.get("window").height / 2.4,
    alignItems: "center"
  },
  button: {
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
    width: "100%"
  },
  buttonText: {
    color: "#000",
    fontSize: 20
  }
});

QuizScreen.navigationOptions = {
  title: "Quiz"
};

const mapStateToProps = state => {
  return { currentCollection: state.currentCollection };
};

export default connect(mapStateToProps)(QuizScreen);

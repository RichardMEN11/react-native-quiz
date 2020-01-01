import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Layout from "../components/Layout";
import QuestionCard from "../components/QuestionCard";

export default function HomeScreen({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <ScrollView>
        <QuestionCard title="title" navigation={navigation} />
        <QuestionCard title="title" navigation={navigation} />
        <QuestionCard title="title" navigation={navigation} />
        <QuestionCard title="title" navigation={navigation} />
      </ScrollView>
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  title: "Home"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#6F9C94"
  },
  card: {
    backgroundColor: "#666804"
  }
});

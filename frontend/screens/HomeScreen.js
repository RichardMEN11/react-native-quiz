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

export default function HomeScreen() {
  return (
    <Layout>
      <ScrollView>
        <QuestionCard title="title" />
        <QuestionCard title="title" />
        <QuestionCard title="title" />
        <QuestionCard title="title" />
      </ScrollView>
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  header: null
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

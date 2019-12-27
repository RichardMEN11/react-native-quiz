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
import { Card, Button } from "react-native-elements";
import Layout from "../components/Layout";

export default function HomeScreen() {
  return (
    <Layout>
      <ScrollView>
        <Card title="Innere Medizin">
          <Button title="Learn now"></Button>
        </Card>
        <Card title="Äußere Medizin">
          <Button title="Learn now"></Button>
        </Card>
        <Card title="Äußere Medizin">
          <Button title="Learn now"></Button>
        </Card>
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

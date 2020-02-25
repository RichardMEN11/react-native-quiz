import React, { useEffect, useState } from "react";
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

import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    getCollections();
  }, []);

  const getCollections = async () => {
    try {
      const response = await axios.get("http://localhost:3000/collections");
      setCollections(response.data);
    } catch (error) {}
    //TODO: Throw error
  };
  return (
    <Layout navigation={navigation}>
      <ScrollView>
        {collections.map(collection => {
          return (
            <QuestionCard
              title={collection.name}
              navigation={navigation}
              id={collection._id}
              key={collection._id}
            />
          );
        })}
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

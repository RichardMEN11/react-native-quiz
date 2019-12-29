import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground
} from "react-native";

export default function SummaryScreen({ navigation }) {
  return (
    <View>
      <Text>Summary</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

SummaryScreen.navigationOptions = {
  title: "Summary"
};

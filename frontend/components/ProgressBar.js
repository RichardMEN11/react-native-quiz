import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ percentage }) => {
  return (
    <View>
      <View style={styles.outer}>
        <View
          style={[
            styles.inner,
            {
              width: percentage
            }
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    width: "100%",
    height: 10,
    backgroundColor: "#979797",
    borderRadius: 7,
    margin: 10
  },
  inner: {
    backgroundColor: "#5A8C94",
    height: 10,
    borderRadius: 7
  }
});

export default ProgressBar;

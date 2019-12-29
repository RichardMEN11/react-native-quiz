import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [length, setLength] = useState(300);

  useEffect(() => {
    const intervall = setInterval(() => {
      setTime(time + 10);
      requestAnimationFrame(() => {
        setLength(length - time);
      });
    }, 1000);
    if (time === 300) {
      alert("Next");
      clearIntervall(intervall);
    }
  });
  return (
    <View style={styles.container}>
      <Text>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: "#979797",
    width: 300,
    borderRadius: 7
  }
});

export default Timer;

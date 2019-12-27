import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button, Header, Avatar } from "react-native-elements";

const Layout = props => {
  return (
    <View>
      <Header
        style={styles.header}
        containerStyle={{
          backgroundColor: "#6F9C94",
          justifyContent: "space-around"
        }}
        rightComponent={<Avatar rounded title="RM" />}
      />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6F9C94"
  }
});

export default Layout;

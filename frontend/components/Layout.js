import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
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
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Profil");
            }}
          >
            <Avatar rounded title="RM" />
          </TouchableOpacity>
        }
        rightContainerStyle={styles.profil}
        centerComponent={
          <Image
            source={require("../assets/icons/logopf.png")}
            style={styles.logo}
          />
        }
      />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6F9C94"
  },
  profil: {
    marginBottom: 10
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  }
});

export default Layout;

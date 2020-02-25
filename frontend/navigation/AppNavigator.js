import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import QuizScreen from "../screens/QuizScreen";
import SummaryScreen from "../screens/SummaryScreen";
import ProfilScreen from "../screens/ProfilScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Home: HomeScreen,
    Quiz: QuizScreen,
    Summary: SummaryScreen,
    Profil: ProfilScreen
  })
);

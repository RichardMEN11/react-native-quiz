import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import QuizScreen from "../screens/QuizScreen";
import SummaryScreen from "../screens/SummaryScreen";
import ProfilScreen from "../screens/ProfilScreen";
import HomeScreen from "../screens/HomeScreen";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Quiz: QuizScreen,
    Summary: SummaryScreen,
    Profil: ProfilScreen,
    Home: HomeScreen
  })
);

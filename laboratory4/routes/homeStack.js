import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import Profile from "../screens/profile";

const Stack = createStackNavigator();

const homeStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export default homeStack;

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/about";

const Stack = createStackNavigator();

const aboutStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
export default aboutStack;

//Anota Jelucel
//Chico Denmark
//Maque Mark Erickson
//Nofuente John Paul
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';

import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

const mainNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} 
          options={{
            drawerIcon: ({focused, size, color}) =>
            (<Feather name="home" size={24} color="black" />)}}/>
        <Drawer.Screen name="About" component={AboutStack} 
          options={{
            drawerIcon: ({focused, size, color}) =>
            (<Feather name="book" size={24} color="black" />)}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default mainNavigator;

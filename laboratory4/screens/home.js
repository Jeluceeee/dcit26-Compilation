import React from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <ImageBackground source={require("../img/bck.gif")} style={styles.bck}>
        <View style={styles.btncon}>
          <Button
            title="Profile"
            onPress={() => {
              navigation.navigate("Profile");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bck: {
    width: "100%",
    height: "100%",
  },
  btncon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

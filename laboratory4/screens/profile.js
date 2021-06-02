import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/profilebck.jpg")}
        style={styles.bck}
      >
        <Image style={styles.prf} source={require("../img/profimg.gif")} />
        <View style={styles.details}>
          <Text style={styles.fontdet}>
            Genre: Adventure, fantasy comedy, martial arts {"\n"}
            Manga Written by:Masashi Kishimoto {"\n"}
            Published by: Shueisha {"\n"}
            English publisher: AUS Madman Entertainment NA/UK Viz Media {"\n"}
            Imprint: Jump Comics Magazine Weekly Shōnen Jump {"\n"}
            English magazine: NA Weekly Shonen Jump Shonen Jump{"\n"}
            Demographic: Shōnen {"\n"}
            Original run: September 21, 1999 – November 10, 2014{"\n"}
            Volumes: 72 (List of volumes){"\n"}
          </Text>
        </View>
        <View style={styles.btncon}>
          <Button
            title="About"
            onPress={() => {
              navigation.navigate("About");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bck: {
    width: "100%",
    height: "100%",
  },
  btncon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  prf: {
    marginTop: "5%",
    alignSelf: "center",
    width: "50%",
    height: "24%",
  },
  details: {
    marginTop: "10%",
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: 5,
    backgroundColor: "black",
    borderTopEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  fontdet: {
    fontStyle: "italic",
    color: "white",
    alignSelf: "center",
    textAlign: "left",
    fontSize: 14,
  },
});

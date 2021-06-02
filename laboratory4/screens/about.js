import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function Profile({ navigation }) {
  return (
    <View>
      <ImageBackground
        style={styles.bck}
        source={require("../img/abtimgg.jpg")}
      >
        <ScrollView>
          <Text style={styles.fontdet}>
            Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of
            Konohagakure's Uzumaki clan. He became the jinchūriki of the
            Nine-Tails on the day of his birth — a fate that caused him to be
            shunned by most of Konoha throughout his childhood. After joining
            Team Kakashi, Naruto worked hard to gain the village's
            acknowledgement all the while chasing his dream to become Hokage. In
            the following years, through many hardships and ordeals, he became a
            capable ninja regarded as a hero both by the villagers, and soon
            after, the rest of the world, becoming known as the Hero of the
            Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, literally
            meaning: Hero of the Hidden Tree Leaves). He soon proved to be one
            of the main factors in winning the Fourth Shinobi World War, leading
            him to achieve his dream and become the village's Seventh Hokage
            (七代目火影, Nanadaime Hokage, literally meaning: Seventh Fire
            Shadow).
          </Text>
          <Button
            title="Back"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </ScrollView>
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
  fontdet: {
    fontStyle: "italic",
    color: "#00b7ff",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 25,
  },
});

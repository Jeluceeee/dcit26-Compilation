//BSCS 3-1
// Anota Jelucel
//Chico Denmark
//Maque Mark Erickson
//Nofuente John Paul
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView, 
  Button,
  SafeAreaView, 
} from "react-native";
import SecondModal from "./Second";

export default function App() {
  const [modalopen, setModal] = useState(false);

  return (
    <View>
      <SafeAreaView style={styles.safe}>
        <ImageBackground
          style={styles.imgbck}
          source={require("./assets/bck.png")}
        >
          <View style={styles.view1}>
            <TouchableOpacity
              style={styles.btnCon}
              onPress={() => setModal(true)}
            >
              <Text style={styles.btnText}>Enter To The {"\n"}New World</Text>
            </TouchableOpacity>
            <SecondModal visible={modalopen} onClose={() => setModal(false)} />

            <Text style={styles.grp}>
              {"\n"}By: {"\n\n"}Anota Jelucel{"\n"}Chico Denmark{"\n"}Maque Mark
              Erickson {"\n"}
              Nofuente John Paul
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  grp: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  view1: {
    paddingTop: "75%",
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
  },
  imgbck: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
  },
  safe: {
    marginTop: 25,
    marginBottom: -20,
  },
  btnCon: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    justifyContent: "center",
    textAlign: "center",
  },
});

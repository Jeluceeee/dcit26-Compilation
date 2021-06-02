import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);

    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  const onPressData = () => {
    fetchRandomData();
  };
  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        {isLoading ? (
          <ActivityIndicator size="large" color="maroon" />
        ) : (
          <TouchableOpacity>
            <TouchableHighlight
              onPress={() => navigation.navigate("Profile", data)}
            >
              <Image style={styles.img} source={{ uri: data.picture.large }} />
            </TouchableHighlight>
          </TouchableOpacity>
        )}

        {isLoading ? (
          true
        ) : (
          <View>
            <Text style={styles.randomz}>
              {data.name.first} {data.name.last}
            </Text>
          </View>
        )}

        {isLoading ? (
          true
        ) : (
          <Button
            title="Random User"
            color="maroon"
            onPress={() => {
              fetchRandomData();
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  img: {
    width: 300,
    height: 250,
    marginVertical: 15,
    resizeMode: "cover",
  },
  randomz: {
    padding: 5,
    color: "yellow",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
});
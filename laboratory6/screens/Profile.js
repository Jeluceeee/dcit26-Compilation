import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Profile = ({ route }) => {
  const data = route.params;

  return (
    <View style={styles.bg}>
      <ScrollView>
        <Image style={styles.img} source={{ uri: data.picture.large }} />

        <Text style={styles.container}>
          {data.name.title}. {data.name.first} {data.name.last}
        </Text>

        <Text style={styles.text}>
          {' '}
          <FontAwesomeIcon name="user" size={20} /> ABOUT{' '}
        </Text>
        <Text style={styles.container1}> Age: {data.dob.age}</Text>
        <Text style={styles.container1}> Birthday: {data.dob.date}</Text>
        <Text style={styles.container1}> Gender: {data.gender}</Text>
        <Text style={styles.container1}>
          {' '}
          Address: {data.location.street.name} {data.location.street.number}{' '}
          {data.location.city} {data.location.country}
        </Text>
        <Text style={styles.text1}>
          {' '}
          <FontAwesomeIcon name="envelope" size={20} /> CONTACT{' '}
        </Text>
        <Text style={styles.container1}> Email: {data.email}</Text>
        <Text style={styles.container1}> Phone: # {data.phone}</Text>

        <Text style={styles.text2}>
          {' '}
          <FontAwesomeIcon name="ellipsis-h" size={20} /> OTHER{' '}
        </Text>
        <Text style={styles.container1}>
          {' '}
          Data Registered: {data.registered.date}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container1: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
    justifyContent: 'center',
  },
  container: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  img: {
    width: 250,
    height: 250,
    marginVertical: 15,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderColor: '#F58D77',
    borderWidth: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#F58D77',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#F58D77',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#F58D77',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bg: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFC9BE',
  },
});

import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Button,
  Image,
} from 'react-native';

const SecondModal = (app2) => {
  return (
    <View>
      <Modal visible={app2.visible} animationType="fade">
        <ScrollView style={styles.bckColor}>
          <Text style={styles.frmttl}>FAMOUS PAINTINGS!</Text>
          <Image style={styles.img} source={require('./img/mona.png')} />
              <Text style={styles.ttl}>The Mona Lisa</Text>
              <Text style={styles.prgp}>              The Mona Lisa is the earliest Italian portrait to focus so closely on the sitter in a half-length portrait. The painting is generous enough in its dimensions to include the arms and hands without them touching the frame. The portrait is painted to a realistic scale in the highly structured space where it has the fullness of volume of a sculpture in the round. The figure is shown in half-length, from the head to the waist, sitting in a chair whose arm is resting on balusters. She is resting her left arm on the arm of the chair, which is placed in front of a loggia, suggested by the parapet behind her and the two fragmentary columns framing the figure and forming a "window" looking out over the landscape. The perfection of this new artistic formula explains its immediate influence on Florentine and Lombard art of the early 16th century. Such aspects of the work as the three-quarter view of a figure against a landscape, the architectural setting, and the hands joined in the foreground were already extant in Flemish portraiture of the second half of the 15th century, particularly in the works of Hans Memling. However, the spacial coherence, the atmospheric illusionism, the monumentality, and the sheer equilibrium of the work were all new. In fact, these aspects were also new to Leonardo's work, as none of his earlier portraits display such controlled majesty.
          </Text>
          <Image style={styles.img} source={require('./img/star.png')} />
              <Text style={styles.ttl}>The Starry Night</Text>
              <Text style={styles.prgp}>              In creating this image of the night sky—dominated by the bright moon at right and Venus at center left—van Gogh heralded modern painting’s new embrace of mood, expression, symbol, and sentiment. Inspired by the view from his window at the Saint-Paul-de-Mausole asylum in Saint-Rémy, in southern France, where the artist spent twelve months in 1889–90 seeking reprieve from his mental illnesses, The Starry Night (made in mid-June) is both an exercise in observation and a clear departure from it. The vision took place at night, yet the painting, among hundreds of artworks van Gogh made that year, was created in several sessions during the day, under entirely different atmospheric conditions. The picturesque village nestled below the hills was based on other views—it could not be seen from his window—and the cypress at left appears much closer than it was. And although certain features of the sky have been reconstructed as observed, the artist altered celestial shapes and added a sense of glow. Van Gogh assigned an emotional language to night and nature that took them far from their actual appearances. Dominated by vivid blues and yellows applied with gestural verve and immediacy, The Starry Night also demonstrates how inseparable van Gogh’s vision was from the new procedures of painting he had devised, in which color and paint describe a world outside the artwork even as they telegraph their own status as, merely, color and paint.
          </Text>
          <Image style={styles.img} source={require('./img/lp.png')} />
             <Text style={styles.ttl}>The Last Supper</Text>
             <Text style={styles.prgp}>             The story of the Last Supper is about a wonderful invitation from Jesus to receive his gift! This is a summary of the Last Supper Bible story as told in the books of Matthew, Mark, and Luke below. Read more in-depth Bible verses from the Scripture below and use the articles and videos to understand the meaning behind this teachable event in the Bible. The last supper took place on the first day of Passover, or the Festival of Unleavened Bread. Jesus sent his disciples ahead into the city to prepare a meal to celebrate Passover. Passover is the remembrance of Israel being freed from slavery to Egypt and specifically when the angel of death passed over the homes of the Israelites that had lambs blood over the doors. As the disciples reclined and ate dinner with Jesus, he explained to them that one of the twelve of them would soon betray him. One by one the disciplines denied that it would be them, including Judas who would be the betrayer. Jesus responded that the person who betrays him will have a terrible fate and that indeed, it was Judas. Jesus prayed and thanked God for the meal. He then broke the bread and shared the wine with the disciples and explained to them how the bread was a symbol of his body, broken for them, and the wine a symbol of his blood which would be poured out for their sins to be forgiven. This is where the church's tradition of communion comes from. After the meal, Jesus became like a servant and washed the feet of the disciples. Peter did not feel right having Jesus wash his feet but Jesus said that He was doing it to be an example to them. Now the disciples would be able to wash each other's feet, meaning they could be servants to all.</Text>
          <Button title="CLOSE" onPress={app2.onClose}></Button>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default SecondModal;

const styles = StyleSheet.create({
  frmttl: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    color: 'white',
    borderColor: 'white',
    textShadowColor: '#a85e32',
    textShadowOffset: { width: -4, height: 2 },
    textShadowRadius: 15,
  },
  ttl: {
    textAlign: 'center',
    fontSize: 20,
    alignSelf: 'center',
    fontStyle: 'italic',
    borderBottomWidth: 2,
    width: '50%',
  },
  prgp: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    textAlign: 'justify',
  },
  img: {
    marginTop: 10,
    marginBottom: 5,
    width: 250,
    height: 200,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  bckColor: {
    backgroundColor: '#859fa1',
    padding: 2,
    borderWidth: 2,
    borderColor: '#f6d55c'
  },
  view1: {
    width: '50%',
  },
});

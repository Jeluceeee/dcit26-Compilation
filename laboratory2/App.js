//BSCS 3-1
//ANOTA, JELUCEL R.
//CHICO, DENMARK
//MAQUE, MARK ERICKSON
//NOFUENTE, JOHN PAUL

import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
export default function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [enteredgoal, setEnteredGoal] = useState('');
  const [setDel] = useState(count);

  const del = (e) => {
    setCount(count + 1);
    items.splice(items.indexOf(items));
    if (!items.length) {
      alert('All items are deleted!');
    }
  };

  const inptxt = (txt) => {
    setEnteredGoal(txt);
  };

  const additem = () => {
    if (enteredgoal == '') {
      alert('Input Needed!!');
    } else {
      setItems([...items, enteredgoal]);
      setEnteredGoal('');
    }
  };

  return (
    <View style={sizob.mainV}>
      <View style={sizob.pos}>
        <TextInput
          onChangeText={inptxt}
          placeholder="Enter data"
          style={sizob.sizeIn}
          value={enteredgoal}></TextInput>

        <Button onPress={additem} title="ADD" />
      </View>

      <View>
        {items.map((item) => (
          <Text style={sizob.list} key={item}>
            {item}
          </Text>
        ))}
      </View>
      <View style={sizob.mainV2}>
        <Button
          setDel={count}
          name={count}
          title="DELETE PREVIOUS INPUT"
          onPress={del}
          value={count}
          style={sizob.pos}
        />
      </View>
    </View>
  );
}
const sizob = StyleSheet.create({
  sizeIn: {
    flexDirection: 'row',
    borderWidth: 2,
    padding: 10,
    width: 250,
  },
  mainV2: {
    padding: 10,
    alignItems: 'center',
  },
  mainV: {
    flex: 1,
    padding: 50,
    backgroundColor: '#FC766AFF',
  },
  pos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    borderBottomColor: 'black',
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#97BC62FF',
    marginVertical: 5,
    borderRadius: 10,
  },
});

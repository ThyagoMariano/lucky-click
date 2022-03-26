import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const Count = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  function handleNumero() {
    const newNumber = Math.floor(Math.random() * 10);
    setNumber(number + newNumber);

    const newNumber2 = Math.floor(Math.random() * 10);
    setNumber2(number2 + newNumber2);
  }

  function clearPoints() {
    setNumber(0);
    setNumber2(0);
  }

  if (number >= 100) {
    alert(`vencedor é player 1 com ${number} pontos`);
    clearPoints();
  } else if (number2 >= 100) {
    alert(`vencedor é player 2 com ${number2} pontos`);
    clearPoints();
  }

  return (
    <View style={style.row}>
      <View>
        <Text style={style.number}>{number}</Text>
        <TouchableOpacity style={style.button} onPress={handleNumero}>
          <Text>Player 1</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={style.number}>{number2}</Text>
        <TouchableOpacity style={style.button} onPress={handleNumero}>
          <Text>Player 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  number: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: '50px',
  },
});

export default Count;

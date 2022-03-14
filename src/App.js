import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0);

  function handleNumero() {
    const novoNumero = Math.floor(Math.random() * 100);
    setNumero(novoNumero);
  }

  function reset() {
    const resetNumero = 0;
    setNumero(resetNumero);
  }

  return (
    <>
      <SafeAreaView style={style.container}>
        <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={style.botao}>
          <Text>Gerar número</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset} style={style.botao}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  botao: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 15,
  },
});

export default App;

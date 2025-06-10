import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useBuscaCep } from '@/hook/useBuscaCep';

export default function BuscaCEP() {
  const { cep, setCep, endereco, buscarCEP } = useBuscaCep();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consulte seu CEP</Text>

      <TextInput
        style={styles.textinput}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        placeholderTextColor="#666"
      />

      <TouchableOpacity style={styles.botao} onPress={buscarCEP}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>

      {endereco.logradouro !== '' && (
        <View style={styles.result}>
          <Text style={styles.resultTexto}>Logradouro: {endereco.logradouro}</Text>
          <Text style={styles.resultTexto}>Bairro: {endereco.bairro}</Text>
          <Text style={styles.resultTexto}>Cidade: {endereco.localidade}</Text>
          <Text style={styles.resultTexto}>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#134761',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  textinput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  botao: {
    backgroundColor: 'gold',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    marginVertical: 10,
  },
  textoBotao: {
    color: '#134761',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    padding: 16,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    width: '80%',
  },
  resultTexto: {
    color: 'white',
    fontSize: 16,
    marginBottom: 4,
  },
});

import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Button({command}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={command}>
      <Text style={styles.buttonText}>Adicionar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    alignItems: 'center',
    padding: 16,
    borderRadius: 7,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

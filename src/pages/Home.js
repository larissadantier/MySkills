import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export function Home() {
  const [skills, setSkills] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a sua skill"
        placeholderTextColor="#555"
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 30}]}>My Skills</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 20,
    backgroundColor: '#121015',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS ? 16 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
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

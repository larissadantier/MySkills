import React, {useState, useEffect} from 'react';
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
  const [newSkill, setNewSkill] = useState('');

  function handleAddSkill() {
    setSkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a sua skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          handleAddSkill();
        }}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical: 30}]}>My Skills</Text>

      {skills.map(skill => (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
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
  buttonSkill: {
    alignItems: 'center',
    backgroundColor: '#1F1E25',
    padding: 16,
    borderRadius: 15,
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

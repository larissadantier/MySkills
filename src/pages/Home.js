import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Platform,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

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

      <Button command={handleAddSkill} />

      <Text style={[styles.title, {marginVertical: 30}]}>My Skills</Text>

      <FlatList data={skills} renderItem={item => <SkillCard {...item} />} />
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
});

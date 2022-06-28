import React, {useState, useEffect} from 'react';
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

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [grettings, setGrettings] = useState('');

  useEffect(() => {
    currentHours();
  }, []);

  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setSkills(oldState => [...oldState, data]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setSkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  function currentHours() {
    const hours = new Date().getHours();

    if (hours < 12) {
      return setGrettings('Bom dia!');
    }

    if (hours > 12 && hours < 18) {
      return setGrettings('Boa tarde!');
    }

    if (hours > 18) {
      return setGrettings('Boa noite!');
    }

    return;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Home </Text>
      <Text style={styles.text}> {grettings} </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a sua skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <Button title="Adicionar" onPress={handleAddSkill} />

      <Text style={[styles.title, {marginVertical: 30}]}> My Skills </Text>

      <FlatList
        data={skills}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
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
  text: {
    color: '#FFF',
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

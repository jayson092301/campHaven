// src/app/Register.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Registration() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete the following</Text>

      <View style={styles.form}>
        <TextInput label="Full Name" mode="outlined" style={styles.input} />
        <TextInput label="Email Address" mode="outlined" style={styles.input} />
        <TextInput label="Phone Number" mode="outlined" style={styles.input} />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
        />
        <TextInput label="University Name" mode="outlined" style={styles.input} />
      </View>

      <Button mode="contained" style={styles.button} onPress={() => {/* Register Logic */}}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 24, fontFamily: 'Italiano', textAlign: 'center', marginBottom: 20 },
  form: { backgroundColor: '#e0e0e0', padding: 20, borderRadius: 8, marginBottom: 20 },
  input: { marginBottom: 10, backgroundColor: '#f5f5f5' },
  button: { backgroundColor: '#000', paddingVertical: 8 },
});

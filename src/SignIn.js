import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function SignIn({ navigation }) { 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back.</Text>
      <Text style={styles.subtitle}>You've been missed!</Text>

      <View style={styles.form}>
        <TextInput
          label="Phone or Email"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          right={<TextInput.Icon icon="eye-off" />}
          style={styles.input}
        />
      </View>

      <View style={styles.footer}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={styles.footerText}>Can't Log In?</Text>
          <Button
            mode="text"
            onPress={() => navigation.navigate('Forgot')} // Navigate to Forgotpass page
          >
            Change Password!
          </Button>
        </View>
      </View>

      <Button mode="contained" style={styles.button} onPress={() => {/* Sign In Logic */}}>
        Sign In
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 32, fontFamily: 'Italiano', textAlign: 'center' },
  subtitle: { fontSize: 20, fontFamily: 'Italiano', textAlign: 'center', marginBottom: 20 },
  form: { backgroundColor: '#e0e0e0', padding: 20, borderRadius: 8, marginBottom: 20 },
  input: { marginBottom: 10, backgroundColor: '#f5f5f5' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  footerText: { color: '#333' },
  registerLink: { color: '#f00', fontWeight: 'bold', marginLeft: 5, textDecorationLine: 'underline' },
  button: { backgroundColor: '#000', paddingVertical: 8 },
});

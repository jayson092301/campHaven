import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Forgotpass() {
  const router = useRouter();
  
  
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  
  const handleSubmit = () => {
    if (newPassword === rePassword) {
      
      console.log("Password changed successfully for:", emailOrPhone);
      
      router.push('/SignIn'); // Navigate back to Sign In page
    } else {
      
      alert("Passwords do not match!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password!</Text>

      <View style={styles.form}>
        <TextInput
          label="Phone or Email"
          mode="outlined"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          style={styles.input}
        />
        <TextInput
          label="New Password"
          mode="outlined"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
          right={<TextInput.Icon icon="eye-off" />}
          style={styles.input}
        />
        <TextInput
          label="Re-Password"
          mode="outlined"
          secureTextEntry
          value={rePassword}
          onChangeText={setRePassword}
          right={<TextInput.Icon icon="eye-off" />}
          style={styles.input}
        />
      </View>
      <Button mode="contained" style={styles.button} onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 32, fontFamily: 'Italiano', textAlign: 'center' },
  form: { backgroundColor: '#e0e0e0', padding: 20, borderRadius: 8, marginBottom: 20 },
  input: { marginBottom: 10, backgroundColor: '#f5f5f5' },
  button: { backgroundColor: '#000', paddingVertical: 8 },
});

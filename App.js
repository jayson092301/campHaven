import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import Loginbutton from './src/Loginbutton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'column'}}>
        <Login/>
        <View style={{backgroundColor: 'white', height:350}}>
          <Loginbutton/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

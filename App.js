import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Loginbutton from './src/Loginbutton';
import Registration from './src/Registration';
import SignIn from './src/SignIn';
import Forgotpass from './src/Forgotpass';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Forgot" component={Forgotpass} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Login />
        <View style={{ backgroundColor: 'white', height: 350 }}>
          <Loginbutton navigation={navigation} />
        </View>
      </View>
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

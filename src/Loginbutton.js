import { View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Loginbutton() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderRadius: 10, width: '90%', alignItems: 'center' }}>
                <Button 
                    style={{ backgroundColor: '#0A0A0A', marginVertical: 8, width: '80%' }}
                    mode="contained" 
                    onPress={() => navigation.navigate('Registration')}
                    labelStyle={{ color: '#E8CDB2', fontSize: 18 }}>
                    Register
                </Button>
                <Button 
                    style={{ backgroundColor: '#0A0A0A', marginVertical: 8, width: '80%' }}
                    mode="contained" 
                    onPress={() => navigation.navigate('SignIn')} 
                    labelStyle={{ color: '#E8CDB2', fontSize: 18 }}>
                    Sign In
                </Button>
            </View>
        </SafeAreaView>
    );
}

import { View, SafeAreaView } from "react-native";
import { Button } from 'react-native-paper';

export default function Loginbutton() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ marginTop: 100, borderRadius: 10 }}>
                <View style={{ margin: 10 }}>
                    <Button 
                        style={{ backgroundColor: '#0A0A0A', height: 50, margin: 10, width: 300, marginLeft:90, paddingTop:5,textColor: 'red' }} // Set width for the button
                        mode="contained" 
                        onPress={() => console.log('Pressed')}
                        labelStyle={{ color: '#E8CDB2',fontSize:18 }}>
                        Register
                    </Button>
                    <Button 
                        style={{ backgroundColor: '#0A0A0A', height: 50, margin: 10, width: 300, marginLeft:90, paddingTop:5 }} // Set width for the button
                        mode="contained" 
                        onPress={() => console.log('Pressed')}
                        labelStyle={{ color: '#E8CDB2', fontSize:18 }}>
                        Sign In
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

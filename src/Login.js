import { View, ImageBackground, Text, Button } from "react-native";

export default function Login() {
    return (
        <View>
            <View>
                <ImageBackground
                    source={require('../assets/img/logo.png')}
                    style={{ width: 500, height: 200, justifyContent: 'center', marginBottom: 100, marginTop:300 }}
                >
                </ImageBackground>
            </View>
        </View>
    );
}

import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
    return (
        <>
            <View style={styles.appContainer}>
                <View style={{
                    backgroundColor: 'red',
                    flex:1,
                    justifyContent:'center',
                    alignItems: 'center',
                }}>
                    <Text>1</Text>
                </View>
                <View style={{
                    backgroundColor: 'blue',
                    flex:1,
                    justifyContent:'center',
                    alignItems: 'center',
                }}>
                    <Text>2</Text>
                </View>
                <View style={{

                    backgroundColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>3</Text>
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch',

    },
});

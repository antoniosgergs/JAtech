import {TextInput, View, StyleSheet, Alert} from 'react-native'
import {useState} from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors"
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
    const[enterNumber, setEnterNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnterNumber(enteredText);
    }

    function resetInputHandler() {
        setEnterNumber('');
    }

    function confirmInputHandler(enteredText) {
        const chosenNumber = parseInt(enterNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99 ){
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99',
                [{
                    text: 'Okay', style: 'destructive', onPress: resetInputHandler,
                }]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }
return (
    <View style={styles.rootContainer}>
        <Title>Guess my number</Title>
        <Card>
            <InstructionText>Enter your number!</InstructionText>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enterNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler} >Rest</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
    </View>

)
}

export default StartGameScreen;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop:100,
        alignItems:"center",
    },
    numberInput: {
         width: 50,
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop:6,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
         flex: 1,
    }
})

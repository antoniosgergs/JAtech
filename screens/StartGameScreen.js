import {TextInput,
    View,
    StyleSheet,
    Alert,
    useWindowDimensions,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import {useState} from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors"
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
    const[enterNumber, setEnterNumber] = useState('');
    const {width, height} = useWindowDimensions();

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

    const marginTopDistance = height < 380 ? 30 : 100;

return (
    <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
            <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
        </KeyboardAvoidingView>
    </ScrollView>
)
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer:{
        flex: 1,
        // marginTop:deviceHeight < 380 ? 30 : 100,
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

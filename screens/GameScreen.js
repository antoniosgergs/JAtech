import {Text, View, StyleSheet, Alert} from 'react-native';
import {useState, useEffect} from "react";
import { Ionicons } from '@expo/vector-icons';

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Instructions from "../components/ui/InstructionText";

// const generateRandomBetween = (min, max, exclude) => {
//     const rndNum = Math.floor(Math.random() * (max - min)) + min;
//
//     if (rndNum === exclude) {
//         return generateRandomBetween(min, max, exclude);
//     } else {
//         return rndNum;
//     }
// }

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
        let minBoundary = 1;
        let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(
        1,
        100,
        userNumber
    );
    console.log('your number you picked is :' + userNumber);
    const[currentGuess, setCurrentGuess]=useState(initialGuess)

    useEffect(() => {
    if (currentGuess === userNumber) {
        onGameOver();
    }
    },[currentGuess, userNumber,onGameOver])// hone

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    },[ ])

    function nextGuessHandler(direction){ // direction => 'lower','grater'
        if (
            (direction === "lower" && currentGuess < userNumber)
            ||
            (direction === "greater" && currentGuess > userNumber)
        ){
            Alert.alert('Dont lie!', 'You know that this is wrong...', [
                {
                    text:'Sorry!',
                    style:'cancel'
                }
            ])
            return;
        }
        if (direction === "lower"){
            maxBoundary = currentGuess ;
        }else{
            minBoundary = currentGuess +1 ;
        }
        console.log(minBoundary,maxBoundary);
        const newRndNumber =  generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
    }
    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <Instructions style={styles.InstructionsText}>Higher or Lower?</Instructions>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                         <Ionicons name="add-outline" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        <View>
            <Text>LOG ROUNDS</Text>
        </View>
    </View>

}

export default GameScreen

const styles = StyleSheet.create({
     screen: {
         flex: 1,
         paddingTop: 24,
     },
    InstructionsText:{
         marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})

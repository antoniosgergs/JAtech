import {   ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient'
import {useState} from "react";
import Colors from "./constants/colors";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'Open-Sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
        'Open-Sans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    if(!fontsLoaded){
        return <AppLoading />
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler() {
        setGameIsOver(true);
    }

    function onStartNewGameHandler() {
        setUserNumber(null )
        setGuessRounds(0)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        );
    }
    if (gameIsOver && userNumber) {
        screen = <GameOverScreen
            userNumber={userNumber}
            roundsNumber={guessRounds}
            onStartNewGame={onStartNewGameHandler}
        />;
    }

  return (
   <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
       <ImageBackground
           source={require('./assets/images/dice.jpg')}
            resizeMode="cover"
           style={styles.rootScreen}
           imageStyle={styles.backgroundImage}
       >
           <SafeAreaView style={styles.rootScreen}>
               {screen}
           </SafeAreaView>
       </ImageBackground>
   </LinearGradient>
  );
}

const styles = StyleSheet.create({
    rootScreen:{
        flex: 1,
    },
    backgroundImage:{
        opacity:0.15
    }
});

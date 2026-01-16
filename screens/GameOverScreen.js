import {View, Image, Text,  StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame  }) {
return (
        <View style={styles.rootContainer}>
           <Title> Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                       source={require("../assets/images/success.png")} />
            </View>
                <Text style={styles.summaryText}>
                    Tou need <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
                </Text>
            <PrimaryButton onPress={onStartNewGame}>
                 Start New Game
            </PrimaryButton>
        </View>
)
}

export default GameOverScreen;

const styles = StyleSheet.create({
   rootContainer: {
       flex: 1,
       padding:12,
       justifyContent:"center",
       alignItems:"center",
   },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin:36
    },
    image:{
        width: "100%",
        height: "100%",
    },
    summaryText:{
       fontFamily:'open-sans',
        fontSize:28,
        textAlign:'center',
        marginVertical:25,
    },
    highlightText:{
       fontFamily:'open-sans-light',
        color:Colors.primary500,
    }
})

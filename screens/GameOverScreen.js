import {Text, StyleSheet} from "react-native";

function GameOverScreen() {
return (
        <Text style={styles.gameOverText}> Game is over!</Text>
)
}

export default GameOverScreen;

const styles = StyleSheet.create({
    gameOverText:{
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: "yellow",
        alignItems: "center",
    }
})

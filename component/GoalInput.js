import {Button,TextInput,StyleSheet,View} from "react-native";
import {useState} from "react";

function GoalInput(props) {
    const [enterGoalText, setEnterGoalText] = useState({})

    function goalInputHandler( enteredText) {
        setEnterGoalText(enteredText);
    }

    function addGoalHandler( ) {
        props.onAddGoal(enterGoalText);
        setEnterGoalText('')
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Enter your goal'
                onChangeText={goalInputHandler}
                value={enterGoalText}
            />
            <Button title={"Add Goal"} onPress={ addGoalHandler } />
        </View>
    )
}


export default GoalInput;

const styles = StyleSheet.create({
        inputContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            borderBottomColor: '#cccccc',
            borderBottomWidth: 1,
        },
        textInput: {
            borderWidth: 1,
            width: '70%',
            marginRight:8,
            padding: 8,
            borderColor: "black",

        },

})

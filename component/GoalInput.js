import {Button,TextInput,StyleSheet,View, Modal, Image} from "react-native";
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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your goal'
                    onChangeText={goalInputHandler}
                    value={enterGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={"Add Goal"} onPress={ addGoalHandler } color={'#5e0acc'} />
                    </View>
                    <View style={styles.button}>
                        <Button title={"Cancel"} onPress={props.onCancel} color={'#f31282'} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor:'#331b6b'
    },
    textInput: {
        borderWidth: 1,
        width: '100%',
        borderColor: "#e4f0ff",
        backgroundColor: '#e4d0ff',
        color:'#120438',
        borderRadius:6,
        padding:16,
        },
    buttonContainer: {
            flexDirection: 'row',
        marginTop: 18,
    },
    button: {
         width: '100',
        marginHorizontal:8,
    },
    image: {
        width: 100,
        height: 100,
        margin:20,
    }

})

import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import {StyleSheet, Text, View, Button, TextInput,ScrollView} from 'react-native';

export default function App() {
    const [enterGoalText, setEnterGoalText] = useState({})
    const [courseGoals, setCourseGoals] = useState([])

    function goalInputHandler( enteredText) {
        setEnterGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals( (currentCourseGoals) =>[
            ...currentCourseGoals,
            enterGoalText,
        ]);
    }
    return (
        <>
            <View style={styles.appContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your goal'
                        onChangeText={goalInputHandler}
                    />
                    <Button title={"Add Goal"} onPress={addGoalHandler} />
                </View>
                <View style={styles.goalsContainer}>
                    <Text>Your goal list:</Text>
                    {courseGoals.map((goal) => (
                        <View key={goal} style={styles.goalItem}>
                            <Text style={styles.goalText}>{goal}</Text>)
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal:16,
    },
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
    goalsContainer: {
        flex:4,
    },
    goalItem:{
        borderRadius:8,
        backgroundColor:'purple',
        paddingLeft:10,
        width:'80%',
        marginTop:8,
    },
    goalText:{
        color:'#cccccc',
    }
});

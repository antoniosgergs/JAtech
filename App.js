import {useState} from 'react'
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';
import {StatusBar} from 'react-native';

export default function App() {
    const[modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([])

    function startAddGoalHandler(){
    setModalIsVisible(true);
    }

    function endAddGoalHandler(){
        setModalIsVisible(false);
    }
    function addGoalHandler( enterGoalText) {
        setCourseGoals( (currentCourseGoals) =>[
            ...currentCourseGoals,
            { text: enterGoalText, id: Math.random().toString() },
        ]);
        endAddGoalHandler();
    }

    function deleteGoalHandler(id ){
        setCourseGoals( (currentCourseGoals) =>{
            return currentCourseGoals.filter((goal) => goal.id !== id)
        })
    }
    return (
        <>
            <StatusBar barStyle="auto" />
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color= '#a065ec'
                    onPress={startAddGoalHandler}
                />
               <GoalInput
                   visible={modalIsVisible}
                   onAddGoal={addGoalHandler}
                   onCancel={endAddGoalHandler}
               />
                <View style={styles.goalsContainer}>
                    <FlatList
                            data={courseGoals}
                            renderItem={(itemData) => {
                            return(
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}  //hone kif onDeleteItem esma props
                                />
                            )
                        }}
                            keyExtractor={(item, index) =>{
                             return item.id;
                            }}
                        alwaysBounceVertical={false}
                    />
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
    goalsContainer: {
        flex:4,
    },
});

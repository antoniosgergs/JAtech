import {StyleSheet, View, Text, Pressable, Modal} from 'react-native';

function GoalItem(props) {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.goalItem}>
                <Pressable
                    android_ripple={{ color: '#0d0346' }}
                    onPress={props.onDeleteItem.bind(this, props.id)}
                    style={({pressed}) => pressed && {opacity: pressed ? 0.8 : 1}}
                >
                        <Text style={styles.goalText}>{props.text}</Text>
                </Pressable>
            </View>
        </Modal>
    );
}

export default GoalItem;

const styles = StyleSheet.create( {
    goalItem:{
        margin: 8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
        overflow: 'hidden',

    },
    goalText:{
        color:'white',
        padding:8,
    },
})

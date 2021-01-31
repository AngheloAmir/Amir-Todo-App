import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {TodoItemInterface} from './state';

interface propsReceive {
    item     :TodoItemInterface;
    index    :number;
    flip     (index :number) :void;
    delete   (index :number) :void;
}

export default function TodoItem (props :propsReceive) {
    function checkboxStyle() :any {
        return props.item.isMarked ?
            <MaterialCommunityIcons name='checkbox-marked-outline' size={26} color='green' />
            :
            <MaterialCommunityIcons name='checkbox-blank-outline' size={26} color='black' />
    };

    function handleTodoPress() :void {
        props.flip(props.index);
    }

    function handleDeletePress() :void {
        props.delete(props.index);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.todoItemContainer} onPress={handleTodoPress}>
                { checkboxStyle() }
                <Text style={styles.text}> {props.item.text} </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icons} onPress={handleDeletePress}>
                <MaterialIcons name='delete-outline' size={24} color='#f55' />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 48,
        width: '90%',
        marginLeft: '5%',
    },
    todoItemContainer: {
        paddingTop: 9,
        flexDirection: 'row',
        width: '85%',
    },
    text: {
        fontSize: 20,
    },
    icons: {
        width: '15%',
        paddingLeft: '5%',
        paddingTop: 12,
        
    }
})
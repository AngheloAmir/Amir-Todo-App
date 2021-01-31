import React from 'react';
import {Alert, FlatList, StyleSheet, View, TouchableOpacity, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

interface propsReceive {
  add  (text :string) :void;
}

export default function AddTodo(props :propsReceive) {
  const [textinput, settext] = React.useState('');

  function handleChangeText(text :string) :void {
    settext(text);
  }

  function handleAddTodo() :void {
    if(textinput.length > 0) {
      props.add(textinput);
      settext('');
    }
  }

   return (
    <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} value={textinput} onChangeText={handleChangeText}/>
        <TouchableOpacity style={styles.addbtn} onPress={handleAddTodo}>
          <Icon name="diff-added" size={32} color='blue' />
        </TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
    textInputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingBottom: 12,
      marginLeft: '5%',
      width: '90%',
    },
    textInput: {
      borderColor: '#58e',
      borderRadius: 12,
      borderWidth: 2,
      width: '80%',
    },
    addbtn: {
      alignSelf: 'center',
      justifyContent: 'center',
      paddingLeft: 12,
      width: '15%',
    }
  });
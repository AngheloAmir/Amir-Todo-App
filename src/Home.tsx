import React from 'react';
import {FlatList, StyleSheet, View, ScrollView, Dimensions} from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';

import {TodoItemInterface, createState} from './state';

import Topbar from './Topbar';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

interface propsReceive {
    navigation :any;
}

export default function Home(props :propsReceive) {
  const defaultData :Array<TodoItemInterface> = createState();
  const [state, setState] = React.useState(defaultData);

  function flipTodoMarked(index :number) :void {
    setState( () => {
      return state.map((value :TodoItemInterface, i :number) => {
        if(index === i)
          return {
            ...value, isMarked: !value.isMarked
          }
        else
          return value;
      })
    });
  };

  function deleteTodo(index :number) :void {
    setState( () => {
      return state.filter((value :TodoItemInterface, i :number) => index !== i)
    });
  }

  function addTodo(text :string) :void {
    setState([...state, { text: text, isMarked: false}]);
  }

  return (
    <View style={styles.container}>
      <Topbar navigation={props.navigation} />

      <ScrollView style={styles.todoListContainer}>
        <FlatList
          data={state}
          renderItem={ item =>
            <TodoItem item={item.item} index={item.index}
              flip={flipTodoMarked} delete={deleteTodo}
            /> }
        />
      </ScrollView>
      
    <View>
      <AddTodo add={addTodo} />
    </View>
     
    </View>
  );
}

const {height} = Dimensions.get('window');
const topbarHeight = 42;
const addTodoHeight = 44;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  addTodoContainer: {
    height: addTodoHeight,
  },
  todoListContainer: {
    height: (height - topbarHeight - addTodoHeight),
    paddingBottom: 8,
    paddingTop: 8,
  }
});

/*
    borderColor: 'green',
    borderWidth: 1,
*/
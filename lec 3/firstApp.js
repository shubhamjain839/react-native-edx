import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  Switch
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  appContainer: {
    paddingTop: Constants.statusBarHeight
  },
  fill: {
    flex: 1
  }
});

let id = 0;
const Todo = (props) => (
  <View style={styles.todoContainer}>
    <Switch
      value='{props.todo.checked}'
      switched='true'
      onValueChange={props.onToggle}
    />
    <Text>{props.todo.text}</Text>
    <Button onPress={props.onDelete} title='Delete' />
  </View>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  addTodo() {
    id++;
    const text = `Todo id : ${id}`;
    this.setState({
      todos: [...this.state.todos, { id: id, text: text, checked: false }]
    });
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }
  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }
  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Todo Count : {this.state.todos.length}</Text>
        <Text>
          unchecked todos :{' '}
          {this.state.todos.filter((todo) => !todo.checked).length}
        </Text>
        <Button onPress={() => this.addTodo()} title='Add Todo' />
        <ScrollView style={styles.fill}>
          {this.state.todos.map((todo) => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

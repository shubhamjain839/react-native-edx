import React from 'react';
import { render } from 'react-dom';
import './styles.css';

const rootElement = document.getElementById('root');
let id = 0;
const Todo = (props) => (
  <li>
    <input
      type='checkbox'
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <span>{props.todo.text}</span>
    <button onClick={props.onDelete}>Delete</button>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  addTodo() {
    const text = prompt('Enter Todo');
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
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
      <div>
        <div>Todo Count : {this.state.todos.length}</div>
        <div>
          unchecked todos :{' '}
          {this.state.todos.filter((todo) => !todo.checked).length}
        </div>
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
render(<App />, rootElement);

import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
  todos: [
   {id: 1, content: 'Buy some milk'},
   {id: 2, content: 'Bring some bread'}
   ] 
  }
  deleteTodo = (id) => {
   const todos = this.state.todos.filter(todo => {
    return todo.id !== id 
   });
   this.setState({
    todos 
   }) 
  }
  render() {
    return (
      <div className="todo-app container">
      <h2 className='center pink-text'>Todos</h2>  
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo />
      </div>
    );
  }
}

export default App;

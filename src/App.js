import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
  todos: [
   {id: 1, content: 'Buy some milk'},
   {id: 2, content: 'Bring some bread'},
   {id: 3, content: 'Πέτα τη φριτέζα'}
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
  addTodo = (todo) => {
   todo.id = Math.random();
   let todos = [...this.state.todos, todo];
   this.setState({
    todos 
   })
  }
  render() {
    return (
      <div className="todo-app container">
      <h2 className='center purple-text'>Todos</h2>  
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;

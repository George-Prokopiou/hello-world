import React from 'react'

const Todos = ({todos, deleteTodo}) => {
 const todoList = todos.length ?  (
  todos.map(todo => {
   return (
    <div className='collection-item' key={todo.id}>
    <p>{todo.content}</p>
    <button onClick={() => { deleteTodo(todo.id) }}>Delete</button>
    </div> 
   ) 
  }) 
   
 ) : (
  <p className='center'>Tou have no todos left!</p>   
 )
 return (
  <div className='todos collection'>
   {todoList}
  </div>   
 )  
}
export default Todos
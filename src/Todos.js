import React from 'react';
const Todos=({todos,deleteTodo})=>{
    const todoList=todos.length ? (
        todos.map(todo =>{
            return(                                 //to get id
                <div className="collection-item" key={todo.id}>
                    {/*to output todo.contents*/}
                    <span onClick={() =>{deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ): (
        <p className="center">you have no todo's left,</p>
    )
    return(
        <div className="todos collection">
        {/*to output the todolist in the browser*/}
        {todoList}
        </div>
    )
}
export default Todos
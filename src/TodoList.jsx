import { useState } from "react";
import { TodoItem } from "./TodoItem"

export function TodoList(props) {
    const [query, setQuery] =  useState("")

    const {deleteFunc, toggleFunc, allTodos} = props;

    const filteredItems = allTodos.filter((item) => {
        let text = item.title

        if (text.toLowerCase().includes(query.toLowerCase())) {
        return item
        }
    })




    return(
        <>
            <h1 className="header">Todo list</h1>
            <label>Search <input value={query} onChange={(e) => setQuery(e.target.value)} type="search"/></label>
            
            <ul className="list">
                {filteredItems.length === 0 ? <h1>{"No todos :)"}</h1> : null}
                {filteredItems.map(todo => {
                return (
                    <TodoItem {...todo} key={todo.id} deleteFunc={deleteFunc} toggleFunc={toggleFunc} />
                    // <li key={todo.id}>
                    // <label>
                    //     <input 
                    //     type="checkbox" 
                    //     checked={todo.completed}
                    //     onChange={e => toggleFunc(todo.id, e.target.checked)}
                    //     />
                    //     {todo.title}
                    // </label>
                    // <button className="btn btn-danger" onClick={() => deleteFunc(todo.id)}>Delete</button>
                    // </li>
                )
                })}
            </ul>
        </>
    )
}
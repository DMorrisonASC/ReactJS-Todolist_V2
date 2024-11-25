import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import {useEffect, useState} from "react"
import { TodoList } from "./TodoList"

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")

    if (localValue != null) return JSON.parse(localValue)
  
    return []
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const props = {
    onSubmit: addTodo
  }

  const itemFuncs = {
    deleteFunc: deleteTodo,
    toggleFunc: toggleTodo,
    allTodos: todos,
  }

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }

  function toggleTodo (id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
            // `todo.completed = !completed`, Do not modify state vars directly
            // Make a copy and return it
            return {...todo, completed}
        }
        return todo
      })
    }
    )
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm {...props}/>
      <TodoList {...itemFuncs}/>
      {/* <h1 className="header">Todo list</h1>
      <ul className="list">
        {todos.length === 0 ? <h1>{"No todos :)"}</h1> : null}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input 
                  type="checkbox" 
                  checked={todo.completed}
                  onChange={e => toggleTodo(todo.id, e.target.checked)}
                  />
                {todo.title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul> */}
    </>
  )
}

export default App
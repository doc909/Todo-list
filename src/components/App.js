import React, { useState, useEffect } from 'react';
import'./style.css'
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    // Filters todo list items based on their status
    const filterHandler = () => {
        switch(status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            case 'date':
                const dateArray = [...todos].sort((todo, nextTodo) => nextTodo.date - todo.date)
                setFilteredTodos(dateArray);
            break;
            default:
                setFilteredTodos(todos);
            break;
        }
    };

    return(
        <div className="ui raised very padded text container segment">
            <header>
                <h1 className="ui header">Todo List </h1>
            </header>
            <hr />
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
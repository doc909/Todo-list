import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) return {...item, completed: !item.completed};
            return item;
        }));
    };

    return(
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div>{text}</div>
            <div>
                <button className="ui icon button green" onClick={completeHandler}>
                    <i className="check icon"></i>
                </button>
                <button className="ui icon button red" onClick={deleteHandler}>
                    <i className="trash alternate icon"></i>
                </button>
            </div>
        </div>
    );
};

export default Todo
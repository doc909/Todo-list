import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return(
        <div className="ui middle aligned divided list">
            <div className="item">
            {filteredTodos.map(todo => {
                    return (<Todo
                        text={todo.text}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                    />);
                })}
            </div>
        </div>
    );
};

export default TodoList
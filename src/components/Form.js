import React, { useEffect } from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    });

    const inputTextHandler = event => {
        setInputText(event.target.value);
    };

    const submitToDoHandler = event => {
        event.preventDefault();
        const currentDate = new Date();

        if (inputText.length < 1) {
            alert('Please add a task before submitting');
            return null;
        } else {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() * 1000, date: currentDate}
            ]);
        }
        setInputText('');
    };

    const statusHandler = event => {
        setStatus(event.target.value);
    };

    return(
        <form>
            <div className="ui action input">
                <input
                    value={inputText}
                    type="text"
                    placeholder="Add tasks"
                    onChange={inputTextHandler}
                />
                <button
                    type="submit"
                    className="ui button"
                    onClick={submitToDoHandler}
                >
                    Submit
                </button>
            </div>
            <div>
                <select name="todos" className="ui search dropdown" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    <option value="date">Date of completion</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
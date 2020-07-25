import React, {useState} from 'react';
function Form({todos, setTodos}) {

const [todoValue, setTodoValue] = useState('');
const [descriptionValue, setDescriptionValue] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if (!todoValue) return;
        addToList(todoValue, descriptionValue);
        setTodoValue("");
        setDescriptionValue("");
    }

    const addToList = (todo, description) => {
        const newTodos = [...todos, {'id': todos.length+1, "todo": todo, "date": Date().toLocaleString(), "description": description}];
        setTodos(newTodos);
        console.log(todos)
      };

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Add todo:" value={todoValue} onChange={e => setTodoValue(e.target.value)}/>
            <input type='text' placeholder="Add optional description:" value={descriptionValue} onChange={e => setDescriptionValue(e.target.value)}/>
            <p><input type="submit" placeholder="Submit" /></p>
        </form>
    </div>
    );
}

export default Form;
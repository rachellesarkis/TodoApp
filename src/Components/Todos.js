import React, {useState} from 'react';
import Form from './Form';
function Todos() {

const [ todos, setTodos] = useState ([
{id: 1, todo: 'Walk the dog', date: "Sat Jun 13 2020 13:27:55", description: "Take Max for a walk in the public park"},
{id: 2, todo: 'Feed the cat', date: "Tue Jun 30 2020 18:14:44", description: "Feed Leo his favorite dry food"},
{id: 3, todo: 'Go shopping', date: "Fri Jul 24 2020 16:32:03", description: "Buy a dress for Friday's party"},
]);

const deleteItem = (id) => {
    console.log(id);
    const filterArray = todos.filter(o =>o.id !== id);
    console.log(filterArray);
    setTodos(filterArray)
}

    return (
        <div >
        <Form todos={todos} setTodos={setTodos}/>    
        <ul style={{marginTop: 20}}>
          {todos.map(item =>
          <div 
          style={{marginLeft: "4%", border: "0.5px solid blue", borderRadius: 5, display:'flex', flexDirection: 'row', backgroundColor:'grey', width:'300px', height:'160px', marginBottom: 20}}
          >
            <li 
            style={{paddingLeft: "5%",listStyle: "none",minWidth: 135, marginTop: 15,}} 
            key={item.id}> 
            <p>Todo {item.id}: {item.todo}</p> 
            {item.description.length ? (<p>Descrption: {item.description}</p>) : null }
            <p>Date created: {item.date}</p> 
            </li>
            <button 
            style={{marginLeft:'10px', marginTop: 15, width: 20, height: 20}}
            onClick={() => deleteItem(item.id)}
            >x</button>
          </div>
          )}
        </ul>   
        </div>
    );
}

export default Todos;
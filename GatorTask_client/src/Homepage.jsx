import React, { useState } from "react";
import './Signup.css';
import {Header, TaskForm, CompartmentForm, Compartment, Task } from './Compartments';


function Homepage() {
    const [compFormText, setCompText] = useState("");
    const [comparts, setComparts] = useState([{name: "None", tasks:[], id:1}]);
    const [newName, setFormName] = useState("");
    const [newDesc, setFormDesc] = useState("");
    const [selectedCompart, setSelectedCompart] = useState(1);

    const addTasks = (event) => {
        // Your addTasks function logic goes here
    };

    let i = 0;

    return (
        <div>
            <Header/>
            <div className='content'>
                <form className='module taskForm' onSubmit={addTasks}>
                    <label>Add Task Name: </label>
                    <input className='input' value={newName} onChange={(event) => setFormName(event.target.value)} />
                    <br/>
                    <label>Add Task Description (Optional)</label>
                    <br/>
                    <textarea className='input descForm' value={newDesc} onChange={(event) => setFormDesc(event.target.value)}/>
                    <br/>
                    <label>Choose Compartment to insert into:</label>
                    <select onChange={(selected) => setSelectedCompart(selected.target.value)}>
                        {comparts.map((compart) => <option key={compart.id} value={compart.id}>{compart.name}</option>)}
                    </select>
                    <br/>
                    <input type='submit' value="Add Task"/>
                </form>
                <TaskForm comparts={comparts} setComparts={setComparts}/>
                {comparts.map((compart) => <Compartment comparts={comparts} key={++i} compart={compart} setComparts={setComparts}/>)}
                <CompartmentForm compFormText={compFormText} setCompText={setCompText} comparts={comparts} setComparts={setComparts}/>
            </div>
        </div>
    );
}

export default Homepage;

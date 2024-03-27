import React, { useState } from "react";
import './Signup.css';
import { Header, TaskForm, CompartmentForm, Compartment } from './Compartments';

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
                <TaskForm comparts={comparts} setComparts={setComparts}/>
                {comparts.map((compart) => <Compartment comparts={comparts} key={++i} compart={compart} setComparts={setComparts}/>)}
                <CompartmentForm compFormText={compFormText} setCompText={setCompText} comparts={comparts} setComparts={setComparts}/>
            </div>
        </div>
    );
}

export default Homepage;

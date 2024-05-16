import React, { useEffect } from 'react'
import { useState } from 'react';
import Wordle from './components/wordle';
import './Lvl1.css';
function Lvl1() {

    const [solution,setSolution]=useState(null);
    useEffect(() => {
        fetch('http://localhost:3001/solutions')
        .then(res=>res.json())
        .then(json=>{
            //we need a random int between 0 and json.length
            const randomInt=Math.floor(Math.random()*json.length);
            setSolution(json[randomInt].word);
        });
    },[setSolution]);
    console.log(solution);
    return (
        <div className="App">
            <h1>Wordle</h1>
            {solution && <Wordle solution={solution} />}
        </div>
    );
}

export default Lvl1
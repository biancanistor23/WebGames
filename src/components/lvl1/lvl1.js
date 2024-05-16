import React, { useEffect, useState } from 'react';
import Wordle from './components/wordle';
import './Lvl1.css';

function Lvl1() {
    const [solution, setSolution] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/solutions')
        .then(res => res.json())
        .then(json => {
            const randomInt = Math.floor(Math.random() * json.length);
            setSolution(json[randomInt].word);
        });
    }, [setSolution]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <h1>Wordle</h1>
            <div className="dark-mode-switch" onClick={toggleDarkMode}>
                <input type="checkbox" checked={darkMode} readOnly />
                <span className="slider round"></span>
            </div>
            {solution && <Wordle solution={solution} />}
        </div>
    );
}

export default Lvl1;

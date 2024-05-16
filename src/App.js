import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/home/Home.js';
import Lvl1 from './components/lvl1/lvl1.js';
import Lvl2 from './components/lvl2/lvl2.js';
import Lvl3 from './components/lvl3/lvl3.js';
import Lvl4 from './components/lvl4/lvl4.js';
import Lvl5 from './components/lvl5/lvl5.js';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/lvl1" element={<Lvl1/>} />
        <Route path="/lvl2" element={<Lvl2/>} />
        <Route path="/lvl3" element={<Lvl3/>} />
        <Route path="/lvl4" element={<Lvl4/>} />
        <Route path="/lvl5" element={<Lvl5/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//import logo from './logo.svg';
import './App.css';
import TicTacToe from "./TicTacToe/TicTacToe";
import Counter from "./Counter/Counter";
import {useState} from "react";
import SeveralCounters from "./Counter/SeveralCounters";

function App() {
    const [openApp, setOpenApp] = useState("")
  const runApp = (app) =>{
    setOpenApp(app)
  }
  return (
    <div className="App">
      <DayTillDate />

      <button onClick={() => {runApp("Tic Tac Toe")}}>Tic Tac Toe </button>
        <button>Memory Game </button>
        <button onClick={() => {runApp("Counter")}}>Counter </button>
        <button onClick={() => {runApp("Several Counters")}}>Several Counter </button>
        <button >ToDoList </button>
        {openApp === "Counter" && <Counter />}
        {openApp === "Several Counters" && <SeveralCounters />}
        {openApp === "Tic Tac Toe" && <TicTacToe />}
    </div>
  );
}

export default App;

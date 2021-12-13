//import logo from './logo.svg';
import './App.css';
import TicTacToe from "./TicTacToe/TicTacToe";
import Counter from "./Counter/Counter";
import {useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link, Route, Routes} from "react-router-dom";

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

function App() {
    const [openApp, setOpenApp] = useState("")
    const runApp = (app) => {
        setOpenApp(app)
    }
    return (
        <div className="App">
            {/*//  <DayTillDate />*/}
            <h1>Welcome to React </h1>


            <div className="container row">
                <div className="row justify-content-around my-3">
                    <div className="col-3 bg-light row align-items-start py-3">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/about">Tic Tac Toe</Link>
                        <Link to="/">Memory Game</Link>
                        <Link to="/counter">Counter</Link>
                        <Link to="/">Memory Game</Link>

                        <button onClick={() => {
                            runApp("Tic Tac Toe")
                        }}>Tic Tac Toe
                        </button>
                        <button>Memory Game</button>
                        <button onClick={() => {
                            runApp("Counter")
                        }}>Counter
                        </button>
                        <button onClick={() => {
                            runApp("Several Counters")
                        }}>Several Counter
                        </button>
                        <button>ToDoList</button>
                    </div>


                    <div className="col-8 bg-light py-3">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="/counter" element={<Counter/>}/>
                        </Routes>
                        {/*//{openApp === "Counter" && <Counter/>}*/}
                        {/*  {openApp === "Several Counters" && <SeveralCounters />}*!/*!/*/}
                        {/*{openApp === "Tic Tac Toe" && <TicTacToe/>}*/}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;

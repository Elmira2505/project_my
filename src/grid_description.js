// Make a new file src/components/GridBoard.js and put the following code in it:
//
// import React from 'react'
// import GridSquare from './GridSquare'
//
// // Represents a 10 x 18 grid of grid squares
//
// export default function GridBoard(props) {
//
//     // generates an array of 18 rows, each containing 10 GridSquares.
//
//     const grid = []
//     for (let row = 0; row < 18; row ++) {
//         grid.push([])
//         for (let col = 0; col < 10; col ++) {
//             grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
//         }
//     }
//
//     // The components generated in makeGrid are rendered in div.grid-board
//
//     return (
//         <div className='grid-board'>
//             {grid}
//         </div>
//     )
// }
//
// import React from 'react';
// import './App.css';
//
// import GridBoard from './components/GridBoard'
//
// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1 className="App-title">Tetris Redux</h1>
//             </header>
//             <GridBoard />
//         </div>
//     );
// }
//
// export default App;
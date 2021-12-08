import React, {useState} from 'react';

const TicTacToe = () => {
    const initialResult = new Array(9).fill({}).
            map(el => ({id: Math.random(), value: ''}))
    console.log(initialResult)
    //const [result, setResult]= useState(initialResult)
    return (
        <div>
            TIc TAK
        </div>
    );
};

export default TicTacToe;
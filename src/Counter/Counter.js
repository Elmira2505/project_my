import React, {useState} from 'react';

const Counter = () => {
    const initialCounter = 10;
    const [counter, setCounter] =  useState(initialCounter);
    const minus =() =>{
        setCounter(counter-1);
    }
    const plus =() =>{
        setCounter(counter + 1);
    }
    return (
        <div>
            <button onClick={minus}> - </button>
            {counter}
            <button onClick={plus}> + </button>
        </div>
    );
};

export default Counter;
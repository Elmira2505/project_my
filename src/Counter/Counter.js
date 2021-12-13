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
        <div className="App mx-5">
            <h2 > Counter </h2>

            <p><span style={{color: 'red', fontSize: '42px', fontWeight: 'bold'}}>{counter}</span></p>

            <button type="button" class="btn btn-secondary mx-1" onClick={minus}><b> - </b></button>
            <button type="button" class="btn btn-secondary mx-1" onClick={plus}> + </button>

            <button type="button" class="btn btn-secondary mx-1" onClick={()=> setCounter(0)}> reset </button>




        </div>
    );
};

export default Counter;
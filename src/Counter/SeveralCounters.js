import React from 'react';

const SeveralCounters = () => {
    const initialCounters = [
        {id: 100, value: 10},
        {id: 200, value: 20},
        {id: 300, value: 30},
        {id: 400, value: 40},
    ]
    const [counters, setCounters] = useState(initialCounters)
    return (
        <div>
            {counters.map((el) => (
                <div
            ))}
            <button onClick={() => minus(id)}>+</button>
            <button onClick={() => minus(id)}>+</button>


        </div>
    );
};

export default SeveralCounters;
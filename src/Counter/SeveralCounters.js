import React, {useState} from 'react';

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



        </div>
    );
};

export default SeveralCounters;
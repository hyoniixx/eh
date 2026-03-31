import React, { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(0);

    const minus = () => {
        setNumber(number - 1)
    }
    const plus = () => {
        setNumber(number + 1)
    }
    const init = () => {
        setNumber(0);
    }
    return (
        <>
            <h5>카운트: {number}</h5>
            <div>
                <button onClick={minus}>-1</button>
                <button onClick={init}>초기화</button>
                <button onClick={plus}>+1</button>
            </div>
        </>
    )
}

export default Counter

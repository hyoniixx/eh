import React, { useState } from 'react'

function Cal() {
    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(5);
    return (
        <>
            <h1>간단한 계산기</h1>
            <label htmlFor=""></label>
            <input
                type='number'
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type='number'
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <p>덧셈 : {Number(num1)}+{Number(num2)}={Number(num1) + Number(num2)}</p>
            <p>뺄셈 : {Number(num1)}-{Number(num2)}={Number(num1) - Number(num2)}</p>
            <p>곱셈 : {Number(num1)}×{Number(num2)}={Number(num1) * Number(num2)}</p>
            <p>나눗셈 : {Number(num1)}÷{Number(num2)}={Number(num1) / Number(num2)}</p>
        </>
    )
}

export default Cal

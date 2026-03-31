import React, { useState } from 'react'

function Favorite() {
    const [color, setColor] = useState('red');
    const [fruit, setFruit] = useState('apple');

    const handleColor = (e) => {
        setColor(e.target.value);
    }
    const handleFruit = (e) => {
        setFruit(e.target.value);
    }
    return (
        <>
            <label htmlFor="color"></label>
            <select name="color" id="color" onChange={handleColor}>
                <option value="red">빨간색</option>
                <option value="blue">파란색</option>
                <option value="yellow">노란색</option>
                <option value="green">초록색</option>
            </select>
            <label htmlFor="fruit"></label>
            <select name="fruit" id="fruit" onChange={handleFruit}>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="orange">오렌지</option>
                <option value="grape">포도</option>
            </select>
            <p>선택한 색상 : {color}</p>
            <p>선택한 과일 : {fruit}</p>
        </>
    )
}

export default Favorite

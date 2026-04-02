import React, { useState, useEffect } from 'react'

function Item() {
    const [selected, setSelected] = useState("none");
    const [now, setNow] = useState("없음");

    useEffect(() => {
        switch (selected) {
            case 'apple':
                setNow("사과")
                break
            case 'banana':
                setNow("바나나")
                break
            case 'orange':
                setNow("오렌지")
                break
            case 'grape':
                setNow("포도")
                break
            case 'stberry':
                setNow("딸기")
                break
            default: setNow("없음")
        }
    }, [selected])
    return (
        <>
            <h1>아이템 선택</h1>
            <button value="apple" onClick={(e) => setSelected(e.target.value)}>사과</button>
            <button value="banana" onClick={(e) => setSelected(e.target.value)}>바나나</button>
            <button value="orange" onClick={(e) => setSelected(e.target.value)}>오렌지</button>
            <button value="grape" onClick={(e) => setSelected(e.target.value)}>포도</button>
            <button value="stberry" onClick={(e) => setSelected(e.target.value)}>딸기</button>
            <p>선택된 과일 : {now}</p>
            <p>{selected === 'none' ? '' : `🎉${now}를 선택하셨습니다!`}</p>
        </>
    )
}

export default Item

import React, { useEffect, useState } from 'react'

function ToDoList() {

    const [text, setText] = useState('');

    const [list, setList] = useState(['ff']);

    const [chk, setChk] = useState(false);

    console.log(list)


    return (
        <>
            <input
                type="text"
                placeholder='새 할일'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button>추가</button>
            {list.map((el, index) => {
                return (<div key={index}>
                    <input
                        type="checkbox"
                        key={index}
                        checked={chk}
                        onClick={() => setChk(!chk)}
                    />
                    {chk ? <p>{el}</p> : <s>{el}</s>}
                    <button key={index}>삭제</button>
                </div>)
            })}
        </>
    )
}

export default ToDoList

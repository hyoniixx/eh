import React, { useState } from 'react'

function ToggleSwitch() {
    const [chk1, setChk1] = useState(false);
    const [chk2, setChk2] = useState('꺼짐');
    const handlecontent = (e) => {
        setChk1(e.target.checked);
    }
    const handleDark = (e) => {
        setChk2(e.target.checked);
    }

    return (
        <>
            <input type="checkbox" name='chk1' id='chk1' onChange={handlecontent} />
            <label htmlFor="chk1" >콘텐츠표시 : {chk1 ? "켜짐" : "꺼짐"}</label><br />
            <input type="checkbox" name='chk2' id="chk2" onChange={handleDark} />
            <label htmlFor="chk2">asdf : {chk2 ? '낮' : '달'}</label><br />
            <p>{chk1 ? "이 메시지는 조건부로 표시됩니다!" : ""}</p>
        </>
    )
}

export default ToggleSwitch

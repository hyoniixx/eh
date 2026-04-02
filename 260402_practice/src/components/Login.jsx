import React, { useEffect, useState } from 'react'

function Login() {
    const [isOn, setIsOn] = useState(false);

    const [chk, setChk] = useState(false);

    const [user, setUser] = useState({
        userId: '',
        userPwd: ''
    });

    const handleUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        setIsOn(user.userId != "" && user.userPwd != "")
    }, [user])

    const handleButton = () => {
        alert(`로그인시도!
사용자 : ${user.userId}
기억하기 : ${chk ? "예" : "아니오"}
            `);
        setUser({
            userId: '',
            userPwd: ''
        })
    }

    return (
        <>
            <h1>로그인 폼</h1>
            <label htmlFor="userId">사용자명:</label>
            <input
                type="text"
                name="userId"
                value={user.userId}
                id="userId"
                onChange={(e) => { handleUser(e) }}
            />
            <br />
            <label htmlFor="userPwd">비밀번호:</label>
            <input
                type="password"
                name="userPwd"
                value={user.userPwd}
                id="userPwd"
                onChange={(e) => { handleUser(e) }}
            />
            <br />
            <input
                type="checkbox"
                name='chk'
                id='chk'
                checked={chk}
                onChange={() => setChk(!chk)}
            />
            <label htmlFor='chk'>로그인 상태 유지</label><br />
            {isOn ? <button onClick={handleButton}>로그인</button> : <button disabled>로그인</button>}
        </>
    )
}

export default Login

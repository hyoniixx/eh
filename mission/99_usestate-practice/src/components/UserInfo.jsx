import React, { useState } from 'react'

function UserInfo() {
    const [user, setUser] = useState({ userName: '김길동', userAge: 25, userEmail: 'hong@example.com' });
    const update = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    return (
        <>
            <label htmlFor="userName">이름:</label>
            <input
                type="text"
                name='userName'
                onChange={update}
                value={user.userName}
            />
            <label htmlFor="userAge">나이: </label>
            <input
                type="number"
                name='userAge'
                onChange={update}
                value={user.userAge}
            />
            <label htmlFor="userEmail">이메일: </label>
            <input
                type="email"
                name='userEmail'
                onChange={update}
                value={user.userEmail}
            />

            <h3>프로필</h3>
            <p>{`${user.userName} (${user.userAge}세)`}</p>
            <p>{`이메일: ${user.userEmail}`}</p>
        </>
    )
}

export default UserInfo

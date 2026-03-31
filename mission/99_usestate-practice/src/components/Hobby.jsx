import React, { useState } from 'react'
// const [hobby1, setHobby1] = useState(false);
// const [hobby2, setHobby2] = useState(false);
// const [hobby3, setHobby3] = useState(false);
// const [hobby4, setHobby4] = useState(false);
// const check1 = (e) => { setHobby1(e.target.checked); }
// const check2 = (e) => { setHobby2(e.target.checked); }
// const check3 = (e) => { setHobby3(e.target.checked); }
// const check4 = (e) => { setHobby4(e.target.checked); }

function Hobby() {
    const [hobby, setHobby] = useState([false, false, false, false]);
    const [hobbyList, setHobbyList] = useState(['', '', '', '']);

    const check = (e, id) => {
        // 1️⃣ hobby 상태 업데이트 (복사 후 변경)
        const newHobby = [...hobby];
        newHobby[id] = e.target.checked;
        setHobby(newHobby);

        // 2️⃣ hobbyList 새로 만들기
        const baseList = ['독서', '음악', '운동', '코딩'];

        const newList = newHobby.map((isChecked, index) =>
            isChecked ? baseList[index] : ''
        );

        setHobbyList(newList);
    };

    return (
        <>
            <input type="checkbox" onChange={(e) => check(e, 0)} />
            <label>독서</label>

            <input type="checkbox" onChange={(e) => check(e, 1)} />
            <label>음악</label>

            <input type="checkbox" onChange={(e) => check(e, 2)} />
            <label>운동</label>

            <input type="checkbox" onChange={(e) => check(e, 3)} />
            <label>코딩</label>

            <p>{hobbyList.join(' ')}</p>
        </>
    );
}

export default Hobby

/*https://school.programmers.co.kr/learn/courses/30/lessons/389478?language=javascript*/
function solution(n, w, num) {
    var answer = 0;
    const h = Math.ceil(num / w); //목표박스의 높이
    var col = (h % 2 === 1) ? (num - 1) % w : (w - num % w) % w; //목표박스의 열번호
    var allCol = [];
    const th = Math.floor(n / w); //전체 박스 구조 중 낮은 단의 높이
    if (th % 2 === 0) {// ---->
        for (let i = 0; i < w; i++) {
            if (i < n % w) { allCol[i] = th + 1 }
            else { allCol[i] = th };
        }
    } else {
        for (let i = 0; i < w; i++) {
            if (i < w - n % w) { allCol[i] = th }
            else { allCol[i] = th + 1 };
        }
    }
    // console.log(allCol);
    // console.log(h, col);
    answer = allCol[col] - h + 1;
    return answer;
}
console.log(solution(13, 3, 6));
function solution(array, n) {
    return array.filter(v => v === n).length;
}

//     let cnt = 0;
//     for (let i of array) {
//         if (i === n) {cnt++}
//     }
//     return cnt;

// 배열 요소 순회 for of
// 객체 요소 순회 for in
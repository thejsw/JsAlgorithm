function solution(array, n) {
    return array.filter(v => v === n).length;
}
//     let cnt = 0;
//     for (let i=0; i<array.length; i++) {
//         if (array[i] === n) {cnt++}
//     }
//     return cnt;
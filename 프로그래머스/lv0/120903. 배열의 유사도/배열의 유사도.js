function solution(s1, s2) {
    return intersection = s1.filter((v) => s2.includes(v)).length;
}

// function solution(s1, s2) {
//     let cnt = 0
//     for (let i of s1) {
//         for (let j of s2) {
//             if (i === j) {
//                 cnt++
//             }}
//     }
//     return cnt
// }
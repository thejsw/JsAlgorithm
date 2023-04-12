function solution(array, height) {
    return array.filter(el => el > height).length
}

// let cnt = 0
//     for (let el of array) {
//         if (el > height) {
//             cnt++
//         }
//     }
//     return cnt
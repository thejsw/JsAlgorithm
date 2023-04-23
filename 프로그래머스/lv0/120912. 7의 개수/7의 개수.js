function solution(array) {
    let cnt = 0
    array.join().split('').forEach((el) => {
        if (el === '7') {
            cnt++
        }
    })
    return cnt
    
    //     .reduce((acc, cur) => {
    //     if (array.includes('7')) {
    //         acc++
    //     }
    // }, 0)
    // return acc
}
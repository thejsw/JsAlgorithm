function solution(array, height) {
    let cnt = 0
    for (let el of array) {
        if (el > height) {
            cnt++
        }
    }
    return cnt
}
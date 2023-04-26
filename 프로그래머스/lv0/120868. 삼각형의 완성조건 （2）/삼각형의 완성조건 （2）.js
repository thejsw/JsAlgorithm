function solution(sides) {
    let maxNum = Math.max(...sides)
    let minNum = Math.min(...sides)
    let result1 = 0
    let result2 = 0
    
    for(let i=0; i<=maxNum; i++) {
        if (i> maxNum - minNum) {
            result1++
        }
    }
    for(let i=maxNum+1; i< minNum + maxNum; i++) {
        // if (i> maxNum - minNum) {
            result2++
        // }
    }
    return result1 + result2
}

// [3, 6]
// 가장 긴 변이 6인 경우 > 4, 5, 6 >> 6보다 작거나 같고, 두 개의 차보다 커야함
// 나머지 한 변이 가장 긴 변인 경우 > 7, 8 >> 6보다 크고, 두 개의 합보다 작음
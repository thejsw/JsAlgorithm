function solution(sides) {
    let maxNum = Math.max(...sides)
    let minNum = Math.min(...sides)
    let cnt = 0
    
    for(let i=maxNum - minNum + 1; i<=maxNum; i++) {
        cnt++
    }
    for(let i=maxNum + 1; i<minNum + maxNum; i++) {
        cnt++
    }
    return cnt
}

// [3, 6]
// 가장 긴 변이 6인 경우 > 4, 5, 6 >> 6보다 작거나 같고, 두 개의 차보다 커야함
// 나머지 한 변이 가장 긴 변인 경우 > 7, 8 >> 6보다 크고, 두 개의 합보다 작음
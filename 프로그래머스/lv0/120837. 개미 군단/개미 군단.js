function solution(hp) {
    let a, b, c
    [a, b, c] = [Math.floor(hp / 5), Math.floor((hp % 5) / 3), Math.floor((hp % 5) % 3)]
    return [a, b, c].reduce((arr,cur) => arr += cur, 0)
}

// return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor((hp % 5) % 3)

// 몫만 리턴
// 1. 5로 나눈 몫 저장
// 2. 3으로 나눈 몫 저장
// 3. 나머지 저장
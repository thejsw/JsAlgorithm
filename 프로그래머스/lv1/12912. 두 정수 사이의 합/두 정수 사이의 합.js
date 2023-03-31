function solution(a, b) {
    let big = Math.max(a, b)
    let small = Math.min(a, b)
    let result = 0
    

    if (big === small) {
        return small
    }
    else {
        for (let i=small; i<=big; i++) {
            result += i
        }
    } return result
}
function solution(s) {
    newArr = s.split(' ').map(v => Number(v))
    let max = Math.max(...newArr)
    let min = Math.min(...newArr)
    return `${min} ${max}`
}
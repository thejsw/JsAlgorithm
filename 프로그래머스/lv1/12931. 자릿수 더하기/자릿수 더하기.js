function solution(n){
    return String(n).split('')
        .map(v => Number(v))
        .reduce((arr,cur) => arr += cur, 0)
}
function solution(a, b) {
    let s = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
}
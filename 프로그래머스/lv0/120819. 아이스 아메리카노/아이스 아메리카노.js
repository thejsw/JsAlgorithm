function solution(money) {
    let n1 = Math.floor(money / 5500)
    let n2 = money % 5500
    let result = [n1, n2]
    return result;
}
function solution(order) {
    let newArr = String(order).split('')
    return newArr.filter(v => v === "3" || v === "6" || v === "9").length
}
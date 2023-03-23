function solution(order) {
    let cnt = 0
    let newArr = String(order).split('')
    newArr.map(v => {
        if (v % 3 === 0 && v != 0) {
            cnt ++
        }
    })
    return cnt;
}
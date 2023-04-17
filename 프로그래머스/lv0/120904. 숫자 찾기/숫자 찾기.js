function solution(num, k) {
    let newArr = String(num).split('')
    k = String(k)
    return (newArr.includes(k)) ? newArr.indexOf(k)+1 : -1
}
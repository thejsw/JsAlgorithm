function solution(my_string) {
    let newArr = []
    for (let v of my_string) {
        if (!newArr.includes(v)) { newArr.push(v) }
    }
    return newArr.join('')
}
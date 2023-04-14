function solution(my_string) {
    const newArr = []
    for (let v of my_string) {
        if (!newArr.includes(v)) { newArr.push(v) }
    }
    return newArr.join('')
}

// ...filter((el, idx) => ...indexOf(el) === idx)
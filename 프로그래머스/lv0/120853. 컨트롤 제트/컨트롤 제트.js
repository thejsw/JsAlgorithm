function solution(s) {
    s = s.split(' ')
    let idxArr = []
    let result = []
    
    s.filter((el, idx) => {
        if (el === 'Z') {
            idxArr.push(idx-1)
        }
    })
    
    s.forEach((el, idx) => {
        if (!idxArr.includes(idx)) {
            result.push(el)
        }
    })
    
    return result.filter((el) => Number(el)).map((el) => Number(el)).reduce((acc, cur) => acc += cur, 0)
    
}
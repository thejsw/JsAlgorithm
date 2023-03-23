function solution(age) {
    let newArr = String(age).split('')
    .map(v => Number(v) + 97)
    .map(v => String.fromCodePoint(v))
    
    let result = ''
    newArr.map(v => result += v)
    return result
}

// 한 자리씩 나누기 V
// +97 V
// 아스키코드로 바꾸기 V
// 합쳐서 리턴 V
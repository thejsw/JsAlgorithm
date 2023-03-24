function solution(age) {
    return String(age).split('')
    .map(v => Number(v) + 97)
    .map(v => String.fromCodePoint(v))
    .join('')
    
    // return newArr
    // let result = ''
    // newArr.map(v => result += v)
    // return result
    // return newArr.reduce((arr, cur) => {cur}, '')
}

// 한 자리씩 나누기 V
// +97 V
// 아스키코드로 바꾸기 V
// 합쳐서 리턴 V
function solution(rny_string) {
    let newStr = ''
    rny_string.split('').map((v) => {
        if ( v === 'm') { return newStr += 'rn'}
        else { newStr += v }
    })
    return newStr
}
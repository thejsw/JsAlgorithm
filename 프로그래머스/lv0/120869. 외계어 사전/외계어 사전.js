function solution(spell, dic) {
    let result = 2;
    for (let v of dic) {
        if (spell.sort().join('') === v.split('').sort().join('')) {
            result = 1
            break
        }
    }
    return result
}
    
// 이중 for
// spell.sort().join('') === v > 탈출

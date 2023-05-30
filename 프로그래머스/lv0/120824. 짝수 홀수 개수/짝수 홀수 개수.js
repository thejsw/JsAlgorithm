function solution(num_list) {
    let 홀 = 0
    let 짝 = 0
    num_list.forEach(v => {
        if(v % 2 === 1) {
            홀 += 1
        }
        else {
            짝 += 1
        }
    })
    return [짝, 홀]
}
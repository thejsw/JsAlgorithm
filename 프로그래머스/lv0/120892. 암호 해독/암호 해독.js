function solution(cipher, code) {
    return [...cipher].filter((v, i) => (i+1) % code === 0).join('')
}

// let result = ''
//     for(let i=1; i<=cipher.length; i++) {
//         if (i % code === 0) {
//             result += cipher[i-1]
//         }
//     }
//     return result

function solution(before, after) {
    return (before.split('').sort().join('') === after.split('').sort().join('')) ? 1 : 0
}

// return (before.split('').reverse().join('') === after) ? 1 : 0
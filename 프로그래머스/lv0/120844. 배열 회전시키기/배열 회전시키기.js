function solution(numbers, direction) {
    (direction === 'right')
        ? numbers.unshift(numbers.pop())
        : numbers.push(numbers.shift())
    return numbers
}

// shift: 첫 번째 요소 제거, 반환
// pop:   마지막 요소 제거, 반환

// unshift : 첫 번째 삽입, 길이 반환
// push : 마지막 삽입, 길이 반환
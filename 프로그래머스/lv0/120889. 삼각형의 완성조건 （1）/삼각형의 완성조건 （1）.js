function solution(sides) {
  sides = sides.sort((a, b) => b - a);
  return (sides[0] < sides[1] + sides[2]) ? 1 : 2;
}

// 입력: 배열 > 선분 세 개 [1, 2, 3]
// 1. 가장 큰 값을 정한다 > sort로 정렬하기 > 배열 [0] 가장 큰 값이
// 2. (가장 큰 값이 나머지 둘의 합보다) 작으면 1 아니면 2
// 출력: 1 또는 2


// function solution(sides) {
//     let max = Math.max(...sides);
//     let newArr = sides.filter(v => v !== max && sides.length > 2);
//     // return newArr
//     return (max < newArr[0] + newArr[1]) ? 1 : 2;
// }
function solution(sides) {
  sides = sides.sort((a, b) => b - a);
  return sides[0] < sides[1] + sides[2] ? 1 : 2;

}
// function solution(sides) {
//     let max = Math.max(...sides);
//     let newArr = sides.filter(v => v !== max);
//     return (max < newArr[0] + newArr[1]) ? 1 : 2;
// }
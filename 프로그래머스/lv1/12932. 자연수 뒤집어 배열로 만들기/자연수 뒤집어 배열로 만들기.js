function solution(n) {
  let result = [];
  while(n > 0) {
    result.push(n % 10); // n의 일의 자리 숫자를 결과 배열에 추가
    n = Math.floor(n / 10); // n을 10으로 나눈 몫을 다시 n으로 할당
  }
  return result;
}
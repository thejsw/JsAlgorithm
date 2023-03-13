function solution(slice, n) {
    let answer = Math.floor(n / slice);
    if (n % slice !== 0) {
        answer += 1;
    }
    return answer;
}

// 1. n / slice로 몫 구하기 > Math.floor는 소숫점 제거
// 2. n % slice !== 0 일 경우, 몫에 1판 추가
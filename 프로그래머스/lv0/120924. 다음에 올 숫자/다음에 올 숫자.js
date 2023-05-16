function solution(common) {
    return (common[1] - common[0] === common[2] - common[1]) 
        ? common[common.length - 1] + (common[1] - common[0])
        : common[common.length - 1] * (common[1] / common[0])
}

// 1. 등차수열인지 등비수열인지 확인 > 1번 값 - 0번 값 === 2번 값 - 1번 값
// 2. 등차일 경우, 마지막 인덱스에 공차 더함
// 3. 등비일 경우, 마지막 인덱스에 공비 곱함
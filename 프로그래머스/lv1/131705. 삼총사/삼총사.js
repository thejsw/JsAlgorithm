function solution(number) {
    let result = 0;
    for(let i = 0, length = number.length; i < length; i++) {
        for(let j = i+1; j < length; j++) {
            for(let k = j+1; k < length; k++) {
                if(number[i]+number[j]+number[k]) continue;
                result++;
            }
        }
    }
    return result;
}
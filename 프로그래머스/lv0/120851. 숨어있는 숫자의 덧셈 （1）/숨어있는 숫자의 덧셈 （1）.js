function solution(my_string) {
    return my_string.split('')
        .map(el => Number(el))
        .filter(el => Boolean(el) === true)
        .reduce((arr,cur) => arr += cur, 0)
}
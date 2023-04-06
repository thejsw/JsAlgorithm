function solution(my_string) {
    return my_string.split('')
        .map(v => {
        return (v === v.toUpperCase() === false) ? v.toUpperCase() : v.toLowerCase()
    })
        .join('')
}
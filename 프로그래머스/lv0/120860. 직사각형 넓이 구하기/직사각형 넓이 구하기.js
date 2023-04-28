function solution(dots) {
    const x = Math.max(...dots.map(v => v[0])) - Math.min(...dots.map(v => v[0]))
    const y = Math.max(...dots.map(v => v[1])) - Math.min(...dots.map(v => v[1]))
    return x * y
}
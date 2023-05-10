function solution(score) {
  	let avgArray = score.map( v => (v[0] + v[1]) / 2);
    let sorted = avgArray.slice().sort( (a, b) => b - a);
    return avgArray.map(v => sorted.indexOf(v) + 1);
}
function solution(id_pw, db) {
    let result = db.filter((v) => v[0] === id_pw[0])
    return (result.length <= 0) 
        ? "fail"
        : (result[0][1] === id_pw[1]) ? "login" : "wrong pw"
}
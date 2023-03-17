function solution(dot) {
    return (dot[0] > 0) ? 
        (dot[1] > 0) ? 1 : 4 
    : (dot[1] > 0) ? 2 : 3;
}
    
//     if (dot[0] > 0) {
//         if (dot[1] > 0) {return 1}
//         return 4
//     }
//     else {
//         if (dot[1] > 0) {return 2}
//         return 3;
//     }

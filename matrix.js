let r = 3;
let c = 3;
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var matrix2 = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3]
];
for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        sum=matrix[i][j]+matrix2[i][j];
        console.log(sum);
    }
}

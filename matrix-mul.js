// var r=3;
// var col=3;

// const a=[[1,2,3],[4,5,6],[7,8,9]];
// const b=[[9,8,7],[6,5,4],[3,2,1]];
// const c=[[],[],[]];

// for(let i=0;i<r;i++)
//     {
//         for(let j=0;j<col;j++)
//             {
//                 c[i][j]=0;
//                 for(let k=0;k<col;k++)
//                     {
//                         c[i][j]=c[i][j]+a[i][k]*b[k][j];
//                     }
//             }
//     }

//     console.log(c);

/*-----------------------------------------------------------------------*/
// var r=2;
// var col=2;

// const a=[[1,2],[5,6]];
// const b=[[9,7],[6,4]];
// const c=[[0,0],[0,0]];

// for(let i=0;i<r;i++)
//     {
//         for(let j=0;j<col;j++)
//             {
                
//                 for(let k=0;k<col;k++)
//                     {
//                         c[i][j]=c[i][j]+a[i][k]*b[k][j];
//                     }
//             }
//     }

//     console.log(c);

/*-----------------------------------------------------------------------------*/

var r=2;
var cl=2;

const a=[[1,2],[3,4]];
const b=[[5,6],[7,8]];
const c=[[0,0],[0,0]];

for(let i=0;i<r;i++){
    for(let j=0;j<cl;j++){
        c[i][j]=a[i][j]+b[i][j];
    }
}
console.log(c);
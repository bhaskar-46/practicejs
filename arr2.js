var nam="this is my first program";
var res=arr(nam);
console.log(res);
var nam2="hii";
var res2=arr2(nam,nam2);
console.log("compare - ",res2);
function arr(nam)
{
    return nam.split(" ");
}

function arr2(nam,nam2){
    if(nam.match(nam2))
    {
        return true;
    }
    else
    {
        return false;
    }
}

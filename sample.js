function all(x,y)
{
    if(y<=x)
    {
        console.log(y);
        y++;
        all(x,y);
    }
}

let x=10,y=1;
all(x,y);

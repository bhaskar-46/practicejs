const userData = {
    "name":"ram",
    "age":"19",
    "village":"vij",
    "mob":[1234567,4534464645],
    "add": {
        "city": "dub",
        "state": "and",

    }
};
console.log("print specific data");
console.log(userData.add.city);
console.log("print all data");
console.log(userData);



for (a in userData) {
 
    console.log(userData[a]);
}

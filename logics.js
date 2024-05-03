let readin = require('readline');

const rl = readin.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a string: ", function(string) {
    let result = palin(string);
    console.log("Is palindrome:", result);
    rl.close();
});

function palin(string) {
    let len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - i - 1]) {
            return false;
        }
    }
    return true;
}

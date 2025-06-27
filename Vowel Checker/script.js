let val = prompt("Please enter a value");
console.log("The given input is = ", val);

function vowelChecker(val) {
    let count = 0;
    for (const char of val) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            console.log(`The Vowels are ${count} = ${char}`);
            count++;
        }
    }
    console.log("The numbers of Vowels are = ", count);
}

vowelChecker(val);
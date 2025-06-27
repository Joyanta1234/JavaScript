let val = prompt("Please Enter your text :");

console.log(`Your input text is = ${val}`);

function vowelChecker(val) {
    let count = 0;
    for (const char of val) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
            console.log(`The ${count}'th vowel is = ${char}`);
            count++
        }
    }
    console.log(`The numbers of Vowels are = ${count}`);
}

vowelChecker(val);
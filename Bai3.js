let input = "tHE qUICK bROWN fOX";
let resultArr = [];

for (let i = 0; i < input.length; i++) {
    let ch = input[i];

    // Nếu là ký tự đầu tiên hoặc sau dấu cách
    if (i === 0 || input[i - 1] === " ") {
        resultArr.push(ch.toUpperCase());
    } else {
        resultArr.push(ch.toLowerCase());
    }
}

let result = resultArr.join("");
console.log(result);


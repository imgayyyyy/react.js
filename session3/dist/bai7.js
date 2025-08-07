"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let input = "banana";
function removeDuplicates(str) {
    let result = "";
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}
let output = removeDuplicates(input);
console.log("Input: " + input);
console.log("Output: " + output);
//# sourceMappingURL=bai7.js.map
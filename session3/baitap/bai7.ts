let input: string = "banana"; 
function removeDuplicates(str: string): string {
    let result: string = "";
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}

let output: string = removeDuplicates(input);
console.log("Input: " + input);
console.log("Output: " + output);
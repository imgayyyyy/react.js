"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "john";
let lastName = "doe";
if (firstName.length > 0) {
    const firstChar = firstName.charAt(0);
    if (firstChar !== firstChar.toUpperCase()) {
        firstName = firstChar.toUpperCase() + firstName.slice(1);
    }
}
else {
    firstName = "";
}
if (lastName.length > 0) {
    const lastChar = lastName.charAt(0);
    if (lastChar !== lastChar.toUpperCase()) {
        lastName = lastChar.toUpperCase() + lastName.slice(1);
    }
}
else {
    lastName = "";
}
let fullName = firstName + (firstName && lastName ? " " : "") + lastName;
console.log(fullName);
//# sourceMappingURL=bai5.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericTest(el1, el2) {
    return { ...el1, ...el2 };
}
const a = { name: "Hieu" };
const b = { age: 20 };
const merged = genericTest(a, b);
console.log(merged.name);
console.log(merged.age);
//# sourceMappingURL=baitap4.js.map
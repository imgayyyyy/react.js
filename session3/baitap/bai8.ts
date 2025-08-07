function toNumber(value: number | string): number | string {
    if (typeof value === "string") {
        const num = Number(value);
        return isNaN(num) ? "Không hợp lệ" : num;
    }
    return value;
}

function add(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === "Không hợp lệ" || numB === "Không hợp lệ") {
        return "Không hợp lệ";
    }
    return Number(numA) + Number(numB);
}

function subtract(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === "Không hợp lệ" || numB === "Không hợp lệ") {
        return "Không hợp lệ";
    }
    return Number(numA) - Number(numB);
}

function multiply(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === "Không hợp lệ" || numB === "Không hợp lệ") {
        return "Không hợp lệ";
    }
    return Number(numA) * Number(numB);
}

function divide(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === "Không hợp lệ" || numB === "Không hợp lệ") {
        return "Không hợp lệ";
    }
    if (Number(numB) === 0) {
        return "Không hợp lệ (Chia cho 0)";
    }
    return Number(numA) / Number(numB);
}

console.log("Cộng: ", add(5, 3));              // Kết quả: 8
console.log("Cộng: ", add("5", "3"));          // Kết quả: 8
console.log("Cộng: ", add("5a", "3"));         // Kết quả: Không hợp lệ
console.log("Trừ: ", subtract(10, 4));         // Kết quả: 6
console.log("Trừ: ", subtract("10", "4"));     // Kết quả: 6
console.log("Trừ: ", subtract("10a", "4"));    // Kết quả: Không hợp lệ
console.log("Nhân: ", multiply(2, 3));         // Kết quả: 6
console.log("Nhân: ", multiply("2", "3"));     // Kết quả: 6
console.log("Nhân: ", multiply("2a", "3"));    // Kết quả: Không hợp lệ
console.log("Chia: ", divide(10, 2));          // Kết quả: 5
console.log("Chia: ", divide("10", "2"));      // Kết quả: 5
console.log("Chia: ", divide("10a", "2"));     // Kết quả: Không hợp lệ
console.log("Chia: ", divide(10, 0));          // Kết quả: Không hợp lệ (Chia cho 0)
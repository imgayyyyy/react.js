function sum(arr) {
    let total = 0;

    for (let num of arr) {
        if (typeof num === "number" && num % 2 === 0) {
            total += num;
        }
    }

    return total;
}
console.log(sum([1, 2, 3, 4, 5, 6]));

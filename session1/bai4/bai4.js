function checkParity(a) {
    if (typeof a !== 'number') {
        return "a not is number";
    } else {
        if (a % 2 === 0) {
            return a + " is an even number";
        } else {
            return a + " is odd";
        }
    }
}
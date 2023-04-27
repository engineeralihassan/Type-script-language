function getAdd(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(typeof getAdd('ali', 23));
console.log(typeof getAdd('ali', 'hassan'));
console.log(getAdd(25, 23));
console.log(getAdd('ali', 23));

export function getUniqueRandomElements(array, n) {
    if (n > array.length) {
        throw new Error("n cannot be larger than the array length");
    }
    const shuffled = array.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
}

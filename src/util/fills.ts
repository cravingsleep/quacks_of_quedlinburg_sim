/**
 * Counts how many members of the array match the predicate.
 */
function count<T>(arr: T[], predicate: (t: T) => boolean) {
    return arr.filter(predicate).length;
}

/**
 * Chooses a random member from an array.
 */
function choose<T>(arr: T[]): T {
    return arr[Math.floor(arr.length * Math.random())];
}

/**
 * Generates a range of numbers.
 */
function range(upto: number): number[] {
    return [...Array(upto).keys()];
}

export { count, choose, range };

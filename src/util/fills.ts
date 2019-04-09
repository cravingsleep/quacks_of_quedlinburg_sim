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
 * Returns the tail of an array.
 */
function tail<T>(arr: T[]): T[] {
    return arr.slice(1, arr.length);
}

/**
 * Rolls a random dice.
 */
function randDiceRoll(): number {
    return Math.round(Math.random() * 6);
}

/**
 * Finds the max item in an array given a predicate.
 */
function maxBy<T>(arr: T[], predicate: (t: T) => number) {
    return arr.reduce((currentMax, n) => {
        return predicate(n) > predicate(currentMax) ? n : currentMax;
    }, arr[0]);
}

export { count, choose, tail, randDiceRoll, maxBy };

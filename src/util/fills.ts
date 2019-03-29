function count<T>(arr: T[], predicate: (t: T) => boolean) {
    return arr.filter(predicate).length;
}

export default count;

export const sum = (arr: number[]) => arr.reduce((total, value) => total + value, 0);

export const sumRecursive = (arr: number[]) => {
    if (arr.length === 0) return 0;
    const [current, ...rest] = arr;
    return current + sumRecursive(rest);
}

export const sumRecursiveWithInitial = (arr: number[], current = 0) => {
    if (arr.length === 0) return current;
    const [num, ...rest] = arr;
    return sumRecursiveWithInitial(rest, num + current);
}

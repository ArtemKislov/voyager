export const linearSearch = <T>(arr: T[], value: T) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1;
}

export const find = <T>(arr: T[], fn: (value: T) => boolean) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) return arr[i]
    }
    return null
}

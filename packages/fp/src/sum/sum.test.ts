import {sum, sumRecursive, sumRecursiveWithInitial} from "./sum";

test('Summarize', () => {
    const numbers1 = [0, 1, 2, 3, 4, 5]
    expect(sum(numbers1)).toBe(15)

    const numbers2 = [0, -1, -2, -3, -4, -5]
    expect(sum(numbers2)).toBe(-15)
})

test('Sum recursive', () => {
    const numbers = [0, 1, 2, 3, 4, 5]
    expect(sumRecursive(numbers)).toBe(15)
})

test('Sum recursive', () => {
    const numbers = [0, 1, 2, 3, 4, 5]
    expect(sumRecursiveWithInitial(numbers)).toBe(15)
    expect(sumRecursiveWithInitial(numbers, 5)).toBe(20)
})

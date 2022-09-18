import { binarySearchIterative } from './binary';

describe('Binary search', () => {
    test('it should return -1 if no element for numbers', () => {
        const numbers = [1, 2, 5, 8, 35, 148, 149, 256];
        expect(binarySearchIterative(numbers, 0)).toBe(-1)
    })
    test('it should return -1 if no element for strings', () => {
        const strings = ['a', 'b', 'c', 'd'];
        expect(binarySearchIterative(strings, 'e')).toBe(-1)
    })
    test('it should return correct index of element for even length array of numbers', () => {
        const numbers = [1, 2, 5, 8, 35, 148, 149, 256];
        expect(binarySearchIterative(numbers, 35)).toBe(4)
    })
    test('it should return correct index of element for even length array of strings', () => {
        const strings = ['a', 'b', 'c', 'd'];
        expect(binarySearchIterative(strings, 'a')).toBe(0)
    })
    test('it should return any index if array full of identical elements', () => {
        expect(binarySearchIterative([0,0,0,0], 0)).not.toBe(-1)
        expect(binarySearchIterative(['a', 'a', 'a'], 'a')).not.toBe(-1)
    })
    test('it should return correct index of element for odd length array of numbers', () => {
        const numbers = [1, 2, 5, 8, 35, 148, 149];
        expect(binarySearchIterative(numbers, 149)).toBe(6)
        expect(binarySearchIterative(numbers, 148)).toBe(5)
    })

    test('it should return correct index of element for odd length array of strings', () => {
        const strings = ['a', 'b', 'c', 'd']
        expect(binarySearchIterative(strings, 'a')).toBe(0)
        expect(binarySearchIterative(strings, 'd')).toBe(3)
    })
})
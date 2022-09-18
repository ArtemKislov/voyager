import {converge} from "./converge";

describe('Converge', () => {
    test('Should create converge 1', () => {
        const average = converge((sum: number, count) => sum / count, [
            elements => elements.reduce((total, num) => total + num, 0),
            elements => elements.length
        ])
        expect(average([1,2,3,4,5])).toBe(3)
    })

    test('Should create converge 2', () => {
        const countLettersInformer = converge((message: string, count: number) => `${message} - ${count} letters`, [
            string => string.trim().toLowerCase().replace(/\s\s+/g, ' '),
            string => string.replace(/\s/g, '').split('').length,
        ])
        expect(countLettersInformer('One Two Three Four')).toBe('one two three four - 15 letters')
    })
})
import {linearSearch, find} from './linear';

test('Linear search', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    expect(linearSearch(array, 10)).toBe(-1);
    expect(linearSearch(array, 1)).toBe(0);
    expect(linearSearch(array, 0)).toBe(9);
    expect(linearSearch(array, 5)).toBe(4);
})

test('Linear find', () => {
    const arrayPrimitives = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const arrayObjects = [
        { id: '1', value: 'a' },
        { id: '2', value: 'b' },
        { id: '3', value: 'c' },
        { id: '4', value: 'd' },
    ];
    expect(find(arrayPrimitives, (v) => v === 1)).toBe(1);
    expect(find(arrayPrimitives, (v) => v === 10)).toBeNull();
    expect(find(arrayObjects, (v) => v.id === '1')).toStrictEqual({ id: '1', value: 'a' });
    expect(find(arrayObjects, (v) => v.id === '5')).toBeNull();
})

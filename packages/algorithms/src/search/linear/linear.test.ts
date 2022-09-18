import linearSearch from './linear';

test('Linear search', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    expect(linearSearch(array, 5)).toBe(4);
    expect(linearSearch(array, 10)).toBe(-1);
})

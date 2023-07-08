import { LinkedList } from './linkedList';

test('LinkedList', () => {
    const linkedList = new LinkedList([1,2,3]);
    expect(linkedList.getSize()).toBe(3);
})

test('LinkedList collect', () => {
    const linkedList = new LinkedList([1,2,3]);
    expect(linkedList.collect()).toStrictEqual([1,2,3]);
})

test('LinkedList add', () => {
    const linkedList = new LinkedList();
    expect(linkedList.getSize()).toBe(0);
    linkedList.add(5);
    expect(linkedList.getSize()).toBe(1);
})

test('LinkedList insertAt', () => {
    const linkedList = new LinkedList([]);
    linkedList.insertAt(0, 1);
    expect(linkedList.collect()).toStrictEqual([1]);
    linkedList.insertAt(0, 0);
    expect(linkedList.collect()).toStrictEqual([0,1]);
})

test('LinkedList remove', () => {
    const linkedList = new LinkedList([1,2,3,4,5]);
    linkedList.removeFrom(0);
    expect(linkedList.collect()).toStrictEqual([2,3,4,5]);
    linkedList.removeFrom(3);
    expect(linkedList.collect()).toStrictEqual([2,3,4]);
    linkedList.removeFrom(1);
    expect(linkedList.collect()).toStrictEqual([2,4]);
    linkedList.removeFrom(0);
    linkedList.removeFrom(0);
    expect(linkedList.collect()).toStrictEqual([]);
})

test('LinkedList indexOf', () => {
    const linkedListEmpty = new LinkedList([]);
    expect(linkedListEmpty.indexOf(3)).toStrictEqual(null);

    const linkedList = new LinkedList([1,2,3,4,5]);
    expect(linkedList.indexOf(3)).toStrictEqual(2);

    const linkedListNoValue = new LinkedList([1,2,3,4,5]);
    expect(linkedList.indexOf(0)).toStrictEqual(null);
})

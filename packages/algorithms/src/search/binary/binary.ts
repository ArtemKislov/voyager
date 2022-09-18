export const binarySearchIterative = <T>(arr: T[], element: T) => {
    let lowIdx = 0;
    let highIdx = arr.length - 1;
    while (lowIdx !== highIdx) {
        let midIdx = Math.floor((lowIdx + highIdx) / 2);
        if (arr[midIdx] === element) return midIdx;
        if (arr[midIdx] < element) {
            lowIdx = midIdx + 1
        } else {
            highIdx = midIdx - 1
        }
    }
    return arr[lowIdx] === element ? lowIdx : -1
}
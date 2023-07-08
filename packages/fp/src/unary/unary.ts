export const unary = fn => val => fn(val);

['6', '8', '10'].map(unary(parseInt)); // [6, 8, 10]
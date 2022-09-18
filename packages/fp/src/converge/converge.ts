// TODO improve types
export const converge = <T>(converger: (...args: T[]) => any, fns: ((...args: any[]) => any)[]) =>
    (...args) => converger(...fns.map(fn => fn.apply(null, args)))
// Function composition enabling pipe functionality
// eslint-disable-next-line
export const pipe = (...functions: Function[]) => (input: any) =>
    functions.reduce((acc, fn) => fn(acc), input);

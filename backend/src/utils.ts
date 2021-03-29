// Function composition enabling pipe functionality
export const pipe = (...functions: Function[]) => (input: any) =>
    functions.reduce((acc, fn) => fn(acc), input);

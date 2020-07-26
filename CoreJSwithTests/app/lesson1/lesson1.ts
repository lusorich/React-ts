export function sum(a: number, b: number): number {
    return a + b;
}

export function sum2(...items: Array<number>): number {
    if (!items.every(isFinite)) {
        throw new Error('NaN');
    }

    return items.reduce((acc: number, elem: number) => {
        return acc + elem;
    });
}

export const filterArrayBy3 = (...items: Array<number>): Array<number> => {
    if (!items.every(isFinite)) {
        throw new Error('NaN');
    }

    return items.map(i => i + 5).filter(elem => elem % 3 === 0);
}
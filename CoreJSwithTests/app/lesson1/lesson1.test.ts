import { sum, sum2, filterArrayBy3 } from './lesson1';

describe('Function Sum', () => {
    it('Sum should be defined', () => {
        expect(sum).toBeDefined();
    })
})

describe('Function Sum2', () => {
    it('Sum should be defined', () => {
        expect(sum2).toBeDefined();
    })

    it('NaN', () => {
        expect(() => sum2(NaN, 5)).toThrowError('NaN');
    })
})

describe('filterArrayby3', () => {
    it('filterArrayBy3 shoud be defined', () => {
        expect(filterArrayBy3).toBeDefined();
    })

    it('should return array', () => {
        const res = filterArrayBy3(1, 10, 18);
        expect(Array.isArray(res)).toBeTruthy();
    })

    it('should return error', () => {
        expect(() => filterArrayBy3(NaN, NaN, null)).toThrowError();
    })

    it('should return valid value', () => {
        expect(filterArrayBy3(1, 4, 10, 18, 30, 33)).toEqual([6, 9, 15]);
    })
})
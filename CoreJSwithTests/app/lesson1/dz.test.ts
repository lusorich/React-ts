import { addOldToObject, changeTaskStatusById, fuzzBuzz, getDoneTask, startArray, optionsArray} from "./dz";

describe('home work', () => {

    describe('task1', () => {
        test('fuzzBuzz should be defined', () => {
            expect(fuzzBuzz).toBeDefined();
        });
        test('Should be Fuzz(even number)', () => {
            expect(fuzzBuzz(-4, optionsArray)).toEqual('Fuzz');
        });
        test('Should be Buzz(% 3)', () => {
            expect(fuzzBuzz(9, optionsArray)).toEqual('Buzz');
        });
        test('Should be FuzzBuzz(% 3 and % 2)', () => {
            expect(fuzzBuzz(6, optionsArray)).toEqual('FuzzBuzz');
        });
        test('Should be FuzzFiveTen(% 2, % 5, % 10)', () => {
            expect(fuzzBuzz(10, optionsArray)).toEqual('FuzzFiveTen');
        });
    })

    describe('task2', () => {
        it('addOldToObject should be defined', () => {
            expect(addOldToObject).toBeDefined();
        })
        it('Should be yang', () => {
            expect(addOldToObject(startArray)[3].yearsOld).toEqual('yang');
        })
        it('Should be adult', () => {
            expect(addOldToObject(startArray)[1].yearsOld).toEqual('adult');
        })
        it('Should be old', () => {
            expect(addOldToObject(startArray)[0].yearsOld).toEqual('old');
        })
    })

    describe('task3', () => {
        it('getDoneTask should be defined', () => {
            expect(getDoneTask).toBeDefined();
        })

    })

    describe('task4', () => {
        it('changeTaskStatusById should be defined', () => {
            expect(changeTaskStatusById).toBeDefined();
        })

    })
});

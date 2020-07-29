//Написать тесты и разработать функцианал для следущих задач:


//1. Функция принимает число как параметр и должна возвращать следующие значения:
// 'Fuzz' если число кратно 2,
// 'Buzz' если число кратно 3
// 'FuzzBuzz' если число кратно и 2 и 3.
// * рассширить имплементацию функции: добавить возможность задавать параметры кратности;

interface Option {
    num: number,
    output: string
}

export const optionsArray: Array<Option> = [
    {
        num: 2,
        output: 'Fuzz'
    },
    {
        num: 3,
        output: 'Buzz'
    },
    {
        num: 5,
        output: 'Five'
    },
    {
        num: 10,
        output: 'Ten'
    }
]

export function fuzzBuzz(num: number, optionsArray: Array<Option>, result: string = '', iter: number = 0): string {
    if (!isFinite(num)) {
        throw new Error('Not good num')
    }
    if (iter === optionsArray.length) {
        return result;
    }
    if ((Math.abs(num) % optionsArray[iter].num) === 0) {
        return fuzzBuzz(num, optionsArray, result += optionsArray[iter].output, iter += 1);
    } else {
        return fuzzBuzz(num, optionsArray, result, iter += 1);
    }
}



// 2.
// Функция прнимает массив Man's и возвращает новый массив [{}, {}, {}],
// где проверяет возвраст каждого эелемента массива и
// в зависимости от него добавляет новое поле yearsOld
// со значениями из enum в текущий обьект в зависимотси от текущего значения
// age в элементе.

enum YearsOldType {
    yang = 'yang', // младше 18
    adult = 'adult', // 18 - 60
    old = 'old', // старше 60
}

interface Man {
    name: string;
    age: number;
    yearsOld?: YearsOldType
}

export const startArray: Array<Man> = [
    {
        name: 'Vlad',
        age: 87,
    },
    {
        name: 'Eugene',
        age: 55,
    },
    {
        name: 'Dima',
        age: 18,
    }
    , {
        name: 'Ira',
        age: 3,
    }
];

export function addOldToObject(people: Array<Man>) {
    return people.map((elem) => {
        if (elem.age < 18) {
            elem.yearsOld = YearsOldType.yang;
        }
        if (elem.age >= 18 && elem.age < 60) {
            elem.yearsOld = YearsOldType.adult;
        }
        if (elem.age >= 60) {
            elem.yearsOld = YearsOldType.old;
        }
        return elem;
    })
}

///////////////////////////////////////////////////////////
export enum filterType {
    all = 'all',
    done = 'done',
    progress = 'progress'
}
export interface TaskI {
    title: string,
    isDone: boolean,
    id: string,
}
export interface TodoListI {
    title: string,
    id: string,
    filter: filterType,
    tasksList: Array<TaskI>
}
export interface JournalI {
    title: string,
    id: string,
    todoLists: Array<TodoListI>
}
export const journal: JournalI = {
    title: 'first journal',
    id: '1cvlasd',
    todoLists: [
        {
            title: 'Learn React',
            id: '1a',
            filter: filterType.all,
            tasksList: [
                {
                    id: '1a',
                    isDone: false,
                    title: 'Learn hooks'
                },
                {
                    id: '2a',
                    isDone: true,
                    title: 'Learn useEffect'
                },
                {
                    id: '3a',
                    isDone: false,
                    title: 'Learn Redux'
                }
            ]
        },
    ]
};
///////////////////////////////////////////////////////////

//3. Функция должна вернуть [{task}, {task}] у которых поле isDone = true
export function getDoneTask(journal: JournalI): Array<TaskI> {
    const tasks: Array<TaskI> = journal.todoLists[0].tasksList;

    return tasks.filter((elem) => {
        return elem.isDone === true;
    })
}

//4. Функция должна поменять поле isDone в текущей таске по её id мутируя исходный обьект;
export function changeTaskStatusById(journal: JournalI, todoId: string, taskId: string) {
    if (todoId === journal.id) {
        journal.todoLists[0].tasksList.forEach((item) => {
            if (item.id === taskId) {
                item.isDone = !item.isDone;
            }
        })
    }
    return journal;
}
// * повторный вызов getDoneTask должен вернуть другой результат

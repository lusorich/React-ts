// @ts-ignore
console.log('lesson2');

////////// The helpful links about arrays
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://learn.javascript.ru/array
// https://learn.javascript.ru/array-methods
// https://metanit.com/web/javascript/5.3.php


// Task 01
// Создать массив. Получить последний элемент массива.
// 1. Без удаления этого элемента из массива.
// 2. С удалением этого элемента из массива
// Выведите массивы в консоль

// Task 02
// Добавить элемент в конец массива из Task 01.
// 1. Модифицировать текущий массив
// 2. Создать новый массив
// Выведите массивы в консоль


// Task 03
// Вставить новый элемент под индексом 3 в массив из Task 01.
// 1. Модифицировать текущий массив
// 2. Создать новый массив
// Выведите массивы в консоль

// Task 04
//  Обойти элементы массива из Task 01 и вывести их в консоль.

// Task 05
//  Создать массив чисел в диапазоне от 0 до 100.
//  Подсчитать и вывети сумму тех элементов, которые больше 50.

// Task 06
// На основе массива строк создать строку –
// объдинить все элементы массива, используя определенный разделитель.
const arrayOfString: Array<String> = ['I', 'love', 'React', 'but', 'I', 'hate', 'JS'];

// Task 07
//  Создать массив чисел от 1 до 20 в случайном порядке.
//  Отcортировать массив по возрастанию. Вывести его в консоль.
//  Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.

// Task 08
//  Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//  На его основе создать новый массив [-1, -2, -4, -5, -7, 0, 0, 3, 12, 7, 2, 4, 8].
//  первая часть - отрицательные числа в том же порядке
//  вторая часть - нули
//  третья часть - положительные числа в том же порядке.
const arrayOfRandomNumbers: Array<Number> = [3, 0, -1, 12, -2, -4, 0, 7, 2, -5, 4, 8, -7];

// Task 09
//  На основе массива из Task 08 получить:
//  1. Массив отрецательных чисел. // отсортированный
//  2. Массив положительных чисел. // отсортированный
//  3. Массив чисел от -1 до 5 включительно. // отсортированный
//  4. Массив строковых представлений чисел.
//  5. Массив четных чисел.
//  6. Найти и вернуть цифру 4.
//  7. Найти цифру которую введет пользователь и умножить ее на 3.
//  Если такой цифры нет в массиве то вывести предупреждение.

// Task 10
//  1. Создайте массив styles с элементами "Jazz", "Blues".
//  2. Добавьте в конец значение "Rock-n-Roll".
//  3. Замените предпоследнее значение с конца на "Classics".
//  4. Удалите первый элемент из массива и выведите его в консоль.
//  5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//  6. Выведите массив в консоль.

const styles: Array<String> = ["Jazz", "Blues"];

// Task 11
//  Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//  отдельно количество букв r, k, t и вывести в консоль.
const loremString: String = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";

// Task 12
//  Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//  который содержит элементы, длина которых не больше 3 символа.
//  Вывести массив в консоль.
const exampleString: String = 'a big brown fox jumps over the lazy dog';


// Task 13
// Дан массив школьных классов.
// Необходимо мутабельно перевести учеников из 5го класса в 6ой.

type PupilType = {
    name: String;
    age: Number;
    grade: Number;
    isExcellent: Boolean;
};
type ClassType = Array<PupilType>;

const classes: Array<ClassType> = [
    [
        {name: 'Peter', age: 10, grade: 5, isExcellent: false},
        {name: 'Kate', age: 11, grade: 5, isExcellent: true},
        {name: 'Olga', age: 9, grade: 5, isExcellent: false},
        {name: 'Greg', age: 11, grade: 5, isExcellent: false},
    ],
    [
        {name: 'Kevin', age: 15, grade: 9, isExcellent: false},
        {name: 'Patrick', age: 14, grade: 9, isExcellent: false},
        {name: 'Ann', age: 15, grade: 9, isExcellent: true},
        {name: 'Julia', age: 14, grade: 9, isExcellent: true},
    ],
    [
        {name: 'John', age: 13, grade: 7, isExcellent: true},
        {name: 'Sofia', age: 12, grade: 5, isExcellent: false},
        {name: 'Maria', age: 14, grade: 5, isExcellent: true},
        {name: 'Joseph', age: 13, grade: 5, isExcellent: false},
    ],
];

// Task 14
// На основе массива из Task 12 необходимо собрать массив отличников.

// Task 15
// На основе массива из Task 12 необходимо собрать массив обычных учеников старше 10 лет
// и младше 15.
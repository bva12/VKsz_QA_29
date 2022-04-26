// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let result = 2;
let exp = 1

while (exp <= 10) {
    console.log(result)
    result = result * 2
    exp++
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
const exp_2 = function(exp) {
    let i = 1;
    let result = 2;
    while (i <= exp) {
        result = result * 2;
        i++
    }
    console.log(result)
}

exp_2(3);

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ''

for (var i = 1; i < 6; i++) {
    smile += ':)'
    console.log(smile);
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

const printSmile = function(stroka, numberofRows) {
    let smile = ''
    for (var i = 0; i < numberofRows; i++) {
        smile += stroka;
        console.log(smile)
    }
}

printSmile('*/', 3)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'
const getWordStructure = function(word) {
    word = word.toLowerCase();
    word_replace = word.replace(/[^a-z]/g, "");
    let count_glasnye = 0;
    let count_soglasnye = 0;
    let glasnye = ['e', 'y', 'u', 'i', 'o', 'a'];
    for (var i = 0; i < word_replace.length; i++) {
        for (var j = 0; j < glasnye.length; j++) {
            if (word[i] === glasnye[j]) {
                count_glasnye += 1;
            }
        }
    }
    count_soglasnye = word_replace.length - count_glasnye;
    console.log("Слово " + word + " состоит из " + count_glasnye + " гласных и " + count_soglasnye + " согласных букв.");
}

getWordStructure("case");
getWordStructure("Case");
getWordStructure("Check-list");

// 4** Написать функцию, которая проверяет, является ли слово палиндромом

const isPalindrom = function(word) {
    word_lower = word.toLowerCase();
    let opposite_word = "";
    for (i = word_lower.length -1 ; i >= 0; --i) {
        opposite_word += word_lower[i];
    }
    if (word_lower == opposite_word) {
        console.log("Слово " + word + " является палиндромом")
    } else {
        console.log("Слово " + word + " не является палиндромом")
    }
}

isPalindrom("aBba")
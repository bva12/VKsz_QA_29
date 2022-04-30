// Task 1. Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10 .2021 и 10.10 .2021).Массив в task1.txt
let users = [{
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];
const find_user = function(users) {
    for (i = 0; i < users.length; i++) {
        if (users[i].registrationDate == '09.10.2021' || users[i].registrationDate == '10.10.2021') {
            console.log(users[i])
        }
    }
}

find_user(users)

// Task 2 * .Откройте в VSCode task2.json файл.Скопируйте из него JSONку, вставьте в свой код(присвоив в переменную).
// Дан массив объектов.Каждый объект является идентификационной карточкой человека.
// Нам нужно хранить только уникальные значения в этом массиве.Реализуйте функцию, которая будет выполнять эту работу.

const fs = require("fs");
let jsonData = require("C:\\Users\\admin\\VKsz_QA_29\\task2.json");
console.log("Кол-во объектов до проверки на уникальность значений" + jsonData.length)
for (let i = 0; i < jsonData.length; i++) {
    for (let j = 0; j < jsonData.length; j++) {
        if (i == j) {
            continue;
        } else if (jsonData[i].name == jsonData[j].name) {
            jsonData.splice(i, 1);
        };
    }
}
console.log("Кол-во объектов после проверки на уникальность значений " + jsonData.length)
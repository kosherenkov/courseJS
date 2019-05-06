 'use strict';
 
 /*var money,
     time;*/

var answerMoney = prompt("Ваш бютжет за місяць",  "");
//console.log(answerMoney);

var answerTime = prompt("Введите дату в формате YYYY-MM-DD",  "");
//console.log(answerTime);

var answerMainRozhodi = prompt ("Обв'язкові розходи", "");
var answerKilkistGrn = prompt ("Скільки грн");

var person = {
    budjet: answerMoney,
    timeData: answerTime,
};
console.log(person);

// об'єкт для обов'язкових роходів
var expenses = { 
    mainRozhodi: answerMainRozhodi,
    kilkistGrn: answerKilkistGrn,
};

console.log(expenses);

alert(person.budjet / 30);

// об'єкт для необов'язкових роходів
var optionalExpenses = {

};

//масив для додаткового доходу
var income = [];
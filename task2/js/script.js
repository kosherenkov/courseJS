 'use strict';
 
 let money = +prompt("Ваш бюджет на месяц?", ''),
	 time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    appData.expenses[a] = b;

    if ( (typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && a != '' && b != ''
    && a.length < 50 );
    else {
        //якщо нічого не вводять потрібно повернутися до циклу знову
        if (a  = '') continue ;
        if (b = '') continue ;
        alert("Поля не можуть бути порожніми");
        i--; 
    }
};

//Цикл while
/*let i = 0;
while ( i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    appData.expenses[a] = b;
    if ( (typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && a != '' && b != ''
    && a.length < 50 );
    else {
        //якщо нічого не вводять потрібно повернутися до циклу знову
        if (a  = '') continue ;
        if (b = '') continue ;
        alert("Поля не можуть бути порожніми");
        i--; 
    }
    i++;
};*/

//Цикл do while
/*let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    appData.expenses[a] = b;
    if ( (typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && a != '' && b != ''
    && a.length < 50 );
    else {
        //якщо нічого не вводять потрібно повернутися до циклу знову
        if (a  = '') continue ;
        if (b = '') continue ;
        alert("Поля не можуть бути порожніми");
        i--; 
    }
    i++;
}
while ( i < 2);
*/

appData.moneyPerDay = appData.budget / 30; 

if (appData.moneyPerDay < 100) {
    console.log("Мінімальний дохід");
}   
    else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
        console.log("Середній дохід");
}   else if (appData.moneyPerDay > 1000) {
        console.log("Високий дохід");
}   else {
    console.log("Вмнмкла помилка. ВВедіть коректні дані");
}




alert("Б'ютжет на день: " + appData.moneyPerDay);
console.log(appData);

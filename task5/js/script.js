 'use strict';
 
let money, time;

 function start () {
     money = +prompt("Ваш бюджет на месяц?", '');
     time = prompt('Введите дату в формате YYYY-MM-DD', '');
     
     while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
     }
 }
 start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: true,
    chooseExpenses: function() {
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
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt ("Яка у Вас сума накопичень?"),
                persent = +prompt ("Під який відсоток?");
    
            appData.mounthIncome = (save/100/12*persent).toFixed(2);
    
            alert ("Дохід в місяць з депозиту: " + appData.mounthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt ("Ваші необовязкові витрати?");
            appData.optionalExpenses[i] = a;
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Б'ютжет на день: " + appData.moneyPerDay);
    },
    detectLevel: function() {
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
    }
};


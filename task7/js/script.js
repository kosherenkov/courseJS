
let startBtn = document.getElementById("start"),
    budgetVvalue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector("choose-income"),
    savings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

    let time, money;
    startBtn.addEventListener('click', function(){
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        money = +prompt("Ваш бюджет на месяц?", '');   
         
        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", '');
         }
         appData.budget = money;
         appData.timeData = time;
         budgetVvalue.textContent = money;

         yearValue.value = new Date(Date.parse(time)).getFullYear();
         monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
         dayValue.value = new Date(Date.parse(time)).getDate();
    });

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
        },
        choseIncome: function() {
            let items = prompt('Що принесе додатковий дохід? (Перечисліть через кому)', '');
            if (typeof(items) != "string" || items =='' || typeof(items) == null ) {
                console.log("Ви ввели невірні дані")
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt('Можливо ще щось?'));
                appData.income.sort();
            }
    
            appData.income.forEach(function(items, i) {
                console.log( (i+1) + " Способи додаткового заробітку: " + items);
            });
    
            for (let key in appData) {
                console.log("Наша програма включає в себе таку інформацію: " + key + " " + appData[key]);
            };        
        }
    };
    
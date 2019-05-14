
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
    chooseIncome = document.querySelector(".choose-income"),
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

    //Обовязкові витрати
    expensesItemBtn.addEventListener('click', function(){ 
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value;
                b = expensesItem[++i].value;
                
            if ( (typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && a != '' && b != '' && a.length < 50 ) {
            appData.expenses[a] = b;
            sum += +b;
            } else {
                //якщо нічого не вводять потрібно повернутися до циклу знову
                i = i-1; 
            }
        };
        expensesValue.textContent = sum;
    });

    //Необовязкові витрати
    optionalExpensesBtn.addEventListener('click', function(){
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
        };
    });

    //розрахунок бютжета на день + рівень доходу
    countBudgetBtn.addEventListener('click', function(){
        if (appData.budget != undefined) {
            appData.moneyPerDay = (appData.budget / 30).toFixed(1);
            dayBudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Мінімальний дохід";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
                  levelValue.textContent = "Середній дохід";
            } else if (appData.moneyPerDay > 1000) {
                levelValue.textContent = "Високий дохід";
            } else {
               levelValue.textContent = "Виникла помилка. Введіть коректні дані";
            }
        } else {
            dayBudgetValue.textContent = "Виникла помилка. Введіть коректні дані";
        }        
    });

    //додаткові  доходи
    chooseIncome.addEventListener('input', function(){
        let items = chooseIncome.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    });

    savings.addEventListener('click', function(){
        if (appData.savings == true){
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    chooseSum.addEventListener('input', function(){
        if (appData.savings == true){
            let sum = +chooseSum.value,
                percent = +choosePercent.value;
                appData.mounthIncome = (sum/100/12*percent).toFixed(2);
                appData.yearIncome = (sum/100*percent).toFixed(2);
                monthSavingsValue.textContent = appData.mounthIncome;
                yearSavingsValue.textContent = appData.yearIncome;

        }
    });

    choosePercent.addEventListener('input', function(){
        if (appData.savings == true){
            let sum = +chooseSum.value,
            percent = +choosePercent.value;
            appData.mounthIncome = (sum/100/12*percent).toFixed(2);
            appData.yearIncome = (sum/100*percent).toFixed(2);
            monthSavingsValue.textContent = appData.mounthIncome;
            yearSavingsValue.textContent = appData.yearIncome;
        }
    });

    let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false,       
    };
    
let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    menuItemLi = document.createElement("li"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    zapisVBlock = document.getElementById("prompt");
    

menuItemLi.classList.add("menu-item"); // присвоєння клас елементу
menuItemLi.textContent = "Пятий елемент"; // Текст елемента
menu.appendChild(menuItemLi); // беремо батька і створюємо ще один елемент в ньому !!!
menu.insertBefore(menuItem[2], menuItem[1]); //вставка елемента

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let promptOption = prompt("Ваші враження від техніки Apple?");
zapisVBlock.textContent = promptOption;
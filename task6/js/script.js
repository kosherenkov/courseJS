let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    menuItemLi = document.createElement("li");

menuItemLi.classList.add("menu-item"); // присвоєння клас елементу
menuItemLi.textContent = "Пятий елемент"; // Текст елемента
menu.appendChild(menuItemLi); // беремо батька і створюємо ще один елемент в ньому !!!
menu.insertBefore(menuItem[2], menuItem[1]); //вставка елемента
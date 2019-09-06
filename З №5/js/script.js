let menu = document.getElementsByClassName("menu-item"),
    main = document.querySelector(".menu");
 
main.insertBefore(menu[2], menu[1]);
let fifth = document.createElement("li");
fifth.appendChild(document.createTextNode("Fifth point"));
main.appendChild(fifth);
main.lastChild.classList.add("menu-item");

let div = document.getElementById("title");
div.textContent = "Мы продаем только подлинную технику Apple";

let adv = document.querySelector(".column .adv"),
    col = document.getElementsByClassName("column");
col[1].removeChild(adv);

let ans = prompt("What do you think about apple production?"),
    bl = document.getElementById("prompt");
    bl.textContent = ans;

// FUNCIONES 

import { INPUTBOX, LISTCONTAINER } from "./ctes.js"

export function saveData() {

    localStorage.setItem("data", LISTCONTAINER.innerHTML);

}

export function loadData() {

    if (localStorage.getItem("data")) {
        LISTCONTAINER.innerHTML = localStorage.getItem("data");
    }
    
}

export function addTask() {

    if (INPUTBOX.value === "") {
        alert("You must type a task!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = INPUTBOX.value;
        LISTCONTAINER.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Código unicode para la X
        li.appendChild(span);
    }

    INPUTBOX.value = ""; // Limpiamos el input
    saveData();
}

export function cross_delete_Task(e) {

    if (e.target.tagName === "LI") {

        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "SPAN") {

        e.target.parentElement.remove();
        saveData();

    }

}

export function clearAll() {

    LISTCONTAINER.innerHTML = "";

}
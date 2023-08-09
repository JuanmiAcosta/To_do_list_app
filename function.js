// FUNCIONES 

import { INPUTBOX, LISTCONTAINER } from "./ctes.js"

export function saveData() {
    
    localStorage.setItem("data", LISTCONTAINER.innerHTML); // Guardamos los datos en el localStorage
    console.log("Data saved!!");

}

export function loadData() {

    if (localStorage.getItem("data")) {
        LISTCONTAINER.innerHTML = localStorage.getItem("data");
    }
    console.log("Data loaded!!");
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
    saveData(); // Guardamos los datos en el localStorage
}

export function cross_delete_Task(e) {

    if (e.target.tagName === "LI") { // Si el elemento clicado es un LI

        e.target.classList.toggle("checked"); // Añadimos o quitamos la clase checked
        saveData();

    } else if (e.target.tagName === "SPAN") { // Si el elemento clicado es un SPAN

        e.target.parentElement.remove(); // Eliminamos el elemento padre del SPAN (el LI)
        saveData();

    }

}

export function clearAll() {

    LISTCONTAINER.innerHTML = "";

}
import { addTask , cross_delete_Task, clearAll, loadData } from "./function.js";
import { BTN, LISTCONTAINER, BTN_CLEAR } from "./ctes.js";

loadData(); // Cargamos los datos guardados en el localStorage

BTN.addEventListener('mouseover', () => {   // Evento de ratón
    console.log('Hovered!!');
});

BTN.addEventListener('click', addTask); // Evento de click

BTN_CLEAR.addEventListener('click', clearAll); // Evento de click

LISTCONTAINER.addEventListener('click', cross_delete_Task, false); // Evento de click


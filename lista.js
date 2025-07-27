// lista.js
const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return structuredClone(lista);
}

export function limpaLista() {
    lista.splice(0);
}

export function addLista() {
    let item = document.querySelector("#entrada");
    lista.push(item.textContent);
}
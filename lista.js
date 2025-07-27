// lista.js
const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return structuredClone(lista);
}

export function limpaLista() {
    lista.splice(0);
}

export function adicionaNaLista() {
    let item = document.querySelector("#entrada");
    if(item.textContent) {
        lista.push(item.textContent);
        item.textContent = "";
    }
}
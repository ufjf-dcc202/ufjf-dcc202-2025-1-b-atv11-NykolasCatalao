// main.js

import { addLista, getLista, limpaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnAdicionar.addEventListener('click', adicionaLista);

btnLimpar.addEventListener('click', limparItensDeLista);

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}

atualizarLista();

function atualizarLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

function adicionaLista() {
    addLista();
    atualizarLista();
}
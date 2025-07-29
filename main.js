import { adicionaNaLista, getLista, limpaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

atualizarLista();

function atualizarLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement("li");
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

btnLimpar.addEventListener("click", limparItensDeLista);

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}

btnAdicionar.addEventListener("click", addItensDeLista);

function addItensDeLista(){
    const texto = pEntrada.textContent.trim();
    if (texto) {
        adicionaNaLista(texto);
        atualizarLista();
        pEntrada.textContent = ""; // Limpa o campo após adicionar
    }
}
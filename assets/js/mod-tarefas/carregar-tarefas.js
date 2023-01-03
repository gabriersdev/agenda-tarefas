import { criarData } from "./organiza-tarefas.js";
import { ordernarDatasUnicas, retornarDatasUnicas } from "./servicos/data.js";
import { limparLista } from "./utilitarios.js";

export const carregarTarefas = () => {
  const lista = document.querySelector('[data-list]');
  limparLista(lista);

  const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

  const datasUnicas = retornarDatasUnicas(tarefasSalvas);
  ordernarDatasUnicas(datasUnicas);
  
  datasUnicas.forEach(dia => {
    lista.appendChild(criarData(dia));
  });
}
import { formarNovaTarefa } from "./mod-tarefas/criar-tarefa.js";
import { carregarTarefas } from "./mod-tarefas/carregar-tarefas.js";
import { apagarTarefasLocal } from "./mod-tarefas/apagar-tarefas-local.js";
import { atualizarHora } from "./mod-tarefas/utilitarios.js";

(() => {

  const botaoApagarTarefasLocal = document.querySelector('[data-local-clear]');
  botaoApagarTarefasLocal.addEventListener('click', apagarTarefasLocal);

  const botaoFormulario = document.querySelector('[data-form-button]');
  botaoFormulario.addEventListener('click', formarNovaTarefa)
  
  carregarTarefas();

  window.addEventListener('load', () => {
    const dataFormulario = document.querySelector('[data-form-date]');
    dataFormulario.value = atualizarHora();
  });

})();
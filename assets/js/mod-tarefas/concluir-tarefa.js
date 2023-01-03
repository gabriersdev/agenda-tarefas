import { carregarTarefas } from "./carregar-tarefas.js";
import { atualizarPagina } from "./utilitarios.js";

const criarBotaoConcluiTarefa = (id) => {
  let botaoConclui = document.createElement('button');
  botaoConclui.classList.add('check-button');
  botaoConclui.setAttribute('data-button-concluir', '');
  botaoConclui.textContent = 'Concluir';
  
  botaoConclui.addEventListener('click', () => {
    concluirTarefa(id);
  });

  return botaoConclui;
}

const concluirTarefa = (id) => {
  const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefasSalvas[id].concluida = !tarefasSalvas[id].concluida;

  localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
  carregarTarefas();
}

export default criarBotaoConcluiTarefa;
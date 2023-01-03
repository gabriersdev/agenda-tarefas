import { apagarTarefasLocal } from "./apagar-tarefas-local.js";
import { carregarTarefas } from "./carregar-tarefas.js";

const criarBotaoApagarTarefa = (id) => {
  let botaoApagar = document.createElement('button');
  botaoApagar.classList.add('delete-button');
  botaoApagar.setAttribute('data-button-apagar', '');
  botaoApagar.innerText = 'Apagar';

  botaoApagar.addEventListener('click', () => {
    apagarTarefa(id);
  });

  return botaoApagar;
}

const apagarTarefa = (id) => {
  let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

  if(tarefasSalvas.length == 1){
    apagarTarefasLocal();
  }else{
    tarefasSalvas.splice(id, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
  }

  carregarTarefas();
}

export default criarBotaoApagarTarefa;
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
  Swal.fire({
    icon: 'question',
    title: 'Tem certeza que deseja apagar a tarefa?',
    text: 'Não será possível desfazer',
    showCancelButton: true,
    confirmButtonColor: 'green',
    cancelButtonColor: 'red',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não'
  }).then((ret) => {
    if(ret.isConfirmed){
      let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

      if(tarefasSalvas.length == 1){
        apagarTarefasLocal();
      }else{
        tarefasSalvas.splice(id, 1);
        localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
      }
    
      carregarTarefas();
      // console.log('true')
    }else{
      // console.log('else')
    }
  })
}

export default criarBotaoApagarTarefa;
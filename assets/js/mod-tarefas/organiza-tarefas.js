import { Tarefa } from "./criar-tarefa.js"
import { controlarTarefaExemplo } from './utilitarios.js';

export const criarData = (data) => {

  const dataNoFormato = moment(data, 'DD/MM/YYYY');
  const dataTopo = document.createElement('li');
  const conteudo = `<p class="content-data">${dataNoFormato.format('DD/MM/YYYY')}</p>`;
  dataTopo.innerHTML = conteudo

  const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

  let existemTarefas = false;

  tarefasSalvas.forEach((tarefa, id) => {
    existemTarefas = true;

    const dia = moment(tarefa.data, 'DD/MM/YYYY');
    const diff = dataNoFormato.diff(dia);
    
    if(diff === 0){
      dataTopo.appendChild(Tarefa(tarefa, id, tarefa.concluida));
    }

  });

  existemTarefas ? controlarTarefaExemplo() : '';

  return dataTopo;
}
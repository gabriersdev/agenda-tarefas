import criarBotaoConcluiTarefa from './concluir-tarefa.js';
import criarBotaoApagarTarefa from './apagar-tarefa.js';

import { salvarTarefas } from './salvar-tarefa.js';

import { controlarTarefaExemplo, limparCampos } from './utilitarios.js';
import { carregarTarefas } from './carregar-tarefas.js';

export const formarNovaTarefa = (evento) => {
  evento.preventDefault();
  
  const lista = document.querySelector('[data-list]');
  const inputNovaTarefa = document.querySelector('[data-form-input]');
  
  const calendario = document.querySelector('[data-form-date]');
  const dataHorario = moment(calendario.value);
  const dataFormatada = dataHorario.format("DD/MM/YYYY");
  const horarioFormatado = dataHorario.format('HH:mm');
  
  if(inputNovaTarefa.value != "" && dataHorario._isValid){
    
    const elementos = {
      input: inputNovaTarefa,
      calendario: calendario,
    }
    
    const dados = {
      valor: inputNovaTarefa.value,
      data: dataFormatada,
      horario: horarioFormatado,
      concluida: false
    }
    
    lista.appendChild(Tarefa(dados));
    
    salvarTarefas(dados);
    
    limparCampos(elementos);
    controlarTarefaExemplo();
    carregarTarefas();
  }
  else{
    Swal.fire({icon: 'warning', title: 'Você deve preencher o campo de Nome da Tarefa e Data'});
  }
}

export const Tarefa = ({valor, horario}, id, concluida) => {
  let nomeNovaTarefa = (valor);
  nomeNovaTarefa = `${nomeNovaTarefa}`;
  
  // #Criando o Elemento LI para a NOVA TAREFA e o alimentando com um valor recebido do INPUT
  let tarefa = document.createElement('li');
  tarefa.setAttribute('data-task', '');
  
  if(concluida){
    tarefa.classList.add('task');
    tarefa.classList.add('done')
  }else{
    tarefa.classList.add('task');
  }
  
  const conteudoAdicionarTarefa = `<p class="content">${horario} * ${nomeNovaTarefa}</p>`;
  
  tarefa.innerHTML = conteudoAdicionarTarefa;
  tarefa.appendChild(criarBotaoConcluiTarefa(id));
  tarefa.appendChild(criarBotaoApagarTarefa(id));
  
  return tarefa;
}
const controlarTarefaExemplo = (condicao) => {
  const tarefaExemplo = document.querySelector('[data-list-example]');
  
  try{
    if(condicao == undefined){
      if(tarefaExemplo.classList.contains('show')){
        tarefaExemplo.classList.remove('show');
        tarefaExemplo.classList.add('hide');
      }
    }else if(condicao == 'show'){
      tarefaExemplo.classList.remove('hide');
      tarefaExemplo.classList.add('show');
    }
  }catch{
    
  }
}

const limparLista = (elemento) => {
  if(elemento.innerHTML != ''){
    elemento.innerHTML = '';
    controlarTarefaExemplo;
  }
}

const limparCampos = ({input, calendario}) => {
  input.value = '';
  calendario.value = '';
}

const atualizarHora = () => {
  const dataAtual = new Date();
  const diaAtual = ("0" + dataAtual.getDate()).slice(-2);
  const mesAtual = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
  const anoAtual = dataAtual.getFullYear();
  
  const horarioFormato = {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
    timezone: 'America/Sao_Paulo'
  }
  
  const horarioAtual = dataAtual.toLocaleTimeString('pt-BR', horarioFormato);
  
  return `${anoAtual}-${mesAtual}-${diaAtual} ${horarioAtual}`;
}

const atualizarPagina = () => {
  window.location.reload();
}

export{
  controlarTarefaExemplo,
  limparLista,
  limparCampos,
  atualizarHora,
  atualizarPagina
}
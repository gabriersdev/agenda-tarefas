export const salvarTarefas = (dados) => {
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  const tarefasAtuais = [... tarefas, dados];

  localStorage.setItem('tarefas', JSON.stringify(tarefasAtuais));
}
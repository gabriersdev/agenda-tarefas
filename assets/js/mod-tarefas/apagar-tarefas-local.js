import { carregarTarefas } from "./carregar-tarefas.js";
import { controlarTarefaExemplo } from "./utilitarios.js";

export const apagarTarefasLocal = () => {
  localStorage.clear();
  carregarTarefas();
  controlarTarefaExemplo('show');
}
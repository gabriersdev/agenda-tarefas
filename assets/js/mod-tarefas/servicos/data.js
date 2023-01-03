export const retornarDatasUnicas = (tarefasSalvas) => {

  const datasUnicas = [];
  tarefasSalvas.forEach(dados => {
    if(datasUnicas.indexOf(dados.data) === -1){
      datasUnicas.push(dados.data);
    }
  });

  return datasUnicas;
}

export const ordernarDatasUnicas = (datas) => {
  datas.sort((a, b) => {
    const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
    const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');

    return primeiraData - segundaData;
  })
}

export const ordernarHorarios = (horarios) => {
  horarios.sort((a, b) => {
    const primeiroHorario = moment(a, 'HH:mm').format('HHmm');
    const segundoHorario = moment(b, 'HH:mm').format('HHmm');
    
    (primeiroHorario < segundoHorario) ? console.log(primeiroHorario) : console.log(segundoHorario);
    console.log(primeiroHorario - segundoHorario);
    return primeiroHorario - segundoHorario;
  });
}

// ordernarHorarios(['23:50', '08:45', '11:30']);
import moment from 'moment';

function formatDate(date, type) {
  return type === 'full'
    ? moment(date)
      .locale('pt-bt')
      .format('LLL') // 5 de Abril de 2020 às 21:43
    : type === 'simple'
      ? moment(date)
        .locale('pt-br')
        .format('LL') // 5 de Abril de 2020
      : moment(date)
        .locale('pt-br')
        .format('L'); // 05/04/2020
}

export default { formatDate };

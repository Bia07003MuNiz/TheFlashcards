export const formatarData = (data: string | Date) => {
  return new Date(data).toLocaleDateString('pt-BR');
};

export const formatarHora = (data: string | Date, soHoraMinuto = false) => {
  return new Date(data).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    ...(soHoraMinuto ? {} : { second: '2-digit' }),
  });
};
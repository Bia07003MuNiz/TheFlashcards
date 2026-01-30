import { type BaseVariant, enqueueSnackbar } from 'notistack';

export const snackBar = (mensagem: string, variante: BaseVariant, tempoDeDuracao = 5000) => {
  enqueueSnackbar(mensagem, { variant: variante, autoHideDuration: tempoDeDuracao });
};

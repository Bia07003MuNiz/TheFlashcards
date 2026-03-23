import { useMutation, useQuery } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';
import instituicaoService from '@features/instituicoes/services';
import recuperarSenhaService, { type EnviarCodigoDTO, type RedefinirSenhaDTO, type ValidarCodigoDTO } from '@features/recuperarSenha/services';

export const useRecuperarSenha = () => {
    const { mutateAsync: post, isPending } = useMutation({
        mutationKey: ['enviar-codigo'],
        mutationFn: async (data: EnviarCodigoDTO) => {
            await recuperarSenhaService.enviarCodigo(data);
        },
        onSuccess: () => {
            snackBar('Codigo enviado com sucesso', 'success');
        },
        onError: (error: any) => {
            const message = error?.response?.data?.error || 'Erro ao enviar codigo';
            snackBar(message, 'error');
            return message;
        },
    });

    const { mutateAsync: validar, isPending: isPendingValidar } = useMutation({
        mutationKey: ['validar-codigo'],
        mutationFn: async (data: ValidarCodigoDTO) => {
            await recuperarSenhaService.validarCodigo(data);
        },
        onSuccess: () => {
            snackBar('Codigo validado com sucesso', 'success');
        },
        onError: (error: any) => {
            const message = error?.response?.data?.error || 'Erro ao validar codigo';
            snackBar(message, 'error');
            return message;
        },
    });

    const { mutateAsync: put, isPending: isPendingPut } = useMutation({
        mutationKey: ['redefinir-senha'],
        mutationFn: async (data: RedefinirSenhaDTO) => {
            await recuperarSenhaService.redefinirSenha(data);
        },
        onSuccess: () => {
            snackBar('Senha redefinida com sucesso', 'success');
        },
        onError: (error: any) => {
            const message = error?.response?.data?.error || 'Erro ao redefinir senha';
            snackBar(message, 'error');
            return message;
        },
    });

    return { isPending, post, isPendingPut, put, isPendingValidar, validar };
};

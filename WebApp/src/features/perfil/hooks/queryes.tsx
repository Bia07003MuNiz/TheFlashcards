import { useMutation, useQuery } from '@tanstack/react-query';
import UsuarioService, { type EditarUsuarioDto } from '../services';
import instituicaoService from '@features/instituicoes/services';
import { snackBar } from '@utils/SnackBar';


export const useMeuPerfil = () => {
    const {
        data: meuPerfil,
        isLoading: estaCarregandoMeuPerfil,
        refetch
    } = useQuery({
        queryKey: ['Usuarios', 'buscarMeuPerfil'],
        queryFn: async () => await UsuarioService.buscarMeuPerfil(),
        select: ({ data }) => ({
            id: data.id,
            nome: data.nome,
            email: data.email,
            role: data.role,
            data_nascimento: data.data_nascimento,
            created_at: data.created_at,
            instituicao_id: data.instituicao_id
        }),
    });

     const {
        mutateAsync: editar,
        isPending: estaEditando,
    } = useMutation({
        mutationKey: ['Usuarios'],
        mutationFn: async ({ id, payload }: {
            id: number, payload: EditarUsuarioDto
        }) => {
            return await UsuarioService.editar(id, payload);
        },
        onError: (error: any) => {
            snackBar(error?.response?.data?.error, 'error');
        },
        onSuccess: () => {
            refetch();
            snackBar('Perfil atualizado com sucesso', 'success');

        },
    });

     const { data: instituicoes, isLoading: estaCarregandoInstituicoes, refetch: buscaInstituicoesNovamente } = useQuery({
            queryKey: ['buscaInstituicoesParaFiltro'],
            queryFn: async () => await instituicaoService.buscar(),
            select: (data) => data.map((instituicao) => ({
                value: instituicao.id,
                label: instituicao.nome,
            })),
        });


    return { meuPerfil, estaCarregandoMeuPerfil, editar, estaEditando, instituicoes, estaCarregandoInstituicoes,};
};


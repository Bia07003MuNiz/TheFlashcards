import { useQuery } from '@tanstack/react-query';
import UsuarioService from '@services/usuario.service';


export const useMeuPerfil = () => {
    const {
        data: meuPerfil,
        isLoading: estaCarregandoMeuPerfil,
    } = useQuery({
        queryKey: ['Usuarios', 'buscarMeuPerfil'],
        queryFn: async () => await UsuarioService.buscarMeuPerfil(),
        select: ({ data }) => ({
            nome: data.nome,
            email: data.email,
            role: data.role,
        }),
    });


    return { meuPerfil, estaCarregandoMeuPerfil };
};


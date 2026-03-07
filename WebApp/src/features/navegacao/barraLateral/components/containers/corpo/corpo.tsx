import { BotaoCustomizado } from '@shared/components/botao';
import { HomeIcon, LogoPrincipal, DashBoardIcon, ApagarIcon, AReceberIcon, RelatoriosIcon, ConfiguracoesIcon } from '../../icons';
import { AreaDoUsuario, BadgeContador, Container, ContainerDoInput, Footer, ItemsDaSidebar } from './styles';
import { useRotas } from '@hooks/useRotas';
import { useMemo } from 'react';
import { InputCustomizado } from '@shared/components/input';
import { BuscarIcon } from '@shared/components/botao/icons';
import { Bell, ChartBarStacked, FolderKanban, Landmark, LogOut, Truck } from 'lucide-react';
import { Avatar, IconButton } from '@mui/material';
import useAuth from '@contexts/AuthContext';
import { useMeuPerfil } from '@features/navegacao/barraLateral/hooks/useMeuPerfil';

export const Corpo = () => {
    const { rotas, isRotaAtiva, navegarAte } = useRotas();
    const { meuPerfil } = useMeuPerfil();
    const isProfessor = meuPerfil?.role === "PROFESSOR";

    const { signOutHandler } = useAuth();


    const rotaAtual = useMemo(() => {
        return {
            salas: isRotaAtiva(rotas.SALA),
            relatorioProfessor: isRotaAtiva(rotas.RELATORIOS_PROFESSOR),
            relatorioAluno: isRotaAtiva(rotas.RELATORIOS_ALUNO),
            notas: isRotaAtiva(rotas.NOTAS),
            perfil: isRotaAtiva(rotas.PERFIL),
        };
    }, [rotas, isRotaAtiva]);

    return (
        <Container>
            <LogoPrincipal />
            <ItemsDaSidebar>
                {isProfessor && (
                    <>
                        <BotaoCustomizado.BotaoSidebar
                            estaAtivo={rotaAtual.salas}
                            titulo="Salas"
                            variant="text"
                            startIcon={<HomeIcon />}
                            onClick={() => navegarAte(rotas.SALA)}
                        />

                        <BotaoCustomizado.BotaoSidebar
                            estaAtivo={rotaAtual.relatorioProfessor}
                            titulo="Relatório"
                            variant="text"
                            startIcon={<DashBoardIcon />}
                            onClick={() => navegarAte(rotas.RELATORIOS_PROFESSOR)}
                        />
                    </>
                )}

                {!isProfessor && (
                    <>
                        <BotaoCustomizado.BotaoSidebar
                            estaAtivo={rotaAtual.relatorioAluno}
                            titulo="Relatório"
                            variant="text"
                            startIcon={<DashBoardIcon />}
                            onClick={() => navegarAte(rotas.RELATORIOS_ALUNO)}
                        />
                    </>
                )}

                <BotaoCustomizado.BotaoSidebar
                    estaAtivo={rotaAtual.notas}
                    titulo="Notas"
                    variant="text"
                    startIcon={<FolderKanban />}
                    onClick={() => navegarAte(rotas.NOTAS)}
                />

                <BotaoCustomizado.BotaoSidebar
                    estaAtivo={rotaAtual.perfil}
                    titulo="Perfil"
                    variant="text"
                    startIcon={<ChartBarStacked />}
                    onClick={() => navegarAte(rotas.PERFIL)}
                />

            </ItemsDaSidebar>
            <Footer>
                <AreaDoUsuario>
                    <div className="logout">
                        <IconButton size='small' onClick={signOutHandler}>
                            <LogOut />
                        </IconButton>
                    </div>
                </AreaDoUsuario>
            </Footer>
        </Container>
    );
};

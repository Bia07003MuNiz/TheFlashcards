import { BotaoCustomizado } from '@shared/components/botao';
import {  Avatar, Container, ContainerItens, ConteinerSair, Divider, Footer, ItemsDaSidebar, PerfilContainer, PerfilInfo } from './styles';
import { useRotas } from '@hooks/useRotas';
import { useMemo } from 'react';
import { BookOpenCheck, ChartColumn, Copy, FolderKanban, GalleryVerticalEnd, LogOut, StickyNote, User } from 'lucide-react';
import useAuth from '@contexts/AuthContext';
import { useMeuPerfil } from '@features/navegacao/barraLateral/hooks/useMeuPerfil';
import { Tipografias } from '@shared/components/tipografias';

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
            responderSala: isRotaAtiva(rotas.RESPONDER_SALA),
            notas: isRotaAtiva(rotas.NOTAS),
            perfil: isRotaAtiva(rotas.PERFIL),
        };
    }, [rotas, isRotaAtiva]);

    return (
        <Container>
            <ContainerItens>
                <PerfilContainer>
                    <Avatar>
                        {meuPerfil?.nome?.charAt(0).toUpperCase()}
                    </Avatar>

                    <PerfilInfo>
                        <Tipografias.Medio>{meuPerfil?.nome}</Tipografias.Medio>
                        <Tipografias.Legenda className='role'>{meuPerfil?.role}</Tipografias.Legenda>
                    </PerfilInfo>
                </PerfilContainer>

                <Divider />

                <ItemsDaSidebar>
                    {isProfessor && (
                        <>
                            <BotaoCustomizado.BotaoSidebar
                                estaAtivo={rotaAtual.salas}
                                titulo="Salas"
                                variant="text"
                                startIcon={<BookOpenCheck size={20} />}
                                onClick={() => navegarAte(rotas.SALA)}
                            />

                            <BotaoCustomizado.BotaoSidebar
                                estaAtivo={rotaAtual.relatorioProfessor}
                                titulo="Relatório"
                                variant="text"
                                startIcon={<ChartColumn size={20} />}
                                onClick={() => navegarAte(rotas.RELATORIOS_PROFESSOR)}
                            />
                        </>
                    )}

                    {!isProfessor && (
                        <>
                        <BotaoCustomizado.BotaoSidebar
                                estaAtivo={rotaAtual.responderSala}
                                titulo="Responder Sala"
                                variant="text"
                                startIcon={<GalleryVerticalEnd  size={20} />}
                                onClick={() => navegarAte(rotas.RESPONDER_SALA)}
                            />

                            <BotaoCustomizado.BotaoSidebar
                                estaAtivo={rotaAtual.relatorioAluno}
                                titulo="Relatório"
                                variant="text"
                                startIcon={<ChartColumn size={20} />}
                                onClick={() => navegarAte(rotas.RELATORIOS_ALUNO)}
                            />
                        </>
                    )}

                    <BotaoCustomizado.BotaoSidebar
                        estaAtivo={rotaAtual.notas}
                        titulo="Notas"
                        variant="text"
                        startIcon={<StickyNote size={20} />}
                        onClick={() => navegarAte(rotas.NOTAS)}
                    />
                    <BotaoCustomizado.BotaoSidebar
                        estaAtivo={rotaAtual.perfil}
                        titulo="Perfil"
                        variant="text"
                        startIcon={<User size={20} />}
                        onClick={() => navegarAte(rotas.PERFIL)}
                    />
                </ItemsDaSidebar>
            </ContainerItens>
            
            <Footer>
                <Divider />
                <div className="logout">
                    <ConteinerSair onClick={signOutHandler}>
                        <LogOut size={20} color="#EB000B" />
                        <Tipografias.Medio style={{ color: '#EB000B' }}>
                            Sair
                        </Tipografias.Medio>
                    </ConteinerSair>
                </div>
            </Footer>
        </Container>
    );
};

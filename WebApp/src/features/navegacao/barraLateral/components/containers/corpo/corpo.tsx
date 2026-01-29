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
import { useNotificacoes } from '@features/notificacoes/contexts';

export const Corpo = () => {
  const { rotas, isRotaAtiva, navegarAte } = useRotas();
  const { meuPerfil } = useMeuPerfil();
  const { signOutHandler } = useAuth();

  const { contadorNaoLidas } = useNotificacoes();

  const rotaAtual = useMemo(() => {
    return {
      home: isRotaAtiva(rotas.HOME),
      dashboard: isRotaAtiva(rotas.DASHBOARD),
      contasAPagar: isRotaAtiva(rotas.PAGAR),
      contasAReceber: isRotaAtiva(rotas.RECEBER),
      relatorios: isRotaAtiva(rotas.RELATORIOS),
      fornecedores: isRotaAtiva(rotas.FORNECEDORES),
      gerencial: isRotaAtiva(rotas.GERENCIAL),
      naturezas: isRotaAtiva(rotas.NATUREZAS),
      bancos: isRotaAtiva(rotas.BANCOS),
      notificacoes: isRotaAtiva(rotas.NOTIFICACOES),
    };
  }, [rotas, isRotaAtiva]);

  return (
    <Container>
      <LogoPrincipal/>
      <ContainerDoInput>
        <InputCustomizado.InputComum
          label="Pesquisar"
          helperText={'Pesquisar'}
          placeholder={'Pesquisar'}
          startAdornment={<BuscarIcon />}
        />
      </ContainerDoInput>
      <ItemsDaSidebar>
        <BotaoCustomizado.BotaoSidebar
          estaAtivo={rotaAtual.home }
          titulo="Início"
          variant="text"
          startIcon={<HomeIcon />}
          onClick={() => navegarAte(rotas.HOME)}
        />

        <BotaoCustomizado.BotaoSidebar
          estaAtivo={rotaAtual.dashboard}
          titulo="Dashboard"
          variant="text"
          startIcon={<DashBoardIcon />}
          onClick={() => navegarAte(rotas.DASHBOARD)}
        />

        <BotaoCustomizado.BotaoSidebar
          estaAtivo={rotaAtual.gerencial}
          titulo="Gerencial"
          variant="text"
          startIcon={<FolderKanban />}
          onClick={() => navegarAte(rotas.GERENCIAL)}
        />

        <BotaoCustomizado.BotaoSidebar
          estaAtivo={rotaAtual.contasAPagar }
          titulo="A Pagar"
          variant="text"
          startIcon={<ApagarIcon />}
          onClick={() => navegarAte(rotas.PAGAR)}
        />

        <BotaoCustomizado.BotaoSidebar
          estaAtivo={rotaAtual.contasAReceber}
          titulo="A Receber"
          variant="text"
          startIcon={<AReceberIcon />}
          onClick={() => navegarAte(rotas.RECEBER)}
        />

        <BotaoCustomizado.BotaoSidebar
          estaAtivo={rotaAtual.naturezas}
          titulo="Naturezas"
          variant="text"
          startIcon={<ChartBarStacked />}
          onClick={() => navegarAte(rotas.NATUREZAS)}
        />

        <BotaoCustomizado.BotaoSidebar
          estaAtivo={rotaAtual.fornecedores}
          titulo="Fornecedor / Clientes"
          variant="text"
          startIcon={<Truck />}
          onClick={() => navegarAte(rotas.FORNECEDORES)}
        />

        <BotaoCustomizado.BotaoSidebar
          estaAtivo={rotaAtual.bancos}
          titulo="Bancos"
          variant="text"
          startIcon={<Landmark />}
          onClick={() => navegarAte(rotas.BANCOS)}
        />

        <BotaoCustomizado.BotaoSidebar
          estaAtivo={rotaAtual.relatorios}
          titulo="Relatórios"
          variant="text"
          startIcon={<RelatoriosIcon />}
          onClick={() => navegarAte(rotas.RELATORIOS)}
        />

        <BotaoCustomizado.BotaoSidebar
          // estaAtivo={rotaAtual.relatorios}
          titulo="Configurações"
          variant="text"
          startIcon={<ConfiguracoesIcon />}
          onClick={() => navegarAte(rotas.RELATORIOS)}
        />
      </ItemsDaSidebar>
      <Footer>
        <BotaoCustomizado.BotaoSidebar
          estaAtivo={rotaAtual.notificacoes}
          titulo="Notificações"
          variant="text"
          startIcon={<Bell />}
          endIcon={contadorNaoLidas > 0 ? <BadgeContador>{contadorNaoLidas > 99 ? '99+' : contadorNaoLidas}</BadgeContador> : undefined}
          onClick={() => navegarAte(rotas.NOTIFICACOES)}
        />
        <AreaDoUsuario>
          <div className="avatar">
            <Avatar alt='Primeira letra do nome do usuário' className='avatar-footer'> {meuPerfil?.nome?.charAt(0).toUpperCase()} </Avatar>
          </div>

          <div className="areaDeTexto">
            <span className="nome" title={meuPerfil?.nome}>{meuPerfil?.nome}</span>
            <span className="email" title={meuPerfil?.email}>{meuPerfil?.email}</span>
          </div>

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

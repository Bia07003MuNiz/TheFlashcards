import { ColunaDireita, ColunaEsquerda, ContainerBotao, ContainerLayout } from './styles';
import { BotaoCustomizado } from '@shared/components/botao';
import { useSalaController } from '../../hooks/index';
import { Plus } from 'lucide-react';
import { useSalas } from '../../hooks/queryes';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { PerguntasERespostas } from './perguntaResposta';
import { InformacoesGerais } from './informacoesGerais';
import { Configuracoes } from './configuracoes';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';

export const CorpoNovaSala = () => {

  const { handleSala, } = useSalaController();
  const { estaCarregandoInstituicoes } = useSalas();
  const navigate = useNavigate();

  return (
    <ContainerLayout>
      <ColunaEsquerda>
        <InformacoesGerais />
        <PerguntasERespostas />
      </ColunaEsquerda>

      <ColunaDireita>
        <Configuracoes />
        <ContainerBotao className='botaoCustomizado'>
          <BotaoCustomizado.BotaoSecundario className='botaoCustomizado' titulo='Cancelar' onClick={() => navigate(rotas.SALA)} />
          <BotaoCustomizado.BotaoPrimario className='botaoCustomizado' titulo='Criar Sala' startIcon={<Plus size={20} />} onClick={handleSala} />
        </ContainerBotao>
      </ColunaDireita>

      <BackDropCustomizado aberto={estaCarregandoInstituicoes} />
    </ContainerLayout>
  )
};

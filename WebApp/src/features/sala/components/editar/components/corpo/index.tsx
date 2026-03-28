import {
  ColunaDireita,
  ColunaEsquerda,
  ContainerBotao,
  ContainerLayout,
} from './styles';
import { BotaoCustomizado } from '@shared/components/botao';
import type { FC } from 'react';
import type { useSalaController } from '../../hooks';
import { useSalas } from '../../hooks/queryes';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { InformacaoGeral } from './informacoesGerais';
import { PerguntasERespostas } from './perguntaResposta';
import { Pencil } from 'lucide-react';
import { Configuracoe } from './configuracoes';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';

type Props = ReturnType<typeof useSalaController>;

export const CorpoEditarSala: FC<Props> = ({
  register,
  control,
  errors,
  watch,
  handleSala,
}) => {
  const { estaCarregandoInstituicoes } = useSalas();
  const salaId = Number(watch('id') ?? 0);
  const navigate = useNavigate();
  return (
    <ContainerLayout>
      <ColunaEsquerda>
        <InformacaoGeral
          register={register}
          control={control}
          errors={errors}
        />

        <PerguntasERespostas
          salaId={salaId}
          flashcards={watch('flashcards') ?? []}
        />
      </ColunaEsquerda>

      <ColunaDireita>
        <Configuracoe
          control={control}
          errors={errors}
          watch={watch}
        />

        <ContainerBotao className="botaoCustomizado">
          <BotaoCustomizado.BotaoSecundario
            className="botaoCustomizado"
            titulo="Cancelar"
            onClick={() => navigate(rotas.SALA)}
          />

          <BotaoCustomizado.BotaoPrimario
            className="botaoCustomizado"
            titulo="Atualizar Sala"
            startIcon={<Pencil size={20} />}
            onClick={handleSala}
          />
        </ContainerBotao>
      </ColunaDireita>

      <BackDropCustomizado aberto={estaCarregandoInstituicoes} />
    </ContainerLayout>
  );
};
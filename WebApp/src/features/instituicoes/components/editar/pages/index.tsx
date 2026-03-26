import { BackDropCustomizado } from '@shared/components/backDrop';
import { useParams } from 'react-router-dom';
import { useInstituicaoController } from '../hooks';
import { Corpo } from '../pages/styles';
import { useInstituicao } from '../hooks/queryes';
import { CabecalhoEditarInstituicao } from '../components/cabecalho';
import { CorpoEditarInstituicao } from '../components/corpo';
export const InstituicaoEditar = () => {
  const { id } = useParams<{ id: string }>();
  const { buscaUnica, isLoadingBuscaUnica } = useInstituicao(Number(id));

  const { register, control, errors, watch, handleInstituicao, setValue } = useInstituicaoController(buscaUnica, Number(id));

  return (
    <Corpo>
      <CabecalhoEditarInstituicao />

      <CorpoEditarInstituicao
        register={register}
        control={control}
        errors={errors}
        watch={watch}
        handleInstituicao={handleInstituicao}
        setValue={setValue}
      />

      <BackDropCustomizado aberto={isLoadingBuscaUnica} />
    </Corpo>
  );
};
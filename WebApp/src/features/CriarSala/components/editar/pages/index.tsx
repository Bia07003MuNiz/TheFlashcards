import { BackDropCustomizado } from '@shared/components/backDrop';
import { useParams } from 'react-router-dom';
import { useSalaController } from '@features/CriarSala/components/editar/hooks';
import { SalaEditarComponente } from '../components';
import { useSalas } from '../hooks/queryes';
import { Corpo } from '../pages/styles';
export const SalaEditar = () => {
  const { id } = useParams<{ id: string }>();

  const { buscaUnica, isLoadingBuscaUnica } = useSalas(Number(id));

  const {
    register,
    control,
    errors,
    watch,
    append,
    remove,
    fields,
    handleSala,
    setValue,
  } = useSalaController(buscaUnica, Number(id));

  return (
    <Corpo>
      <SalaEditarComponente.CabecalhoEditarSala
      // register={register}
      // control={control}
      // errors={errors}
      // handleSala={handleSala}
      // setValue={setValue}
      />

      <SalaEditarComponente.CorpoEditarSala
        register={register}
        control={control}
        errors={errors}
        watch={watch}
        append={append}
        remove={remove}
        fields={fields}
        handleSala={handleSala}
        setValue={setValue}
      />

      <BackDropCustomizado aberto={isLoadingBuscaUnica} />
    </Corpo>
  );
};
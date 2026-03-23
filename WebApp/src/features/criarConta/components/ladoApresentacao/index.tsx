import { Tipografias } from '@shared/components/tipografias';
import { Cards, Container, Conteudo, Divider, Form, LabelTipoConta, Linha, TipoConta } from './styles';
import { InputCustomizado } from '@shared/components/input';
import { BotaoCustomizado } from '@shared/components/botao';
import { useCriarUsuarioController } from '@features/criarConta/hooks';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { Mail, Lock, MoveRight, User, ChevronLeft, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import { formatarCelular } from '@utils/Mascara';
import { useCriarConta } from '@features/criarConta/hooks/queryes';

export const LadoApresentacao = () => {
  const { register, errors, handleSala, isPending, watch, control, setValue } = useCriarUsuarioController();
  const navigate = useNavigate();
  const { instituicoes, estaCarregandoInstituicoes } = useCriarConta();
  const watchRole = watch("role");
  const isProfessor = watchRole === "PROFESSOR";

  return (
    <Container>
      <Conteudo>
        <div className="areaTexto">
          <Tipografias.Titulo>Crie sua conta</Tipografias.Titulo>
        </div>
        <Form>
          <InputCustomizado.InputComum
            label="Nome"
            placeholder={'Nome Completo'}
            {...register('nome')}
            error={!!errors.nome}
            helperText={errors.nome?.message}
            startAdornment={<User color='#94a3b8' size={16} />}
          />

          <InputCustomizado.InputComum
            label="E-mail"
            placeholder={'exemplo@email.com'}
            type='email'
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            startAdornment={<Mail color='#94a3b8' size={16} />}
          />

          <InputCustomizado.InputComum
            label="Senha"
            placeholder="••••••••"
            type="password"
            {...register('senha')}
            error={!!errors.senha}
            helperText={errors.senha?.message}
            startAdornment={<Lock color='#94a3b8' size={16} />}
          />

          <Linha>
            <Controller
              name="data_nascimento"
              control={control}
              render={({ field }) => (
                <InputCustomizado.InputData
                  label="Data de Nascimento"
                  placeholder="Ex: 01/01/2000"
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date) =>
                    field.onChange(date ? dayjs(date).toISOString() : null)
                  }
                  onBlur={field.onBlur}
                  error={!!errors.data_nascimento}
                  helperText={errors.data_nascimento?.message}
                />
              )}
            />

            <InputCustomizado.InputComum
              label="Celular"
              placeholder="(11) 99999-9999"
              {...register('celular')}
              onChange={(e) =>
                setValue('celular', formatarCelular(e.target.value))
              }
              error={!!errors.celular}
              helperText={errors.celular?.message}
              startAdornment={<Phone color="#94a3b8" size={16} />}
            />
          </Linha>
          <TipoConta>
            <LabelTipoConta>Tipo de conta</LabelTipoConta>

            <Cards>
              <div
                className={`card ${watchRole === "ALUNO" ? "ativo" : ""}`}
                onClick={() => setValue("role", "ALUNO")}
              >
                <User size={18} />
                <span>Aluno</span>
              </div>

              <div
                className={`card ${watchRole === "PROFESSOR" ? "ativo" : ""}`}
                onClick={() => setValue("role", "PROFESSOR")}
              >
                <User size={18} />
                <span>Professor</span>
              </div>
            </Cards>
          </TipoConta>

          <Controller
            name="instituicoes"
            control={control}
            render={({ field }) => (
              <InputCustomizado.AutoCompleteMultiplo
                label="Instituição *"
                options={instituicoes || []}
                value={
                  instituicoes?.filter(i =>
                    field.value?.includes(Number(i.value))
                  ) || []
                }
                handleChangeState={(novo) =>
                  field.onChange(novo.map(item => Number(item.value)))
                }
                limitTags={2}
                error={!!errors.instituicoes}
                helperText={errors.instituicoes?.message}
                placeholder="Selecione a instituição"
                loading={estaCarregandoInstituicoes}
              />
            )}
          />
          <BotaoCustomizado.BotaoPrimario titulo='Criar Conta' onClick={handleSala} />
          <div className="voltar" onClick={() => navigate(rotas.LOGIN)}>
            <ChevronLeft size={18} color='#64748b' />
            <Tipografias.TextoSimples>Voltar para Login</Tipografias.TextoSimples>
          </div>

        </Form>
        <BackDropCustomizado aberto={isPending} />
      </Conteudo>
    </Container>
  );
};

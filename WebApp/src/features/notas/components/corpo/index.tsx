import { Tipografias } from '@shared/components/tipografias';
import { AdicionarNotaDiv, CardBrancoConteudo, CardNotas, CirculoTabelaVazia, Container, Conteudo, ConteudoAdicionarNota, IconeEditar, InfoPrincipal, Metricas, RadioFake, StatusNotas, TabelaVazia } from './styles';
import { Edit, Pencil, Plus, User } from 'lucide-react';
import { useNotasInativar } from '@features/notas/hooks/queryes';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { NotasNovo } from './novo';
import { useState } from 'react';
import { ModalCustomizado } from '@shared/components/modal';
import { NotasEditar } from './editar';
import type { Nota } from '@features/notas/services';

export const CorpoNotas = () => {
  const { data, isLoading, inativar } = useNotasInativar();
  const [modalAberto, setModalAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [notaSelecionada, setNotaSelecionada] = useState<Nota | null>(null);
  const notasAtivas = data.filter((nota) => nota.ativo === true);

  const handleEditar = (nota: Nota) => {
    setNotaSelecionada(nota);
    setModalEditarAberto(true);
  };

  return (
    <Container>
      <CardBrancoConteudo>

        <Conteudo>

          <ConteudoAdicionarNota>
            <AdicionarNotaDiv onClick={() => setModalAberto(true)}>
              <Plus size={20} color='#314158' />
              <Tipografias.TextoSimples color='#314158'>Adicionar nova nota </Tipografias.TextoSimples>
            </AdicionarNotaDiv>
          </ConteudoAdicionarNota>

          {notasAtivas.length === 0 && !isLoading ? (
            <TabelaVazia>
              <CirculoTabelaVazia>
                <User size={28} color="#90a1b9" />
              </CirculoTabelaVazia>

              <Tipografias.Titulo>Nenhuma nota encontrada </Tipografias.Titulo>
              <Tipografias.Legenda>Você ainda não possui notas registradas. </Tipografias.Legenda>
            </TabelaVazia>
          ) : (
            notasAtivas.map((nota) => {
              return (
                <>
                  <CardNotas key={nota.id} prioridade={nota.prioridade}>
                    <InfoPrincipal style={{ position: 'relative' }}>

                      <IconeEditar
                        className={nota.prioridade.toLowerCase()}
                        onClick={() => handleEditar(nota)}
                      >
                        <Pencil size={21} />
                      </IconeEditar>

                      <div className="linhaTopo">
                        <RadioFake
                          className={nota.prioridade.toLowerCase()}
                          onClick={() => inativar({ id: nota.id, ativo: false })}
                        />

                        <div className="dados">
                          <span className="nome">{nota.titulo}</span>

                          <div className="email">
                            <span>{nota.descricao}</span>
                          </div>

                          <Metricas>
                            <StatusNotas className={nota.prioridade.toLowerCase()}>
                              <Tipografias.TextoSimples>
                                {nota.prioridade}
                              </Tipografias.TextoSimples>
                            </StatusNotas>
                          </Metricas>
                        </div>
                      </div>
                    </InfoPrincipal>
                  </CardNotas>
                </>
              );
            })
          )}

          <ModalCustomizado
            open={modalAberto}
            onClose={() => setModalAberto(false)}
            title="Nova Nota"
            width={850}
          >
            <NotasNovo onFechar={() => setModalAberto(false)} />
          </ModalCustomizado>

          <ModalCustomizado open={modalEditarAberto} onClose={() => setModalEditarAberto(false)} title="Editar Nota" width={850}>
            <NotasEditar nota={notaSelecionada} onFechar={() => setModalEditarAberto(false)} />
          </ModalCustomizado>
        </Conteudo>
      </CardBrancoConteudo>
      <BackDropCustomizado aberto={isLoading} />
    </Container>
  );
};

import { Container, Conteudo } from './styles';
import { useMemo } from 'react';
// import { TabelaComponent } from '@shared/components/tabelas';
import type { GridColDef } from '@mui/x-data-grid';
import { BackDropCustomizado } from '@shared/components/backDrop';

interface IProps {
  abreModalEditar: boolean;
  setAbreModalEditar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cards = () => {
  // const { adicionaIdEmLocalStorage } = useLocalStorageNaturezas();

  const columns: GridColDef[] = useMemo(() => [
    {
      field: 'nome',
      headerName: 'Natureza',
      width: 400,
    },
    {
      field: 'naturezaPai',
      headerName: 'Natureza Pai',
      width: 300,
      renderCell: (params) => params?.row?.naturezaPai?.nome ? params?.row?.naturezaPai?.nome : 'N/A',
    },
    {
      field: 'ehNaturezapai',
      headerName: 'É Natureza Pai',
      width: 130,
      renderCell: (params) => params?.row?.ehNaturezapai ? 'Sim' : 'Não',
    },
    {
      field: 'ativa',
      headerName: 'Ativo',
      width: 100,
      renderCell: (params) => params?.row?.ehNaturezapai ? 'Sim' : 'Não',
    },
    {
      field: 'ehDespesa',
      headerName: 'Despesa',
      width: 100,
      renderCell: (params) => params?.row?.ehDespesa ? 'Sim' : 'Não',
    },
    // {
    //   field: 'editar',
    //   type: 'actions',
    //   headerName: 'Editar',
    //   width: 100,
    //   cellClassName: 'actions',
    //   getActions: ({ row }) => {
    //     return [
    //       <IconButton onClick={() => {
    //         setAbreModalEditar(true);
    //         adicionaIdEmLocalStorage(row);
    //       }}>
    //         <Pencil size={20} />
    //       </IconButton>,
    //       <IconButton onClick={() => console.log(row)}>
    //         <Trash size={20} />
    //       </IconButton>,
    //     ];
    //   },
    // },

  ], []);

  return (
    <Container>
      <Conteudo>
        {/* <TabelaComponent
          columns={columns ?? []}
          rows={data}
          loading={false}
        // getRowId={(usuario) => usuario.id}
        /> */}
      </Conteudo>
      {/* <BackDropCustomizado aberto={isLoading || isPending} /> */}
    </Container>
  );
};

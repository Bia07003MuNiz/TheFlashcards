import { Box, Button, css, styled } from '@mui/material';

export const Container = styled(Box)`
`;

export const Conteudo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
 `;

export const TabelaVazia = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
`
export const CirculoTabelaVazia = styled(Box)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardAluno = styled(Box)`
  width: 97%;
  background: #f8fafc;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  transition: border 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      border: 2px solid #b1beff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

    }

    .topo {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`
export const InfoPrincipal = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;

  .linhaTopo{
    display:flex;
    align-items:center;
    gap:12px;
    width:100%;
  }

  .barra{
    color:#cbd5e1;
    font-weight:600;
  }

  .dados {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .nome {
    font-size: 18px;
    font-weight: 600;
    color: #0f172a;
  }

  .email {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #64748b;
    font-size: 14px;
  }
`;

export const Metricas = styled(Box)`
  display: flex;
  gap: 20px;

  .boxErros {
    width: 200px;
    background: #fef2f2;
    border: 1px solid #ffc9c9;
    border-radius: 12px;
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #c10007;
  }
  .boxAcerto {
    width: 200px;
    background: #f0fdf4;
    border: 1px solid #c8f9da;
    border-radius: 12px;
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #008236;
  }

  .boxTentativa{
    width: 200px;
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    background-color: #ffffff; 
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  }
`

export const CardBrancoConteudo = styled(Box)`
  width: 100%;
  min-height: 450px;
  padding: 24px;
  background-color: #ffffff; 
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;


export const ConteudoAdicionarNota = styled(Box)`
  display: flex;
  justify-content: center;
  width: 95%;
  height: 60px;
`;

export const AdicionarNotaDiv = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  padding: 12px;
  background-color: #f1f5f9;
  border: 2px dashed #cad5e2;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  color: #314158;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e2e8f0;
  }
`;

export const CardNotas = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'prioridade',
}) <{
  prioridade: "ALTA" | "MEDIA" | "BAIXA";
}>`
  position: relative;
  width: 95%;
  padding: 20px 24px 20px 32px;
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;

  display: flex;
  flex-direction: column;
  gap: 12px;

  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);

  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;

    background-color: ${({ prioridade }) =>
    prioridade === "ALTA"
      ? "#eb000b"
      : prioridade === "MEDIA"
        ? "#d48900"
        : "#27a63e"};
  }
`;

export const StatusNotas = styled(Box)`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;

  &.alta {
    background: #fef2f2;
    color: #eb000b;
  }

  &.media {
    background: #fefce8;
    color: #d48900;
  }

  &.baixa {
    background: #f0fdf4;
    color: #27a63e;
  }

  & span, & p {
    color: inherit;
  }
`;

export const RadioFake = styled(Box)`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #cbd5e1;
  cursor: pointer;
  transition: all 0.2s;

  &.alta {
    border-color: #eb000b;

    &:hover {
      background: #fef2f2;
        border-color: #eb000b;
    }
  }

  &.media {
    border-color: #d48900;

    &:hover {
      background: #fefce8;
    }
  }

  &.baixa {
    border-color: #27a63e;

    &:hover {
      background: #f0fdf4;
    }
  }
`;

export const IconeEditar = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &.alta {
    color: #eb000b;
  }

  &.media {
    color: #d48900;
  }

  &.baixa {
    color: #27a63e;
  }
`;
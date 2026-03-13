import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
`;


export const Conteudo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
`;


export const ConteudoInical = styled(Box)`
  display: flex;
  flex-direction: column; /* 👈 empilha */
  width: 100%;
  gap: 12px; /* espaço entre as divs */

  .textos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .voltar{
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
`;

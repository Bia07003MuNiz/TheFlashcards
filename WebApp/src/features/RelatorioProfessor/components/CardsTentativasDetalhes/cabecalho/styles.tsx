import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
`;

export const Conteudo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const ConteudoInical = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  .voltar {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .textos {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;
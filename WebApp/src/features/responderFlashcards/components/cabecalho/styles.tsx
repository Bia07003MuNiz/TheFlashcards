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
  justify-content: space-between;
  width: 100%;
  .textos{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
  }

  .botao{
    margin-top: 15px;
  }
`;

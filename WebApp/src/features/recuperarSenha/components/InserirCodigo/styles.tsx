import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  width: 100%;
  min-width: 0; 
`;


export const Conteudo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 6%;
  justify-content: center;

  width: 100%;
  max-width: 640px;   
  overflow: hidden;   

  .areaTexto{
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    justify-content: center;
  }

  .voltar{
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
`;


export const Form = styled('form')`
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
justify-content: center;
  width: 100%;
  min-width: 0;
`;

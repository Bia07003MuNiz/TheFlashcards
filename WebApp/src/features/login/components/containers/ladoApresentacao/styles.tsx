import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
  width: 640px;
  min-width: 480px;
  max-width: 640px;
`;

export const Conteudo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  height: 532px;
  .areaTexto{
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;


export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
  width: 100%;
  
  .recuperarSenha{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .esqueci_minha_senha{
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #EA5B0B;
      cursor: pointer;
      white-space: nowrap;
    }
  }
`;



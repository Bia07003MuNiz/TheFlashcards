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

  width: 100%;
  max-width: 640px;   
  overflow: hidden;   

  .areaTexto{
    display: flex;
    flex-direction: column;
    gap: 6px;
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

  width: 100%;
  min-width: 0;

  & > * {
    width: 100%;
    max-width: 100%;
    min-width: 0;   
  }
  
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
      color: ${({ theme }) => theme.palette.primary.main};
      cursor: pointer;
      white-space: nowrap;
    }

   
  }

  .areaCadastro{
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: 4px;

    .nao_tem_conta{
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: ${({ theme }) => theme.palette.text.secondary};
      white-space: nowrap;
    }
      
    .criar_conta{
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: ${({ theme }) => theme.palette.primary.main};
      cursor: pointer;
      white-space: nowrap;
    }
  }
`;

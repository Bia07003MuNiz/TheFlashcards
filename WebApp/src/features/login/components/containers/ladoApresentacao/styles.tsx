import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  width: 640px;
  min-width: 400px;
  max-width: 640px;
`;

export const Conteudo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 400px;
  .areaTexto{
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
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


export const Divider = styled('hr')`
  width: 100%;
  border: none;
  border-top: 2px solid #f1f5f9;
`;


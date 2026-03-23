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
  }
`;

export const TipoConta = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Cards = styled(Box)`
  display: flex;
  gap: 12px;
  width: 100%;

  .card {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    padding: 12px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;

    color: #64748b;
    cursor: pointer;
    transition: 0.2s;

    white-space: nowrap;          
    overflow: hidden;             
    text-overflow: ellipsis;      
    min-width: 0;                 
  }

  .card:hover {
    border-color: #94a3b8;
  }

  .card.ativo {
    border-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const LabelTipoConta = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #334155;
`;

export const Form = styled('form')`
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

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


export const Divider = styled('hr')`
  width: 100%;
  border: none;
  border-top: 2px solid #f1f5f9;
`;

export const Linha = styled(Box)`
 display: flex;
  gap: 12px;
  width: 100%;
  min-width: 0;

  & > * {
    flex: 1;
    min-width: 0;  
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
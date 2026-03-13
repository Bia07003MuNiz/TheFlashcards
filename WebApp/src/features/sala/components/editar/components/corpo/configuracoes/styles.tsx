import { Box, styled, Typography } from '@mui/material';

export const InputContainer = styled(Box)`
  width: 100%;
  margin-top: 16px;
`;

export const ContainerConfiguracoesTextosLinha = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const ContainerConfiguracoesTextos = styled(Box)`
  display: flex;
    flex-direction: column;
    align-items: flex-start; 
    text-align: left;  

  .textos > * {
    margin: 0;
    padding: 0;
    line-height: 1;
    text-align: left;        
  }

  .textos > *:last-child {
    margin-top: -2px;
  }
`;

export const BlocoAzulIcon = styled(Box)`
  width: 36px;
  height: 36px;
  padding: 8px;
  background-color: #eef2ff;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsContainerConfiguracoes = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 5%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

  .textos {
    display: flex;
    align-items: center;
    gap: 8px;
  }
    .input {
      margin-top: 12px;
    }
`;

export const CardsInformacoesAdicionais = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: #fffbeb;
  border: 1px solid #fef3c6;
  border-radius: 14px;
  margin-top:16px;
`;

export const TextoInformacoesAdicionais = styled(Typography)`
  font-size: 14px;
  color: #973c00;
  font-weight: 500;

  strong {
    font-weight: 700;
  }
`;

export const ContainerBotao = styled(Box)`
  margin-top: 12px;
  display: flex;
  gap: 12px;
  flex-direction: row;

  .botaoCustomizado {
    width: 100%;
  }
  .MuiButton-root {
    border-radius: 14px;
  }

  .botaoCustomizado {
    height: 48px;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
  }
`;


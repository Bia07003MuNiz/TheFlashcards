import { Box, styled, Typography } from '@mui/material';

export const ContainerLayout = styled(Box)`
  display: flex;
  gap: 24px;
  width: 100%;
  align-items: flex-start;
`;

export const ColunaEsquerda = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ColunaDireita = styled(Box)`
  width: 35%;
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

export const CardsContainerInformacaoGeral = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

  .textos {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Divider = styled('hr')`
  width: 100%;
  border: none;
  border-top: 2px solid #f1f5f9;
  margin-top: 16px;
`;

export const InputContainer = styled(Box)`
  width: 100%;
  margin-top: 16px;
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

export const LinhaInputs = styled(Box)`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  & > div {
    flex: 1; // cada InputContainer ocupa metade da linha
  }
`;
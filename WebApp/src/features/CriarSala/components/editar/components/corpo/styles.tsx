import { Box, styled, Typography } from '@mui/material';

export const ContainerLayout = styled(Box)`
  display: flex;
  gap: 24px;
  width: 100%;
  align-items: flex-start;
`;

export const ColunaEsquerda = styled(Box)`
  width: 65%;
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

import { Box, styled, Typography } from '@mui/material';

export const InputContainer = styled(Box)`
  width: 100%;
  margin-top: 16px;
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

export const PrioridadesContainer = styled('div')`
  margin-top: 12px;
  width: 100%;

  .prioridades {
    display: flex;
    gap: 12px;
    width: 100%;
  }

  .prioridade {
    flex: 1;
    background: #ffffff;
    border: 2px solid #e2e8f0;
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    height: 48px;
  }

  .alta.ativa {
    background: #fef2f2;
    color: #e7000b;
    border: 2px solid #e7000b;
  }

  .media.ativa {
    background: #fefce8;
    color: #d08700;
    border: 2px solid #d08700;
  }

  .baixa.ativa {
    background: #f0fdf4;
    color: #00a63e;
    border: 2px solid #00a63e;
  }
`;

export const Label = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #334155;
  margin-bottom: 8px;
`;

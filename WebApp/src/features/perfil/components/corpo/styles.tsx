import { Box, styled, Typography } from '@mui/material';

export const InputContainer = styled(Box)`
  flex: 1;
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

export const CardBrancoConteudo = styled(Box)`
  width: 100%;
  min-height: 450px;
  padding: 24px;
  background-color: #ffffff; 
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;

export const LinhaInputs = styled(Box)`
  display: flex;
  gap: 16px;
  width: 100%;
`;
import { Box, styled } from '@mui/material';

export const ContainerLayout = styled(Box)`
  display: flex;
  gap: 24px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerCards = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
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

export const CardsContainerGeral = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 18px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

  .textos {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const InputContainer = styled(Box)`
  width: 100%;
  margin-top: 16px;
`;

export const LinhaInputs = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
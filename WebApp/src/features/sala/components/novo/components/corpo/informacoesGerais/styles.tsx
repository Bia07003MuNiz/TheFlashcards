import { Box, styled } from '@mui/material';

export const CardsContainerInformacaoGeral = styled(Box)`
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

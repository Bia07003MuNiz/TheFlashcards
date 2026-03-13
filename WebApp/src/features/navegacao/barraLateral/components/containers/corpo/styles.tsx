import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  gap: 24px;

  margin: 0 auto;
  width: 342px;
  height: 100vh;
  background-color: #FFF;
`;

export const ContainerItens = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
`;

export const ItemsDaSidebar = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;

export const Footer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ConteinerSair = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Divider = styled('hr')`
  width: calc(100% + 32px);
  margin-left: -16px;
  border: none;
  border-top: 2px solid #E5E7EB;
`;

export const PerfilContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const Avatar = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
   background: #e0e7ff;
  color: ${({ theme }) => theme.palette.primary.main};

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;
`;

export const PerfilInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  .role{
    font-size: 14px;
    font-weight: 700;
  }
`;
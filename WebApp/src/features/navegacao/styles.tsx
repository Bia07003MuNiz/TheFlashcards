import { Box, styled } from '@mui/material';

export const Corpo = styled(Box)`
    display: flex;
    height: 100vh; 
    overflow: hidden; 
`;

export const Pagina = styled(Box)`
  flex: 1;
  margin-left: 300px;   
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
`;

export const PaginaCompleta = styled(Box)`
  height: 100vh;
  overflow-y: auto;
  width: 100%;
`;

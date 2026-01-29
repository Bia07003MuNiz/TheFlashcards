import { Box, styled } from '@mui/material';



export const Conteudo = styled(Box) `
  display: flex;
  border-radius: 10px;
  padding: 13px;
  gap: 16px;
  width: 300px;       
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  z-index: 100;        
  overflow-y: hidden;

`;

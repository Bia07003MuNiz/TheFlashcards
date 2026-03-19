import { Box, Button, css, styled } from '@mui/material';

export const CardGrafico = styled(Box)`
  width: 98%;
  min-height: 300px;
  padding: 24px;
  background-color: #f8fafc; 
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;

export const Conteudo = styled(Box)`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export const ConteinerDireito = styled(Box)`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 2;

  .pontuacao{
    font-size: 15px;
    font-weight: 400;
  }
`;

export const ConteinerPontuacao = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 15px;
`;

export const ConteinerAcertosErros = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 25px;

  .cabecalho{
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .texto-corretas{
    color: #22c55e; 
  }
  
  .texto-incorretas{
    color: #ef4444;
  }
`;

export const ConteinerAcerto = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 10px;
  background-color: #f0fdf4;
  border: 2px solid #b9f8cf;


`;

export const ConteinerErro = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 10px;
  background-color: #fef2f2;
  border: 2px solid #ffc9c9;
`;

export const ConteinerData = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;
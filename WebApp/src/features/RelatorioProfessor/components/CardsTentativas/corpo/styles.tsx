import { Box, Button, css, styled } from '@mui/material';

export const Container = styled(Box)`
`;

export const Conteudo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
 `;

export const TabelaVazia = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top:90px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  text-align: center;
`
export const CirculoTabelaVazia = styled(Box)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardAluno = styled(Box)`
  width: 97%;
  background: #f8fafc;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  transition: border 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      border: 2px solid #b1beff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    }

    .topo {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`
export const InfoPrincipal = styled(Box)`
  display: flex;
  align-items: center;

 .dados {
    display: flex;
    flex-direction: column;
  }
  .nome {
    font-size: 18px;
    font-weight: 600;
    color: #0f172a;
  }
`
export const Metricas = styled(Box)`
  display: flex;
  gap: 16px;

  .boxErros {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #314158;
  }

  .boxAcerto {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #314158;
  }

  .boxTentativa{
    padding: 2px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #314158;
  }
`

export const CardBrancoConteudo = styled(Box)`
  width: 100%;
  min-height: 450px;
  padding: 24px;
  background-color: #ffffff; 
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;

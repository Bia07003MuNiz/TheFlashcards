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

    ${({ theme }) => theme.breakpoints.down("laptop")} {
    .topo {
      position: static;
      width: 100%;
      order: 4; // 👈 botão por último
    }
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
  
  ${({ theme }) => theme.breakpoints.down("laptop")} {
    order: 1; 
  }
`
export const Metricas = styled(Box)`
  display: flex;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "acerto erro" "data data";
    gap: 8px;
    order: 2; 
  }

  .boxAcerto {
    display: flex;
    align-items: center;
    gap: 8px;

    ${({ theme }) => theme.breakpoints.down("laptop")} {
      grid-area: acerto;
    }
  }

  .boxErros {
    display: flex;
    align-items: center;
    gap: 8px;

    ${({ theme }) => theme.breakpoints.down("laptop")} {
      grid-area: erro;
    }
  }

  .boxTentativa {
    display: flex;
    align-items: center;
    gap: 8px;

    ${({ theme }) => theme.breakpoints.down("laptop")} {
      grid-area: data;
      margin-top: 4px;
    }
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

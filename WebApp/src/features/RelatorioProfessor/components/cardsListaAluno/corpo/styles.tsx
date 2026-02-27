import { Box, Button, css, styled } from '@mui/material';

export const Container = styled(Box)`
`;

export const Conteudo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
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
  gap: 16px;
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
  gap: 24px;
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
  gap: 20px;

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #e0e7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 22px;
    color: #4f39f6;
  }

 .dados {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .nome {
    font-size: 18px;
    font-weight: 600;
    color: #0f172a;
  }

  .email {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #64748b;
    font-size: 14px;
  }
`
export const Metricas = styled(Box)`
  display: flex;
  gap: 20px;

  .boxErros {
    width: 200px;
    background: #fef2f2;
    border: 1px solid #ffc9c9;
    border-radius: 12px;
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #c10007;
  }
  .boxAcerto {
    width: 200px;
    background: #f0fdf4;
    border: 1px solid #c8f9da;
    border-radius: 12px;
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #008236;
  }

  .boxTentativa{
    width: 200px;
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    background-color: #ffffff; 
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  }
`

export const CardBrancoConteudo = styled(Box)`
  width: 100%;
  height: 450px;
  padding: 24px;
  background-color: #ffffff; 
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;

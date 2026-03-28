import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
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

export const CardBrancoConteudo = styled(Box)`
  width: 100%;
  min-height: 450px;
  background-color: #ffffff; 
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;

export const TopoCards = styled(Box)`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    flex-direction: column;
  }
`;

export const CardResumo = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10);
`;

export const IconeBox = styled(Box)<{ bg: string }>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bg }) => bg};
`;

export const InfoCard = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const HeaderHistorico = styled(Box)`
  width: 100%;
  background: #eff5ff;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 15px 15px 0px 0px;

  .cabecalho-sub {
    color: #64748b;
    font-weight: 400; 
  }
`;

export const ListaTentativas = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const IconeDireita = styled(Box)`
  display: flex;
  align-items: center;
  color: #64748b;
  transition: color 0.2s;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    position: absolute;
    top: 16px;
    right: 16px;
    align-self: flex-start;
    margin-top: 18px;
  }
`;
export const ItemTentativa = styled(Box)`
  position: relative; 
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #eef2f7;
  }

  &:hover .icone-direita {
    color: #000000;
  }

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const LadoEsquerdo = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;

  .data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    text-align: center;
  }

  .bloco-info {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    .data {
      align-items: flex-start;
      text-align: left;
    }
  }
`;

export const CirculoStatus = styled(Box)<{ cor: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ cor }) => cor};

  display: flex;
  align-items: center;
  justify-content: center;

  .porcentagem {
    color: #fff;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    width: 55px;
    height:48px;
  }
`;

export const ConteinerAcertos = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const InfoTentativa = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ChipStatus = styled(Box)<{ cor: string }>`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  background: ${({ cor }) => cor}20;
  color: ${({ cor }) => cor};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  ${({ theme }) => theme.breakpoints.down("laptop")} {
    display: none;
  }
`;


import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
  width: 100%;
  padding: 14px;
`;

export const LadoEsquerdo = styled(Box)`
  width: 100%;
`;

export const ConteinerCabecalhoGrafico = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
`;

export const Conteudo = styled(Box)`
  display: grid;
  grid-template-columns: 500px 1fr;
  height: 90%;
  gap: 24px;
`;

export const ConteudoInical = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .textos{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
  }

  .botao{
    margin-top: 15px;
  }
`;

export const ConteudoGrafico = styled(Box)`
  height: 260px;
`;

export const ConteudoLegendaGrafico = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 20px;

  .legenda{
   text-align: center;
  }

  .acertos{
    color: #22c55e;
    font-size: 20px;
    font-weight: 600;
  }

  .erros{
    color: #ef4444;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const LadoDireito = styled(Box)`
  width: 100%;
  height: 450px;

  .cabecalho-cards{
    margin-bottom: 24px;
  }
`;

export const CardBrancoConteudo = styled(Box)`
  width: 100%;
  min-height: 500px;
  padding: 24px;
  background-color: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.05);
`;

export const ListaPerguntas = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  max-height: 450px;
  padding-right: 8px;
`;

export const FooterBotoes = styled(Box)`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 16px;

  .botaoCustomizado{
    width: 35%;
    height: 50px;
  }
`;

export const CardPerguntaeResposta = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'correta',
})<{
  correta?: boolean;
}>`
  flex-shrink: 0;
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;

  display: flex;
  flex-direction: column;
  gap: 8px;

  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background-color: ${({ correta }) =>
      correta ? '#22c55e' : '#ef4444'};
  }
`;

export const ConteinerCardPergunta = styled(Box)`
  display: flex;
  gap: 8px;
`;

export const IconeStatus = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'correta',
}) <{
  correta?: boolean;
}>`
  width: 36px;
  height: 36px;
  min-width: 36px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 14px;
  color: ${({ correta }) => correta ? '#22c55e' : '#ef4444'};
`;
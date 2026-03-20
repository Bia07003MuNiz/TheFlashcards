import { Box, Button, css, styled } from '@mui/material';

export const Container = styled(Box)`
`;

export const Conteudo = styled(Box)`
 display: flex;
 flex-direction: column;
 gap: 20px;
`;

export const CardBrancoConteudo = styled(Box)`
  width: 100%;
  padding: 24px;
`;

export const CardPerguntaeResposta = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'correta',
}) <{
  correta?: boolean;
}>`
  position: relative;
  width: 100%;
  padding: 20px 24px 20px 32px;
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

export const CirculoNumero = styled(Box, {
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
  color: #ffffff;

  background-color: ${({ correta }) =>
    correta ? '#22c55e' : '#ef4444'};
`;


export const StatusResposta = styled(Box) <{ correta?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  font-weight: 600;
  font-size: 13px;
  color: ${({ correta }) =>
    correta ? '#22c55e' : '#ef4444'};
`;

export const ConteinerCardPergunta = styled(Box)`
  display: flex;
  gap: 20px;
`;

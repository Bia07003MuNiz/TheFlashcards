import { Box, Button, css, styled } from '@mui/material';

export const Container = styled(Box)`

`;

export const Conteudo = styled(Box)`
 display: flex;
 flex-direction: column;
 gap: 20px;
`;

export const Cabecalho = styled(Box)`
  display: flex;
  justify-content: space-between;
  .btn_ver_relatorios{
    width: 140px;
  }
`;

export const OpcoesDeMeses = styled(Box)`
 display: flex;
  gap: 4px;
`;

export const ContainerChipStatus = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ChipStatus = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'status',
}) <{
  status?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 8px 2px 6px;
  gap: 4px;

  height: 22px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;

  border-radius: 9999px;

 .indicador{
    width: 6px;
    height: 6px;
    border-radius: 9999px;
  } 

   ${({ status }) =>
    status === 'Pago' &&
    css`
        background: #ECFDF3;
        border: 1px solid #ABEFC6;
        color: #067647;
         .indicador{
          background: #17B26A;
        } 
      `}


   ${({ status }) =>
    status === 'Aberto' &&
    css`
        background: #FFFAEB;
        border: 1px solid #FEDF89;
        color: #B54708;
         .indicador{
          background: #F79009;
        } 
      `}

   ${({ status }) =>
    status === 'Atrasado' &&
    css`
        background: #FEF3F2;
        border: 1px solid #FECDCA;
        color: #B42318;
        .indicador{
          background: #F04438;
        } 
      `}
`;


export const BotaoDeOpcao = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'estaAtivo',
}) <{
  estaAtivo?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  border-radius: 6px;
  height: 36px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #7A7471;
    
    ${({ estaAtivo }) =>
    estaAtivo &&
    css`
        background: #FAFAFA;
        border-radius: 6px;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #46423F;
      `}
`;




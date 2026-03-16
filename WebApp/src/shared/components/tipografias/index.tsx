import { styled, Typography } from '@mui/material';



const Titulo = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 38px;
  color: #1e293b;
`;

const Medio = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #1e293b;
`;

const Legenda = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #64748b;
`;

const LegendaMedio = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1e293b;
`;

const TextoGrande = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #101828;
`;

const TextoSimples = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #1e293b;
`;

const LegendaSimples = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #64748b;
`;


export const Tipografias = {
  Titulo,
  Legenda,
  TextoGrande,
  Medio,
  LegendaMedio,
  TextoSimples,
  LegendaSimples
};

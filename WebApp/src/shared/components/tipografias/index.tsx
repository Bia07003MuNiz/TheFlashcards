import { styled, Typography } from '@mui/material';



const Titulo = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 38px;
  color: #1B1918;
`;

const Medio = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #1B1918;
`;

const Legenda = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #7A7471;
`;

const TextoGrande = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #101828;
`;


export const Tipografias = {
  Titulo,
  Legenda,
  TextoGrande,
  Medio,
};

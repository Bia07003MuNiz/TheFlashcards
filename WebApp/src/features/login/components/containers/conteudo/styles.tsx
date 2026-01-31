import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
    background: linear-gradient(
      180deg,
      #326afa 0%,
      #3b73ff 25%,
      #2f62f0 50%,
      #274fdc 75%,
    #243fc7 100%
  );
`;

export const Conteudo = styled(Box)`
  width: 512px;
  height: 433.2px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlocoAzul = styled(Box)`
  width: 67.6px;
  height: 67.6px;
  background-color: #4664e1;
  border: 1px solid #5471e4;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxTitulo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .titulo-apresentacao{
    font-size: 30px;
    color: #FFFFFF;
  }

  .legenda-apresentacao{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }
`;

export const BoxTexto = styled(Box)`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  align-items: center;

  .titulo-apresentacao {
    color: #fff;
    line-height: 1.2;
  }

  .legenda-apresentacao {
    color: #fff;
    line-height: 1.5;
  }
`;

export const BoxBlocoAzul = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 16px;
  display: flex;
  align-items: center;

  .blocoAzulCustomizado{
    width: 244px;
    height: 85.6px;
    flex-direction: column;
  }
  
  .titulo-apresentacao{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #FFFFFF;
  }
  .legenda-apresentacao{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }
`;

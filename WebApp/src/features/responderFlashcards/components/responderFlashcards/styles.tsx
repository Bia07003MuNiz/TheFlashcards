import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
  width: 100%;
  padding: 16px;
`;

export const Cabecalho = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .voltar {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const ProgressWrapper = styled(Box)`
  width: 200px;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    width: 100%;
  }
`;

export const ProgressTrack = styled(Box)`
  width: 100%;
  height: 14px;
  background: #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
`;

export const ProgressFill = styled(Box)<{ progresso: number }>`
  height: 100%;
  background: ${({ progresso }) => progresso >= 100 ? '#432dd7' : 'var(--primary)'};
  border-radius: 12px;
  transition: width 0.4s ease, background 0.4s ease;
`;

export const CardWrapper = styled(Box)`
  margin-top: 30px;
  perspective: 1000px;
  display: flex;
  justify-content: center;
`;

export const CardFlip = styled(Box)`
  position: relative;
  width: 70%;
  height: 450px;

  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;

  &.virado {
    transform: rotateY(180deg);
  }

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    width: 100%;
    height: 320px;
  }
`;

export const CardFace = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const CardBrancoConteudo = styled(Box)`
  width: 100%;
  height: 100%;

  padding: 24px;
  background-color: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 16px;

  box-shadow:
    0px 8px 20px rgba(0,0,0,0.05),
    0px 2px 6px rgba(0,0,0,0.05);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    padding: 16px;
    align-items: center;
    justify-content: center;
  }
`;

export const CardVerso = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 24px;

  background: #eef2ff;
  border: 2px solid #ccd6ff;
  border-radius: 16px;

  box-shadow:
    0px 8px 20px rgba(0,0,0,0.05),
    0px 2px 6px rgba(0,0,0,0.05);

  transform: rotateY(180deg);
  backface-visibility: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    padding: 16px;
    align-items: center;
    justify-content: center;
  }
`;

export const RotateText = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #64748b;
`;

export const Botoes = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  gap: 16px;

  .linha {
    display: flex;
    justify-content: center;
    gap: 36px;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    .linha {
      gap: 12px;
    }
  }
`;
export const BotaoErro = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 35%;
  padding: 16px 24px;
  border-radius: 10px;
  border: 2px solid #f0565d;
  background: white;
  color: #f0565d;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #fdf1f1;
  }

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    width: 45%;
    font-size: 14px;
    padding: 12px 16px;
  }
`;

export const BotaoAcerto = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 35%;
  padding: 16px 24px;
  border-radius: 10px;
  border: 2px solid #008136;
  background: #008136;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #008035;
  }

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    width: 45%;
    font-size: 14px;
    padding: 12px 16px;
  }
`;
export const BotaoFinalizar = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 71.5%;
  padding: 16px 24px;
  border-radius: 10px;
  background: ${({ theme }) => theme.palette.primary.main};
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
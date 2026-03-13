import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
  width: 100%;
  padding: 16px;
`;

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Titulo = styled(Box)`
  font-size: 20px;
  font-weight: 600;
`;

export const Subtitulo = styled(Box)`
  font-size: 14px;
  color: #64748b;
`;

export const ProgressWrapper = styled(Box)`
  width: 200px;
`;


export const ProgressTrack = styled(Box)`
  width: 100%;
  height: 14px;
  background: #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
`;


export const ProgressFill = styled(Box)`
  height: 100%;
  background: var(--primary);
  border-radius: 12px;
  transition: width 0.4s ease;
`;



export const CardWrapper = styled(Box)`
  margin-top: 40px;
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
`;


export const Label = styled(Box)`
  font-size: 13px;
  font-weight: 600;
  color: #64748b;
  letter-spacing: 1px;
`;

export const Pergunta = styled(Box)`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
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
  justify-content: space-between;
`;

export const BotaoErro = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px 20px;
  border-radius: 10px;
  border: 2px solid #f0565d;
  background: white;
  color: #f0565d;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #fdf1f1;
  }
`;

export const BotaoAcerto = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px 20px;
  border-radius: 10px;
  border: 2px solid #008136;
  background: #008136;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #008035;
  }
`;

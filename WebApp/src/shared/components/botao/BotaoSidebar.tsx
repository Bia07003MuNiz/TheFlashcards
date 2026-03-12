import { Button, type ButtonPropsSizeOverrides, type ButtonPropsVariantOverrides, css, styled } from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';

interface IBotaoSidebar {
  estaAtivo?: boolean;
  titulo?: string;
  size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>;
  variant?: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides> | undefined;
  startIcon?: React.ReactNode;
  onClick?: () => void;
}

export const BotaoSidebar = ({
  estaAtivo,
  titulo,
  variant = 'text',
  size = 'large',
  startIcon,
  onClick,
}: IBotaoSidebar) => {
  return (
    <BotaoCustomizado
      estaAtivo={estaAtivo}
      variant={variant}
      size={size}
      fullWidth
      startIcon={startIcon}
      onClick={onClick}
    >
      {titulo}
    </BotaoCustomizado>
  );
};

export const BotaoCustomizado = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'estaAtivo',
}) <{
  estaAtivo?: boolean;
}>`
  font-size: 14px;
  font-weight: 500;
  color: #0b1220;
  padding: 8px 12px;
  gap: 8px;
  height: 40px;
  border-radius: 6px;
  justify-content: flex-start;


  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #46423F;
  width: 100%;

  
  svg{ width: 24px }
  
  ${({ estaAtivo }) =>
    estaAtivo &&
    css`
      background: #4f39f6;
      margin-left: auto;
      color: #fff;
      font-weight: 600;
    `}
`;

import { Button, type ButtonPropsSizeOverrides, type ButtonPropsVariantOverrides, styled } from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';

interface IBotaoPrimario {
  estaAtivo?: boolean;
  disabled?: boolean;
  titulo?: string;
  className?: string;
  size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>;
  variant?: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides> | undefined;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

export const BotaoPrimario = ({
  titulo,
  variant = 'contained',
  size = 'large',
  startIcon,
  onClick,
  endIcon,
  className,
  disabled,
}: IBotaoPrimario) => {
  return (
    <BotaoCustomizado
      variant={variant}
      className={className}
      size={size}
      fullWidth
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
    >
      {titulo}
    </BotaoCustomizado>
  );
};

export const BotaoCustomizado = styled(Button)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: 4px;
  height: 40px;
  background: #EA5B0B;
  border: 1px solid #EE7C3C;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
`;

import { Button, type ButtonPropsSizeOverrides, type ButtonPropsVariantOverrides, styled } from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';

interface IBotaoSecundario {
  estaAtivo?: boolean;
  titulo?: string;
  className?: string;
  size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>;
  variant?: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides> | undefined;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

export const BotaoSecundario = ({
  titulo,
  variant = 'outlined',
  size = 'large',
  startIcon,
  onClick,
  endIcon,
  className,
}: IBotaoSecundario) => {
  return (
    <BotaoCustomizado
      variant={variant}
      className={className}
      size={size}
      fullWidth
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {titulo}
    </BotaoCustomizado>
  );
};

export const BotaoCustomizado = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: 4px;

  height: 40px;

  background: #FFFFFF;
  border: 1px solid #BFBFBF !important;

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #46423F;

  svg{
    width: 20px;
    color: #46423F;
  }
`;

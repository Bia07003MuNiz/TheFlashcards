import { Button, ButtonGroup, type ButtonPropsSizeOverrides, type ButtonPropsVariantOverrides, styled } from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';

interface IBotaoDoGrupo {
  estaAtivo?: boolean;
  titulo?: string;
  className?: string;
  size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>;
  variant?: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides> | undefined;
  onClick?: () => void;
  startIcon?: React.ReactNode
}


interface IButtonGroup {
  estaAtivo?: boolean;
  botoes?: IBotaoDoGrupo[];
  className?: string;
  size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>;
  variant?: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides> | undefined;
  onClick?: () => void;
}

export const BotaoGrupo = ({
  botoes,
  variant = 'contained',
  size = 'large',
  onClick,
  className,
}: IButtonGroup) => {
  return (
    <Container
      variant={variant}
      className={className}
      size={size}
      fullWidth
      onClick={onClick}
    >
      {botoes?.map(botaoProps => <BotaoCustomizado {...botaoProps}
        key={botaoProps.titulo}>{botaoProps.titulo}</BotaoCustomizado>)}
    </Container>
  );
};



export const Container = styled(ButtonGroup)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  isolation: isolate;
  border-radius: 8px;
  background-color: transparent;
`;



export const BotaoCustomizado = styled(Button, {
  shouldForwardProp: (propName) => propName !== 'estaAtivo',
}) <{
  estaAtivo?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  border: 1px solid #D8D5D4 !important;
  border-radius: 8px;
  background: ${({ estaAtivo }) => estaAtivo ? '#FAFAFA' : '#FFFFFF'} ;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #46423F;
  
`;

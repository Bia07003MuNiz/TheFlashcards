import type { FC, ReactNode } from 'react';
import { Box, styled, Typography } from '@mui/material';

export const CardsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  gap: 24px;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }
`;

const CardHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardBase = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 24px;
  background: #ffffff;
  border-radius: 16px;
  border: 2px solid #f1f5f9;

  box-shadow:
    0px 10px 15px -3px rgba(0, 0, 0, 0.10),
    0px 4px 6px -4px rgba(0, 0, 0, 0.10);

  display: flex;
  flex-direction: column;
  gap: 10px;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow:
      0px 20px 25px -5px rgba(0, 0, 0, 0.12),
      0px 10px 10px -5px rgba(0, 0, 0, 0.08);
  }
`;

const LinhaIconLegenda = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface CardItemProps {
    label: string;
    icon: ReactNode;
    legenda: ReactNode;
    botao: ReactNode;
    chip?: ReactNode;
}

export const CardItem: FC<CardItemProps> = ({
    label,
    icon,
    legenda,
    botao,
    chip,
}) => {
    return (
        <CardBase>
            <CardHeader>
                <Typography fontSize={14} fontWeight={600}>
                    {label}
                </Typography>

                {chip && chip}
            </CardHeader>

            <LinhaIconLegenda>
                {icon}
                {legenda}
            </LinhaIconLegenda>

            <div className="botao">{botao}</div>
        </CardBase>
    );
};

interface CardsComponentProps {
    items: CardItemProps[];
    emptyState?: ReactNode;
    className?: string;
}

export const CardsComponent: FC<CardsComponentProps> = ({
    items,
    emptyState,
    className,
}) => {
    if (!items.length) return <>{emptyState ?? null}</>;

    return (
        <CardsContainer className={className}>
            {items.map((item, index) => (
                <CardItem key={index} {...item} />
            ))}
        </CardsContainer>
    );
};
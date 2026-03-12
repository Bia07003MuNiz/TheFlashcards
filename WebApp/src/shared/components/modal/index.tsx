import * as React from 'react';
import { Modal, Box, styled, IconButton } from '@mui/material';
import { X } from 'lucide-react';
import { Tipografias } from '../tipografias';

type ModalCustomizadoProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    width?: number | string;
};

export const ModalCustomizado: React.FC<ModalCustomizadoProps> = ({
    open,
    onClose,
    title,
    children,
    width = 400,
}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalContainer width={width}>
                {title && (
                    <CabecalhoContainer                    >
                        <Tipografias.LegendaMedio>{title}</Tipografias.LegendaMedio>
                        <IconButton onClick={onClose}>
                            <X size={20} />
                        </IconButton>
                    </CabecalhoContainer>
                )}

                {children}
            </ModalContainer>
        </Modal>
    );
};

export const ModalContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "width",
}) <{ width?: number | string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 11px 15px rgba(0,0,0,0.2);
  padding: 24px;
`;

export const CabecalhoContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
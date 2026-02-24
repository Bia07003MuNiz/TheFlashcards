import * as React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import { X } from 'lucide-react';

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
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                {title && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 2,
                        }}
                    >
                        <Typography variant="h6">{title}</Typography>
                        <IconButton onClick={onClose}>
                            <X size={20} />
                        </IconButton>
                    </Box>
                )}

                {children}
            </Box>
        </Modal>
    );
};
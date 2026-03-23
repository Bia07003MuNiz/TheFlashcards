import { Box, Typography, styled, type TextFieldProps } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';

type InputCodigoProps = {
  label: string;
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;           // 👈 adicionado
  helperText?: string;       // 👈 adicionado
};

export const InputCodigo: React.FC<InputCodigoProps> = ({
  label,
  length = 6,
  value = '',
  onChange,
  error,
  helperText,
}) => {
  const [codigo, setCodigo] = useState(value.padEnd(length, ''));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    setCodigo(value.padEnd(length, ''));
  }, [value, length]);

  const handleChange = (index: number, val: string) => {
    if (!/^[0-9]?$/.test(val)) return;

    const novoCodigo = codigo.split('');
    novoCodigo[index] = val;
    setCodigo(novoCodigo.join(''));

    onChange?.(novoCodigo.join(''));

    // Move focus para o próximo input
    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !codigo[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <InputsContainer>
        {Array.from({ length }).map((_, i) => (
          <StyledTextField
            key={i}
            value={codigo[i] || ''}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e as React.KeyboardEvent<HTMLInputElement>)}
            inputProps={{ maxLength: 1 }}
            inputRef={(el) => (inputsRef.current[i] = el!)}
            style={{ borderColor: error ? '#ef4444' : undefined }} // 👈 borda vermelha no erro
          />
        ))}
      </InputsContainer>
      {helperText && (  // 👈 mensagem de erro
        <Typography fontSize={12} color={error ? '#ef4444' : '#94a3b8'}>
          {helperText}
        </Typography>
      )}
    </Container>
  );
};

// Reaproveita seu StyledTextField
const StyledTextField = styled('input')<TextFieldProps>`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background-color: #fff;
  outline: none;
  transition: border-color 0.2s;

  &:hover {
    border-color: #cbd5e1;
  }

  &:focus {
    border-color: #3b82f6;
  }

  &::placeholder {
    color: #94a3b8;
    opacity: 1;
  }
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  justify-content: center;
  align-items: center;
  
`;

const Label = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #334155;
`;

const InputsContainer = styled(Box)`
  display: flex;
  gap: 8px;
`;
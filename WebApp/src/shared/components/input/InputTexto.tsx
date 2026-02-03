import { Box, Typography, TextField, styled, type TextFieldProps } from '@mui/material';
import React, { } from 'react';

type InputTextoProps = TextFieldProps & {
  label: string;
  maxLength?: number;
};

export const InputTexto = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputTextoProps
>(({ label, error, helperText, placeholder, maxLength = 1000, value, onChange, ...props }, ref) => {
  const [textoAtual, setTextoAtual] = React.useState((value as string) || '');

  React.useEffect(() => {
    setTextoAtual((value as string) || '');
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTextoAtual(e.target.value);
    onChange?.(e);
  };

  // Sincroniza o valor interno quando o valor controlado do RHF muda (ex.: reset())
  React.useEffect(() => {
    setTextoAtual((value as string) || '');
  }, [value]);

  return (
    <Container>
      <Label>{label}</Label>
      <StyledTextField
        multiline
        minRows={3}
        maxRows={15}
        placeholder={placeholder}
        error={!!error}
        helperText={error ? helperText : ''}
        inputRef={ref}
        value={textoAtual}
        onChange={handleChange}
        inputProps={{ maxLength }}
        {...props}
      />
    </Container>
  );
});


const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #334155;
`;

const StyledTextField = styled(TextField) <TextFieldProps>`
  & .MuiOutlinedInput-root {
    min-height: 40px;
    padding: 12px;
    border-radius: 12px;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    gap: 12px;

    & .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    &:hover {
      border-color: #cbd5e1;
    }

    &.Mui-focused {
      border-color: #3b82f6;
    }
  }

  & .MuiInputBase-input {
    padding: 0;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;

    &::placeholder {
      color: #94a3b8;
      opacity: 1;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
    }
  }

  & .MuiInputAdornment-root {
    margin: 0;
    padding-right: 12px;
  }

  & .MuiFormHelperText-root {
    margin-left: 0;
    font-size: 12px;
    color: #d32f2f;
  }
`;

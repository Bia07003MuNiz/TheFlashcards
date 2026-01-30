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
        minRows={10}
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
  gap: 4px;
`;

const Label = styled(Typography)`
  font-family: Inter;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #6b7280;
`;
const StyledTextField = styled(TextField) <TextFieldProps>`
  & .MuiOutlinedInput-root {
    padding: 13px;
    border-radius: 8px;
    background-color: #ffffff;
    border: 1px solid #e6eef6;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #6b7280;

    &.Mui-focused {
      border: 1px solid #e6eef6;
    }

    &:hover {
      border: 1px solid #e6eef6;
    }

    & .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }

  textarea {
    resize: none;
  }

  & .MuiFormHelperText-root {
    margin-left: 0;
    margin-top: 4px;
    font-size: 12px;
    color: #d32f2f;
  }
`;

import { Box, TextField, styled, type TextFieldProps, Typography } from '@mui/material';
import React, { type JSX } from 'react';

type InputComumProps = TextFieldProps & {
  label?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};


export const InputComum = React.forwardRef<HTMLInputElement, InputComumProps>(
  ({ label, error, helperText, placeholder, startAdornment, endAdornment, disabled, ...props }, ref) => {
    return (
      <Container>
        {
          label ? <Label>{label}</Label> : null
        }
        <StyledTextField
          placeholder={placeholder}
          variant="outlined"
          error={!!error}
          disabled={disabled}
          fullWidth
          helperText={error ? helperText : ''}
          inputRef={ref}
          slotProps={{
            input: {
              startAdornment,
              endAdornment,
            },
          }}
          {...props}
        />
      </Container>
    );
  },
);

const Label = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #334155;
`;

const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;`;


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

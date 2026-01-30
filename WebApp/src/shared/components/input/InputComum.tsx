import { Box, TextField, styled, type TextFieldProps, Typography } from '@mui/material';
import React, { type JSX } from 'react';

type InputComumProps = TextFieldProps & {
  label?: string;
  startAdornment?: JSX.Element
  endAdornment?: JSX.Element
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
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #6b7280;
`;

const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;


const StyledTextField = styled(TextField) <TextFieldProps>`
  & .MuiOutlinedInput-root {
    height: 42px;
    padding: 0 13px;
    border-radius: 8px;
    background-color: #ffffff;
    border: 1px solid #e6eef6;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    gap: 6px;


    & .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }

  & .MuiFormHelperText-root {
    margin-left: 0;
    font-size: 12px;
    color: #d32f2f;
  }

  & .MuiInputBase-input {
    padding: 0;
    &::placeholder{
    font-style: normal;
    font-weight: 600 !important;
    font-size: 13px;
    line-height: 16px;
    color: #0B1220 !important;
    }
  }
`;

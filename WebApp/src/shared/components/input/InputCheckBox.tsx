import { Box, styled, Typography, Checkbox, type CheckboxProps } from '@mui/material';
import React, { type JSX } from 'react';

type InputComumProps = CheckboxProps & {
  label?: string;
  startAdornment?: JSX.Element
  endAdornment?: JSX.Element
};

export const InputCheckBox = React.forwardRef<HTMLInputElement, InputComumProps>(
  ({ label, disabled, ...props }, ref) => {
    return (
      <Container>
        <StyledCheckbox
          disabled={disabled}
          inputRef={ref}
          {...props}
        />
        {
          label ? <Label>{label}</Label> : null
        }
      </Container>
    );
  },
);

const Label = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #111827;
`;

const Container = styled(Box)`
  width: 100%;
  display: flex;
`;


const StyledCheckbox = styled(Checkbox) <CheckboxProps>`
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

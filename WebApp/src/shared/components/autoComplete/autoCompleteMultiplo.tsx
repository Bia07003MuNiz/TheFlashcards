'use client';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography, styled, type TextFieldProps } from '@mui/material';

interface BaseOption {
  label: string;
  id?: string | number;
  value?: string;
}

interface IAutoCompleteMultiplo<T extends BaseOption> {
  options: T[];
  label: string;
  value: T[] | undefined;
  placeholder?: string;
  handleChangeState: (value: T[]) => void;
  error?: boolean;
  helperText?: string;
  loading?: boolean;
  noOptionsText?: string;
  disabled?: boolean;
  limitTags?: number;
}

export const AutoCompleteMultiplo = <T extends BaseOption>({
  label,
  options,
  value,
  placeholder,
  handleChangeState,
  error,
  helperText,
  loading = false,
  noOptionsText = 'Nenhum item disponível',
  disabled = false,
  limitTags,
}: IAutoCompleteMultiplo<T>) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Container>
      <Label>{label}</Label>

      <Autocomplete
        multiple
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        options={options}
        value={value}
        limitTags={limitTags}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        isOptionEqualToValue={(option, value) => {
          return option.value === value.value;
        }}
        onChange={(_event, newValue) => {
          handleChangeState(newValue);
        }}

        disablePortal
        fullWidth
        popupIcon={null}
        loading={loading}
        noOptionsText={noOptionsText}
        disabled={disabled}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            variant="outlined"
            placeholder={value?.length === 0 ? placeholder : ''}
            error={!!error}
            helperText={error ? helperText : ''}
            disabled={disabled}
          />
        )}
      />
    </Container>
  );
};
const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 10px;
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
    padding: 8px;
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

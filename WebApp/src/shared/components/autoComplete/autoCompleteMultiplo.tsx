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
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #6b7280;
`;

const StyledTextField = styled(TextField) <TextFieldProps>`
  & .MuiOutlinedInput-root {

    min-height: 42px;
    height: auto; 
    padding: 2px 6px;
    border-radius: 8px;
    background-color: #ffffff;
    border: 1px solid #e6eef6;
    color: #6b7280;
    border: none;


    &.Mui-disabled {
      color: #9e9e9e;
    }

    & .MuiOutlinedInput-notchedOutline {
    }

    & .MuiAutocomplete-tag {
      margin: 2px;
      height: 26px; 
      font-size: 14px;
      background-color: #ffffff; 
    }
  }

  & .MuiInputBase-input {
    padding: 4px 6px !important; 
    min-width: 30px; 
  }

  & .MuiFormHelperText-root {
    margin-left: 0;
    font-size: 12px;
    color: #d32f2f;
  }
`;

'use client';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography, styled, type TextFieldProps } from '@mui/material';

interface BaseOption {
  label: string;
  id?: string | number;
  value?: string | number;
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
  min-width: 0;      /* importante para flexbox */
`;


const Label = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #334155;
`;

const StyledTextField = styled(TextField) <TextFieldProps>`
  box-sizing: border-box;

  & .MuiOutlinedInput-root {
    width: 100%;
    max-width: 100%;
    min-width: 0;

    display: flex;
    flex-wrap: nowrap;

    padding: 8px;
    border-radius: 12px;
    background-color: #fff;
    border: 1px solid #e5e7eb;

    overflow: hidden; /* impede expandir */

    & .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }

  /* CONTAINER DOS CHIPS */
  & .MuiAutocomplete-inputRoot {
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%;
    min-width: 0;
  }

  /* INPUT */
  & .MuiAutocomplete-input {
    flex: 1 1 120px; /* base mínima */
    min-width: 120px;
    max-width: 100%;
  }

  /* CHIP */
  & .MuiAutocomplete-tag {
    max-width: calc(100% - 8px);
    flex-shrink: 1;         /* NÃO deixa crescer */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
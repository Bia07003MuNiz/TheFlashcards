import { Box, Typography, styled } from '@mui/material';
import { DatePicker, type DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';

type InputDataProps = DatePickerProps<Dayjs> & {
  label?: string;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
};

export const InputData = ({
  label,
  error,
  helperText,
  placeholder,
  onBlur,
  ...props
}: InputDataProps & { onBlur?: () => void }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Container>
        {label ? <Label>{label}</Label> : null}

        <StyledDatePicker
          format="DD/MM/YYYY"
          slotProps={{
            textField: {
              placeholder,
              error,
              helperText: error ? helperText : '',
              onBlur,
            },
          }}
          {...props}
        />
      </Container>
    </LocalizationProvider>
  );
};

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

const StyledDatePicker = styled(DatePicker<Dayjs>)`
  & .MuiOutlinedInput-root {
    height: 42px;
    padding: 0 13px;
    border-radius: 8px;
    background-color: #ffffff;
    border: 1px solid #e6eef6;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    & .MuiOutlinedInput-notchedOutline {
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
    font-weight: 600 !important;
    font-size: 13px;
    line-height: 16px;
    color: #0b1220 !important;

    &::placeholder {
      color: #0b1220 !important;
      opacity: 0.6;
    }
  }
`;

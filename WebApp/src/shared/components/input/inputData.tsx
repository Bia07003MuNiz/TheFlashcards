import { Box, TextField, Typography, styled, type TextFieldProps } from '@mui/material';
import { DatePicker, type DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br';

type InputDataProps = DatePickerProps<any> & {
  label?: string;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  onBlur?: () => void;
};

export const InputData = ({
  label,
  error,
  helperText,
  placeholder,
  onBlur,
  ...props
}: InputDataProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Container>
        {label && <Label>{label}</Label>}
        <DatePicker
          enableAccessibleFieldDOMStructure={false}
          format="DD/MM/YYYY"
          slots={{ textField: StyledTextField }}
          slotProps={{
            textField: {
              placeholder,
              error,
              helperText: error ? helperText : '',
              onBlur,
              fullWidth: true,
            } as TextFieldProps,
          }}
          {...props}
        />
      </Container>
    </LocalizationProvider>
  );
};

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
  gap: 6px;
`;

const StyledTextField = styled(TextField)<TextFieldProps>`
  & .MuiOutlinedInput-root {
    height: 44px;
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
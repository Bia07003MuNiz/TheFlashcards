import { FormControlLabelCustomizado, Label, SwitchCustomizado } from './styles';
import type { FC } from 'react';

interface IInputSwitche {
  checked: boolean
  disabled?: boolean
  label: string
  className?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputSwitche: FC<IInputSwitche> = ({ checked, handleChange, label, className, disabled }) => {
  return (
    <FormControlLabelCustomizado className={className}>
      <SwitchCustomizado onChange={handleChange} checked={checked} disabled={disabled} />
      {label && <Label>{label}</Label>}
    </FormControlLabelCustomizado>
  );
};

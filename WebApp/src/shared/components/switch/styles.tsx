import { Box, styled, Switch, Typography } from '@mui/material';

export const SwitchCustomizado = styled(Switch)`
  width: 42px;
  height: 26px;
  padding: 0;

  & .MuiSwitch-switchBase {
    padding: 0;
    margin: 2px;
    transition-duration: 300ms;

    &.Mui-checked {
      transform: translateX(16px);
      color: #fff;
      & + .MuiSwitch-track {
        opacity: 1;
        border: 0;
      }
      &.Mui-disabled + .MuiSwitch-track {
        opacity: 0.5;
      }
    }
  }

  & .MuiSwitch-thumb {
    box-sizing: border-box;
    width: 22px;
    height: 22px;
  }

  & .MuiSwitch-track {
    border-radius: 13px;
    background-color: #e9e9ea;
    opacity: 1;
    transition: background-color 500ms;
  }
`;


export const Label = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #46423F;

`;
export const FormControlLabelCustomizado = styled(Box)`
  display: flex;
  gap: 12px;
`;

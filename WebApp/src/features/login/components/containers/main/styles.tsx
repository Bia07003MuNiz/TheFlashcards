import { Box, styled } from '@mui/material';

export const Corpo = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;

  .lado-apresentacao-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    & > :first-child {
      display: none;
    }

    .lado-apresentacao-container {
      width: 100%;
      height: 100vh;
    }
  }
`;

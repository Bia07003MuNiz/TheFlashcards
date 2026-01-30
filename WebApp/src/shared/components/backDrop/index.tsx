import { Backdrop, CircularProgress } from '@mui/material';
import { type FC, useEffect, useState } from 'react';

export const BackDropCustomizado: FC<{
  aberto: boolean
}> = ({ aberto }) => {
  const [Aberto, setAberto] = useState(aberto);

  const handleFechaBackDrop = () => {
    setAberto(false);
  };

  useEffect(() => {
    setAberto(aberto);
  }, [aberto]);

  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={Aberto}
      onClick={handleFechaBackDrop}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

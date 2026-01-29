import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Globals } from '@shared/components/global';

createRoot(document.getElementById('root')!).render(
  <Globals>
    <App />
  </Globals>,
);

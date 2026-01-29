/* eslint-disable @typescript-eslint/no-explicit-any */
export const Envs = (() => {
  if (typeof window !== 'undefined' && (window as any).__ENV__) {
    return (window as any).__ENV__;
  }

  return {
    VITE_API_URL:  import.meta.env.VITE_API_URL,
    VITE_MUI_PRO:  import.meta.env.VITE_MUI_PRO,
    VITE_BUSCA_PLACA_API:  import.meta.env.VITE_BUSCA_PLACA_API,
    VITE_AUTH_SECRET:  import.meta.env.VITE_AUTH_SECRET,
    VITE_ENVIRONMENT_NAME:  import.meta.env.VITE_ENVIRONMENT_NAME,
  };
})();

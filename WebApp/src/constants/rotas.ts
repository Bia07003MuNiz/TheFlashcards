export const rotas = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  PAGAR: '/contas-a-pagar',
  PAGARNOVO: '/contas-a-pagar/novo',
  RECEBER: '/contas-a-receber',
  RELATORIOS: '/relatorios',

  FORNECEDORES: '/fornecedores',
  GERENCIAL: '/gerencial',
  NATUREZAS: '/naturezas',
  BANCOS: '/bancos',
  NOTIFICACOES: '/notificacoes',
} as const;

export const rotasDinamicas = {
  PAGAREDITAR: (id: string) => `/contas-a-pagar/${id}`,
};

export type ChaveRota = keyof typeof rotas;
export type CaminhoRota = typeof rotas[keyof typeof rotas];

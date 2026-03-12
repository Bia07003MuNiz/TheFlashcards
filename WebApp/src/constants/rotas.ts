export const rotas = {
  SALA: '/sala',
  SALA_NOVO: '/sala/novo',
  SALA_EDITAR: '/sala/editar/:id',

  NOTAS: '/notas',
  PERFIL: '/perfil',

  RELATORIOS_PROFESSOR: '/relatorios-professor',


  RELATORIOS_ALUNO: '/relatorios-aluno',

} as const;

export const rotasDinamicas = {
  PAGAREDITAR: (id: string) => `/contas-a-pagar/${id}`,
};

export type ChaveRota = keyof typeof rotas;
export type CaminhoRota = typeof rotas[keyof typeof rotas];

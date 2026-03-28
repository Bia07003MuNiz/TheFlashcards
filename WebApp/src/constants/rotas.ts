export const rotas = {
  SALA: '/sala',
  SALA_NOVO: '/sala/novo',
  SALA_EDITAR: '/sala/editar/:id',

  NOTAS: '/notas',
  PERFIL: '/perfil',

  RELATORIOS_PROFESSOR: '/relatorios-professor',

  INSTITUICAO: '/instituicao',
  INSTITUICAO_NOVO: '/instituicao/novo',
  INSTITUICAO_EDITAR: '/instituicao/editar/:id',

  RELATORIOS_ALUNO: '/relatorios-aluno',
  RESPONDER_SALA: '/responder-sala',

  LOGIN: '/login',
  CRIAR_CONTA: '/criar-conta',

  RECUPERAR_SENHA: '/recuperar-senha',
  ENVIAR_CODIGO: '/enviar-codigo',
  REDEFINIR_SENHA: '/redefinir-senha',

} as const;

export const rotasDinamicas = {
  TENTATIVA_ALUNO: (id: string) => `/relatorios-aluno/tentativa/${id}`,
};

export type ChaveRota = keyof typeof rotas;
export type CaminhoRota = typeof rotas[keyof typeof rotas];

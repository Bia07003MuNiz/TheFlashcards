import { z } from "zod";

export type RequestQueryDto = z.output<typeof RequestQuery>;
export const RequestQuery = z.object({
  limit: z.coerce.string().optional(),
  page: z.coerce.string().optional(),
  search: z.string().optional(),
  imported: z.string().optional(),
  semOnus: z.string().optional(),

  status: z.string().optional(),
  dataInicio: z.string().optional(),
  dataFinal: z.string().optional(),
  lat: z.string().optional(),
  lng: z.string().optional(),
  id_motorista: z.string().optional(),
  id_tipo_patrimonio: z.string().optional(),
  id_filial: z.string().optional(),
  idViagem: z.string().optional().nullable(),
  frotaId: z.string().optional(),
  chamador: z.string().optional(),


  ncv: z.string().optional(),
  ncvv1: z.string().optional(),
  statusJuridicoNcv: z.string().optional(),

  cpf: z.string().optional(),
  placa: z.string().optional(),
  motorista: z.string().optional(),
  patio: z.string().optional(),
  grupoPatios: z.string().optional(),
  ativo: z.string().optional(),
  code: z.string().optional(),
  deveTrazerTotalDeLiberacao: z.string().optional(),
  romaneio: z.string().optional(),
  nome: z.string().optional(),
  patios: z.array(z.string()).optional(),
  motoristaBool: z.string().optional(),
  edital: z.string().optional(),
  conferente: z.string().optional(),
  email: z.string().optional(),
  hash: z.string().optional(),
  cep: z.string().optional(),
  phone: z.string().optional(),
  size: z.string().optional(),
  modelo: z.string().optional(),
  marca: z.string().optional(),
});

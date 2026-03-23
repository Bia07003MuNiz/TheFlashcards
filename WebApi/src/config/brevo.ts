import SibApiV3Sdk from "sib-api-v3-sdk";

const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY!;

const api = new SibApiV3Sdk.TransactionalEmailsApi();

const TEMPO_EXPIRACAO_MINUTOS = 14;

export const enviarCodigoRecuperacao = (email: string, codigo: string) => {
  return api.sendTransacEmail({
    to: [{ email }],
    templateId: Number(process.env.BREVO_TEMPLATE_ID),
    params: { CODIGO: codigo, EXPIRACAO: `${TEMPO_EXPIRACAO_MINUTOS} minutos` },
    sender: { email: process.env.MAIL_SENDER as string, name: "The Flashcards" },
  });
};

export { TEMPO_EXPIRACAO_MINUTOS };
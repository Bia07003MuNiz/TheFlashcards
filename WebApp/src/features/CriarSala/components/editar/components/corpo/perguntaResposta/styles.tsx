import { Box, styled, Typography } from '@mui/material';

export const InputContainer = styled(Box)`
  width: 100%;
  margin-top: 16px;
`;

export const CardsContainerFlashcards = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 5%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

  .textos {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const BlocoAzulIcon = styled(Box)`
  width: 36px;
  height: 36px;
  padding: 8px;
  background-color: #eef2ff;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;


export const CardPerguntasERespostas = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: #f8fafc;
  border-radius: 14px;
  border: 1px solid #e2e8f0;

  .input {
    margin-top: 12px;
  }

  .MuiInputBase-root {
    background-color: #f8fafc;
  }

  .MuiOutlinedInput-root {
    background-color: #f8fafc;
  }
`;


export const CardVisualizarFlashcards = styled(Box)`
  width: 100%;
  height: 147.18px;
  padding: 16px;
  background-color: #fff;
  border-radius: 14px;
  border: 3px dashed #e2e8f0;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .titulo {
    font-size: 14px;
    color: #90a1b9;
    font-weight: 500;
  }

  .descricao {
    font-size: 12px;
    color: #90a1b9;
  }
`;

export const ContainerBotao = styled(Box)`
  margin-top: 12px;
  display: flex;
  gap: 12px;
  flex-direction: row;

  .botaoCustomizado {
    width: 100%;
  }
  .MuiButton-root {
    border-radius: 14px;
  }

  .botaoCustomizado {
    height: 48px;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
  }
`;

export const CardListaPerguntaAdicionado = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: #fff;
  border-radius: 14px;
  border: 2px solid #e2e8f0;
  margin-top: 16px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  .icon-livro {
    align-self: flex-start; 
    .numero-flashcard {
      font-weight: 600;
      font-size: 14px;
      color: #4f39f6;
    }
  }

  .conteudo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 15px;
  }

  .acoes {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    gap: 10px;
    margin-top: 10px;
  }

  .respostaTexto {
    color: #627891;
  }
  .respostaTextoDois {
    color: #627891;
    margin-top: 10px;
  }

`;

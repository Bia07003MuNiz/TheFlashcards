# 📚 TheFlashcards

Aplicação completa para estudo com flashcards, focada em aprendizado ativo, acompanhamento de desempenho e gestão educacional por perfis (aluno, professor e administrador).

---

## 🚀 Visão Geral

O **TheFlashcards** é uma plataforma que permite:

* Criar e responder flashcards
* Acompanhar desempenho por tentativas
* Gerenciar salas de estudo
* Visualizar relatórios detalhados
* Organizar notas pessoais

O sistema é dividido entre **Front-end (WebApp)** e **Back-end (WebApi)**.

---

## 🧱 Stack Tecnológica

### 🔹 Front-end (WebApp)

* React
* TypeScript
* Material UI
* Recharts
* TanStack Query

### 🔹 Back-end (WebApi)

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* Docker

---

## 👥 Perfis do Sistema

### 👤 Usuário

Base do sistema, pode evoluir para aluno ou professor.

---

### 🎓 Aluno

* Responde flashcards
* Pode responder várias vezes (tentativas)
* Gera relatórios por sessão (cada vez que responde)
* Visualiza histórico de desempenho
* Cria e edita notas
* Edita perfil

---

### 👨‍🏫 Professor

* Cria salas de estudo
* Gerencia flashcards das salas
* Visualiza relatórios dos alunos

  * Por aluno
  * Por tentativa
* Acompanha desempenho geral
* Também possui notas e perfil

---

### 🛠️ Admin

* Cria e gerencia instituições de ensino

---

## 📊 Funcionalidades Principais

* Sistema de estudo baseado em repetição ativa
* Relatórios detalhados por tentativa
* Controle de salas e alunos
* Dashboard com gráficos de desempenho
* Sistema de notas com prioridade
* Edição de perfil com upload de imagem

---

## 📁 Estrutura do Projeto

```
TheFlashcards/
│
├── WebApp/   → Front-end (React)
├── WebApi/   → Back-end (Node.js)
└── README.md
```

---

## ⚙️ Como Rodar o Projeto

### 🔹 Front-end

```bash
cd WebApp
npm install
npm run dev
```

---

### 🔹 Back-end

```bash
cd WebApi
npm install
npx prisma generate
npx prisma migrate dev
npm run start
```

---

### 🐳 Docker (opcional)

```bash
docker-compose up --build
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example` em cada projeto.

**Nunca suba o `.env` para o repositório.**

---

## 📈 Diferenciais

* Controle de múltiplas tentativas por aluno
* Relatórios detalhados por sessão (RelatorioPorVez)
* Interface moderna com Material UI
* Arquitetura separada (front + back)
* Pronto para deploy (Vercel + Docker)

---

## 📌 Observações

* Certifique-se de configurar corretamente as variáveis de ambiente
* O banco de dados deve estar rodando antes de iniciar a API
* O projeto está preparado para ambiente de desenvolvimento e produção

---

## 🧪 Status do Projeto

🚧 Em desenvolvimento contínuo

---

## 👩‍💻 Autora

Bianca Caroline

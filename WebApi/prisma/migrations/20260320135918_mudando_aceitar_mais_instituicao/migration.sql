/*
  Warnings:

  - You are about to drop the column `instituicao_id` on the `Usuario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_instituicao_id_fkey";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "instituicao_id";

-- CreateTable
CREATE TABLE "UsuarioInstituicao" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "instituicaoId" INTEGER NOT NULL,

    CONSTRAINT "UsuarioInstituicao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioInstituicao_usuarioId_instituicaoId_key" ON "UsuarioInstituicao"("usuarioId", "instituicaoId");

-- AddForeignKey
ALTER TABLE "UsuarioInstituicao" ADD CONSTRAINT "UsuarioInstituicao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioInstituicao" ADD CONSTRAINT "UsuarioInstituicao_instituicaoId_fkey" FOREIGN KEY ("instituicaoId") REFERENCES "Instituicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

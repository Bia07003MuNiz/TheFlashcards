-- AlterTable
ALTER TABLE "Sala" ADD COLUMN     "limite_tentativas" INTEGER,
ADD COLUMN     "permitir_tentativas" BOOLEAN NOT NULL DEFAULT false;

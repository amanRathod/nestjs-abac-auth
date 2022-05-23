-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accessTags" TEXT[],
ALTER COLUMN "password" DROP NOT NULL;

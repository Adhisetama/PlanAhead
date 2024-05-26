/*
  Warnings:

  - You are about to drop the column `isCompleted` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `isImportant` on the `Task` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "isCompleted",
DROP COLUMN "isImportant",
ADD COLUMN     "date2" TEXT,
ADD COLUMN     "date3" TEXT,
ADD COLUMN     "isRepeatable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'MEDIUM';

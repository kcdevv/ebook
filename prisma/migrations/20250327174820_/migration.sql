/*
  Warnings:

  - You are about to drop the `BookHelpful` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookHelpful" DROP CONSTRAINT "BookHelpful_bookId_fkey";

-- DropForeignKey
ALTER TABLE "BookHelpful" DROP CONSTRAINT "BookHelpful_userId_fkey";

-- DropTable
DROP TABLE "BookHelpful";

-- CreateTable
CREATE TABLE "BookComment" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookComment" ADD CONSTRAINT "BookComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookComment" ADD CONSTRAINT "BookComment_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

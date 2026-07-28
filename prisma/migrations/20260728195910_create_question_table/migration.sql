-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('LEETCODE');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "platform" "Platform" NOT NULL,
    "platformQuestionId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Question_slug_key" ON "Question"("slug");

-- CreateIndex
CREATE INDEX "Question_title_idx" ON "Question"("title");

-- CreateIndex
CREATE INDEX "Question_platformQuestionId_idx" ON "Question"("platformQuestionId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_platform_platformQuestionId_key" ON "Question"("platform", "platformQuestionId");

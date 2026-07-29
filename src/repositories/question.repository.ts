import { prisma } from "@/lib/prisma";
import type { QuestionImportData } from "@/types/question";
import { Platform } from "@/generated/prisma/enums";

export async function createManyQuestions(
  questions: QuestionImportData[]
): Promise<number> {
  const result = await prisma.question.createMany({
    data: questions.map((question) => ({
      platform: Platform.LEETCODE,
      platformQuestionId: question.platformQuestionId,
      title: question.title,
      slug: question.slug,
      url: question.url,
      difficulty: question.difficulty,
    })),

    skipDuplicates: true,
  });

  return result.count;
}
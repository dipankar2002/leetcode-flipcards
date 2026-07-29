import type { Difficulty } from "@/generated/prisma/enums";

export interface QuestionImportData {
  platformQuestionId: string;
  title: string;
  slug: string;
  url: string;
  difficulty: Difficulty;
}
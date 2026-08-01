import type { QuestionImportData } from "@/types/question";

import { QuestionRepository } from "@/repositories/question.repository";
import { QuestionSearchParams } from "@/types/search";

export interface ImportResult {
  total: number;
  imported: number;
}

export const QuestionService = {
  async import(
    questions: QuestionImportData[]
  ): Promise<ImportResult> {
    if (questions.length === 0) {
      throw new Error("No questions to import.");
    }

    const imported = await QuestionRepository.createMany(questions);

    return {
      total: questions.length,
      imported,
    };
  },

  async findAll(params: QuestionSearchParams) {
    return QuestionRepository.search(params);
  }
};
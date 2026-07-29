import type { QuestionImportData } from "@/types/question";
import { createManyQuestions } from "@/repositories/question.repository";

export async function importQuestions(
  questions: QuestionImportData[]
): Promise<number> {
  if (questions.length === 0) {
    throw new Error("No questions to import.");
  }

  return createManyQuestions(questions);
}
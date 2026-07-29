import { Difficulty } from "@/generated/prisma/enums";
import type { QuestionImportData } from "@/types/question";
import type { GitHubLeetCodeQuestion } from "./github-leetcode.source";

function mapDifficulty(difficulty: string): Difficulty {
  switch (difficulty) {
    case "Easy":
      return Difficulty.EASY;

    case "Medium":
      return Difficulty.MEDIUM;

    case "Hard":
      return Difficulty.HARD;

    default:
      throw new Error(`Unknown difficulty: ${difficulty}`);
  }
}

export function mapGitHubQuestion(
  question: GitHubLeetCodeQuestion
): QuestionImportData {
  return {
    platformQuestionId: question.frontend_id,
    title: question.title,
    slug: question.problem_slug,
    url: `https://leetcode.com/problems/${question.problem_slug}/`,
    difficulty: mapDifficulty(question.difficulty),
  };
}
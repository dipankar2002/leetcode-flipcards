import axios from "axios";
import type { QuestionImportData } from "@/types/question";
import { mapGitHubQuestion } from "./question.mapper";

const DATASET_URL =
  "https://raw.githubusercontent.com/neenza/leetcode-problems/master/merged_problems.json";

export interface GitHubLeetCodeQuestion {
  title: string;
  problem_id: string;
  frontend_id: string;
  difficulty: string;
  problem_slug: string;
}

interface GitHubLeetCodeResponse {
  questions: GitHubLeetCodeQuestion[];
}

export async function fetchLeetCodeQuestions(): Promise<QuestionImportData[]> {
  const response = await axios.get<GitHubLeetCodeResponse>(DATASET_URL);
  
  return response.data.questions.map(mapGitHubQuestion);
}
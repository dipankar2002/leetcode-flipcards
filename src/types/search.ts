// import type { Difficulty } from "./question";
import type { Difficulty } from "@/generated/prisma/enums";

export interface QuestionSearchParams {
  query?: string;
  difficulty?: Difficulty;

  page: number;
  limit: number;

  sortBy?: "title" | "difficulty" | "platformQuestionId" | "createdAt";

  sortOrder?: "asc" | "desc";
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}
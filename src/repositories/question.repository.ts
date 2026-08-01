import { prisma } from "@/lib/prisma";
import { Platform } from "@/generated/prisma/enums";
import type { Question } from "@/generated/prisma/browser";
import type { QuestionImportData } from "@/types/question";
import { PaginatedResponse, QuestionSearchParams } from "@/types/search";

export const QuestionRepository = {
  async createMany(questions: QuestionImportData[]): Promise<number> {
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
  },

  async search(params: QuestionSearchParams): Promise<PaginatedResponse<Question>> {
    const {
      query,
      difficulty,
      page,
      limit,
      sortBy = "platformQuestionId",
      sortOrder = "asc",
    } = params;

    const skip = ( page - 1 ) * limit;

    const where: any = {};
    if(query) {
      where.OR = [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          platformQuestionId: query,
        },
      ];
    }
    if(difficulty) {
      where.difficulty = difficulty;
    }

    const [ questions, total ] = await Promise.all([
      prisma.question.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        }
      }),
      prisma.question.count({
        where,
      })
    ])

    const totalPages = Math.ceil(total/limit);

    return {
      data: questions,

      pagination: {
        page,
        limit,
        total,
        totalPages,
      }
    }
  }
};


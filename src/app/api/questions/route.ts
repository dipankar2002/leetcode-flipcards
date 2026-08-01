import { QuestionService } from "@/services/question.service";
import { NextRequest, NextResponse } from "next/server";
import { Difficulty } from "@/generated/prisma/enums";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const params = {
        query: searchParams.get("query") ?? undefined,
        difficulty: (searchParams.get("difficulty") as Difficulty | null) ?? undefined,
        page: Math.max(Number(searchParams.get("page") ?? "1") || 1, 1),
        limit: Math.min(Number(searchParams.get("limit") ?? "20"), 50),
    };

    const result = await QuestionService.findAll(params);
    
    return NextResponse.json(result);
}
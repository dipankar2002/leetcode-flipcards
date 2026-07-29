import { fetchLeetCodeQuestions } from "../sources/github-leetcode.source";
import { QuestionService } from "@/services/question.service";

async function main() {
  console.log("🚀 Starting import...\n");

  const questions = await fetchLeetCodeQuestions();

  const result = await QuestionService.import(questions);

  console.log(`Downloaded : ${result.total}`);
  console.log(`Imported   : ${result.imported}`);

  console.log("\n🎉 Done!");
}

main().catch(console.error);
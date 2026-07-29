import { fetchLeetCodeQuestions } from "../sources/github-leetcode.source";
import { importQuestions } from "@/services/question.service";

async function main() {
  console.log("🚀 Starting import...\n");

  const questions = await fetchLeetCodeQuestions();

  console.log(`Downloaded ${questions.length} questions`);

  const imported = await importQuestions(questions);

  console.log(`Imported ${imported} questions`);

  console.log("\n🎉 Done!");
}

main().catch(console.error);
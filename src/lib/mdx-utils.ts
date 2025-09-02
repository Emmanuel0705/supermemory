import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

export async function loadMDXContent(filePath: string) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const source = fs.readFileSync(fullPath, "utf8");

    const { content } = await compileMDX({
      source,
      options: {
        mdxOptions: {
          rehypePlugins: [rehypeHighlight],
        },
      },
    });

    return content;
  } catch (error) {
    console.error("Error loading MDX content:", error);
    return null;
  }
}

export function getCodeFromMDX(content: string): string {
  // Extract code blocks from markdown content
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  const matches = content.match(codeBlockRegex);

  if (matches && matches.length > 0) {
    // Return the first code block content
    const firstMatch = matches[0];
    const codeContent = firstMatch
      .replace(/```(\w+)?\n/, "")
      .replace(/```$/, "");
    return codeContent;
  }

  return "";
}

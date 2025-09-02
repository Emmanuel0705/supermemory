import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get("file");

    if (!file) {
      return NextResponse.json(
        { error: "File parameter is required" },
        { status: 400 }
      );
    }

    // Only allow loading specific markdown files for security
    if (!file.endsWith(".md") && !file.endsWith(".mdx")) {
      return NextResponse.json(
        { error: "Only markdown files are allowed" },
        { status: 400 }
      );
    }

    const fullPath = path.join(process.cwd(), file);

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const content = fs.readFileSync(fullPath, "utf8");

    return NextResponse.json({
      content,
      file,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error loading MDX file:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

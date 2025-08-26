import { NextResponse } from "next/server";
import { parseString } from "xml2js";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  thumbnail?: string;
  categories: string[];
  author: string;
}

export async function GET() {
  try {
    // Replace 'YOUR_MEDIUM_USERNAME' with your actual Medium username
    const mediumUsername = "@emmanuelloluwatobi"; // Change this to your Medium username
    const rssUrl = `https://medium.com/feed/@${mediumUsername}`;

    const response = await fetch(rssUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch Medium RSS feed: ${response.status}`);
    }

    const xmlText = await response.text();

    // Parse the RSS XML using xml2js
    const posts: MediumPost[] = [];

    return new Promise<NextResponse>((resolve, reject) => {
      parseString(xmlText, (err, result) => {
        if (err) {
          reject(new Error(`Failed to parse XML: ${err.message}`));
          return;
        }

        const items = result.rss?.channel?.[0]?.item || [];

        items.forEach((item: any) => {
          const title = item.title?.[0] || "";
          const link = item.link?.[0] || "";
          const pubDate = item.pubDate?.[0] || "";
          const content =
            item["content:encoded"]?.[0] || item.description?.[0] || "";
          const author =
            item["dc:creator"]?.[0] || item.author?.[0] || "Unknown";

          // Extract categories/tags
          const categories: string[] = [];
          if (item.category) {
            const categoryArray = Array.isArray(item.category)
              ? item.category
              : [item.category];
            categoryArray.forEach((cat: any) => {
              if (cat && typeof cat === "string") {
                categories.push(cat.trim());
              }
            });
          }

          posts.push({
            title,
            link,
            pubDate,
            content,
            categories,
            author,
          });
        });

        resolve(NextResponse.json({ posts }));
      });
    });
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch Medium posts" },
      { status: 500 }
    );
  }
}

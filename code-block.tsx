import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  className?: string;
}

function CodeBlock({ children, className }: CodeBlockProps) {
  // Extract language from className (e.g., "language-javascript" -> "javascript")
  const language = className?.replace("language-", "") || "javascript";

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900 border border-gray-700">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-sm text-gray-300 font-mono">{language}</span>
        <button
          onClick={() => navigator.clipboard.writeText(children)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          Copy
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{
          margin: 0,
          padding: "1rem",
          backgroundColor: "transparent",
          fontSize: "0.875rem",
          lineHeight: "1.5",
        }}
        showLineNumbers={true}
        wrapLines={true}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;

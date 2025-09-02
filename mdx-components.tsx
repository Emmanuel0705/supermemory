import type { MDXComponents } from "mdx/types";
import CodeBlock from "./code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="mb-4 text-4xl font-bold" />,
    p: (props) => <p {...props} className="mb-4" />,
    pre: (props) => <pre {...props} className="mb-4" />,
    ul: (props) => <ul {...props} className="list-disc ps-8 mb-4" />,
    a: (props) => <a {...props} className="underline" />,
    code: (props) => {
      // If it's a code block (not inline code), use CodeBlock component
      if (props.className && props.className.includes("language-")) {
        return <CodeBlock {...props} />;
      }
      // Inline code
      return (
        <code
          {...props}
          className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono"
        />
      );
    },
    CodeBlock: (props) => <CodeBlock {...props} />,
    ...components,
  };
}

import CodeHeader from "@/components/CodeHighlight/CodeHeader";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="mb-4 text-4xl font-bold" />,
    p: (props) => <p {...props} className="mb-4" />,
    pre: (props) => <pre {...props} className="rounded-b-lg" />, // remove most of our original styles for the code blocks
    CodeHeader, // this component can be entered as-is
    ...components,
  };
}

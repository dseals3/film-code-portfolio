"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code }: { code: string }) {
  return (
    <SyntaxHighlighter
        language="tsx"
        style={oneDark}
        wrapLines={false}
        customStyle={{
        fontSize: "0.8rem",
        borderRadius: "0.75rem",
        margin: 0,
        border: "1px solid rgba(255,255,255,0.1)",
        padding: "1rem",
        }}
    >
        {code}
    </SyntaxHighlighter>
  );
}
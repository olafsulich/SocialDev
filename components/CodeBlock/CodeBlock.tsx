import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface Props {
  language: string;
  value: string;
}

const CodeBlock: React.FC<Props> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} useInlineStyles={false} style={{}}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

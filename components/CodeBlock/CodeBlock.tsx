import React from "react";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";

const CodeBlock: React.FC<SyntaxHighlighterProps> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} useInlineStyles={false} style={{}}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

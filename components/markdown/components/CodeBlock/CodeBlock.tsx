import React from 'react';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';

type Props = {
  value: string;
} & SyntaxHighlighterProps;

const CodeBlock = ({ language, value }: Props) => (
  <SyntaxHighlighter language={language} useInlineStyles={false} style={{}}>
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;

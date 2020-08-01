import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './components/CodeBlock/CodeBlock';
import HeadingRenderer from './components/HeadingRenderer/HeadingRenderer';

type Props = {
  source: string;
};

const Markdown = ({ source }: Props) => (
  <ReactMarkdown source={source} escapeHtml={false} renderers={{ code: CodeBlock, heading: HeadingRenderer }} className="post" />
);

export default Markdown;

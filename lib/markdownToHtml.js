import remark from 'remark';
import html from 'remark-html';
import headings from 'remark-autolink-headings';
import slug from 'remark-slug';
import markdown from 'remark-parse';
const highlight = require('remark-highlight.js');
const codesandbox = require('remark-codesandbox');
const a11yEmoji = require('@fec/remark-a11y-emoji');
const codeTitle = require('remark-code-titles');

export default async function markdownToHtml(code) {
  const result = await remark()
    .use(codesandbox, { mode: 'iframe' })
    .use(markdown)
    .use(codeTitle)
    .use(highlight)
    .use(a11yEmoji)
    .use(slug)
    .use(headings)
    .use(html)
    .process(code);
  return result.toString();
}
